import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return <div className="w-full">{children}</div>;
};

export default Layout;
