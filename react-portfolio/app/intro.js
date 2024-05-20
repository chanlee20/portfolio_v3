import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import Image from "next/image";

export default function Intro() {
  return (
    <div className="text-white mb-64">
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 ">Chan Lee</h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Software Engineer
        </h3>
        <p className="text-md py-5 leading-8 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I am an incoming <span className="font-bold"> Software Engineer @PayPal </span> SDK team! Scroll down to learn more about me 👋
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 dark:text-gray-400">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
        <div className="mx-auto rounded-full w-72 h-72 relative overflow-hidden mt-10 max-w-72 max-h-72">
          <Image src={"/profile.jpeg"} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
