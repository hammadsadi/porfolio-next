import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

const MyModal = ({
  isOpen,
  setIsOpen,
  children,
  diaglogTitle,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  diaglogTitle: string;
}) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{diaglogTitle}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyModal;
