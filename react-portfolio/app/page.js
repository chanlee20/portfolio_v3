"use client";
import Head from "next/head";
import About from "./about";
import Footer from "./footer";
import Intro from "./intro";
import NavigationBar from "./nav";
import Project from "./project";
import WorkExperience from "./work-experience";

export default function Home() {

  return (
    <div className="bg-regal-green">
      <Head>
        <title>Chan Lee Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-16x16.ico" />
      </Head>
      <NavigationBar />
      <Intro />
      <About />
      <WorkExperience />
      <Project />
      <Footer />
    </div>
  );
}
