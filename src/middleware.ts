export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/blogs", "/dashboard/projects", "/dashboard/messages"],
};
