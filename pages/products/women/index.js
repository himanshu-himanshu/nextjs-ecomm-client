import Head from "next/head";

import { Quote, Navbar, Footer } from "../../../components";
import Women from "./Women";

const index = () => {
  return (
    <>
      <Head>
        <title>Women Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Women />
      <Quote />
      <Footer />
    </>
  );
};

export default index;
