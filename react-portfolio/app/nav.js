import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMenu4Line, RiMoonClearLine } from "react-icons/ri";
import DropDownBtn from "./components/dropdown";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 py-10 flex justify-end dark:text-white mr-6">
      <ul className="flex items-center gap-4">
        {/* <li>
          <RiMoonClearLine
            // onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl fill-anti-flash-white"
          />
        </li> */}
        <li>
          <a
            className="bg-gradient-to-r from-anti-flash-white to-thristle text-white px-4 py-2 border-none rounded-md hover:text-brown-rose"
            href="/Chan_Lee_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <DropDownBtn />
        </li>
      </ul>
    </nav>
  );
}
