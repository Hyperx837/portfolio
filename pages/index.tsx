/* eslint-disable @next/next/no-page-custom-font */
import Intro from "components/Intro";
import About from "components/About";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/Home.module.css";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Anupama Dissanayake" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Intro />
        <About />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
