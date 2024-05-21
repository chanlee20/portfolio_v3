import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 py-10 flex justify-end dark:text-white mr-6">
      <ul className="flex  items-center">
        <li>
          <RiMoonClearLine
            // onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl fill-anti-flash-white"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-anti-flash-white to-thristle text-white px-4 py-2 border-none rounded-md ml-8"
            href="/Chan_Lee_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
