import Image from "next/image";
import React from "react";

export default function TechStacks() {
  const srcs = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  ];
  return (
    <div className="flex items-center justify-center mt-5">
      <p className="text-white font-semibold"> Tech Stacks </p>
      <div className="flex">
        {srcs.map((src, key) => (
          <div
            key={key}
            className="mx-2 w-12 h-12 relative overflow-hidden max-w-12 max-h-12"
          >
            <Image src={src} layout="fill" objectFit="fill" alt="tech image"/>
          </div>
        ))}
      </div>
    </div>
  );
}
