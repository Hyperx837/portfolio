/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "styles/Home.module.css";

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
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
