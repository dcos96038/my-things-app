import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {useSession} from "next-auth/react";

import {getServerAuthSession} from "../server/common/get-server-auth-session";
import {Layout} from "../components/layouts/Layout";

const HomePage: NextPage = () => {
  const data = useSession();

  return (
    <Layout>
      <h1>Welcome: {data.data?.user?.name}</h1>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default HomePage;
