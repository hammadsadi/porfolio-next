"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TContactMessage } from "@/types/index.types";
import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
const MessagesPage = () => {
  const { data: session } = useSession();
  const [messagesList, setMessagesList] = useState([]);

  // Handle Delete Message
  const handleDeleteMessage = async (id: string) => {
    const res = await fetch(
      `https://portfolio-api-opal.vercel.app/api/v1/message/${id}`,
      {
        method: "DELETE",
      }
    );
    const msg = await res.json();
    if (msg?.data) {
      return toast.success("Message Deleted Successful");
    } else {
      toast.error("Failed to Delete Message");
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch(
        "https://portfolio-api-opal.vercel.app/api/v1/message"
      );
      const messageData = await res.json();
      setMessagesList(messageData?.data);
    };
    getMessages();
  }, [messagesList]);
  return (
    <div className={`${session?.user ? "flex-1 md:ml-[270px]" : ""}`}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Message</TableHead>
            <TableHead className="text-right">Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messagesList.map((item: TContactMessage) => (
            <TableRow key={item?._id}>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.message?.slice(0, 40)}</TableCell>
              <TableCell className="text-right">{item?.email}</TableCell>
              <TableCell className="text-right space-x-1">
                <Button
                  onClick={() => handleDeleteMessage(item._id)}
                  size="sm"
                  className="bg-rose-500 "
                >
                  <FaTrashAlt />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MessagesPage;
