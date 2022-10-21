import {useSession} from "next-auth/react";
import React from "react";

import {Navbar} from "../Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  const data = useSession();

  return (
    <div className="min-h-screen bg-gray-700">
      <Navbar username={data.data?.user?.name!} />
      <div>{children}</div>
    </div>
  );
};
