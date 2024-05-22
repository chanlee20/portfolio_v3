import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center mx-auto text-white gap-4 bg-thristle py-6 mt-64">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-semibold"> Chan Lee </p>
        <p className="italic">
          {" "}
          Writing code to make imagination a step closer to reality
        </p>
      </div>

      <div className="text-3xl flex justify-center gap-16 py-3 dark:text-gray-400">
        <a
          target="_blank"
          href="https://github.com/chanlee20"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/chan-lee-b38135a5/"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/chan.lee20/"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>

      <div className="text-center">
        <p> &#169; Chan Lee 2024 All Rights Reserved </p>
        <p className="italic text-sm"> Built by NextJS, Deployed by Vercel </p>
      </div>
    </footer>
  );
}
