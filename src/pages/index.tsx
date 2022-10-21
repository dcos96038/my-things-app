import React from "react";
import {GetServerSideProps} from "next";

const HomePage = () => {
  return <div>HomePage</div>;
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { data } = await  // your fetch function here

  return {
    props: {},
  };
};

export default HomePage;
