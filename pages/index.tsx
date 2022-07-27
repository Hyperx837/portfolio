/* eslint-disable @next/next/no-page-custom-font */
import Intro from "components/Intro";
import About from "components/About";
import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Projects from "components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Anupama Dissanayake" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <NavBar />
        <Intro />
        <About />
        <Projects />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
