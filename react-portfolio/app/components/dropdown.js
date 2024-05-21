import { RiComputerLine, RiHome4Line, RiMenu4Line } from "react-icons/ri";
import { IoDocumentTextOutline, IoPersonOutline } from "react-icons/io5";
import Link from "next/link";

export default function DropDownBtn() {
  const options = [
    { title: "Home", link: "#intro", icon: <RiHome4Line /> },
    { title: "About", link: "#about", icon: <IoPersonOutline /> },
    { title: "Work Experience", link: "#work-experience", icon: <RiComputerLine /> },
    { title: "Projects", link: "#project", icon: <IoDocumentTextOutline /> },
  ];

  const Option = ({ title, link, icon }) => {
    return (
      <li>
        <Link
          href={link}
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div className="flex gap-2 items-center">
            {icon}
            {title}
          </div>
        </Link>
      </li>
    );
  };

  

  return (
    <div className="relative inline-block text-left group dropdown">
      <a className="text-white hover:text-brown-rose ">
        {" "}
        <RiMenu4Line />
      </a>

      <div className="w-44 group-hover:block dropdown-menu absolute hidden h-auto right-0 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
        <ul className="py-1 top-0">
          {options.map((option) => (
            <Option
              title={option.title}
              link={option.link}
              icon={option.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
