import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import classNames from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={classNames.root}>
      <Header />
    </div>
  );
};

export default Home;
