import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import SectionTitle from "./section-title";

export default function Card({
  imageFirst,
  isProject = false,
  src,
  titleHeader,
  content="",
  description,
  skills=[],
  github_link="",
  project_link="",
  objectFit = "fill",
}) {
  return (
    <>
      <div
        className={`flex justify-center gap-x-6 items-start mt-20 ${
          imageFirst ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className=" rounded-md w-72 h-72 relative overflow-hidden max-w-72 max-h-72 basis-2/5">
          <Image src={src} layout="fill" objectFit={objectFit} alt="image"/>
        </div>
        <div className="basis-3/5">
          <SectionTitle title={titleHeader} content={content} />
          <p className="text-white mt-6">{description}</p>
          {isProject ? (
            <>
              <div className="text-white flex mt-6 gap-6">
                {skills.map((skill, key) => (
                  <p
                    key={key}
                    className="bg-gradient-to-r from-anti-flash-white to-thristle text-white px-4 py-2 border-none rounded-md shadow-md"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="text-5xl flex gap-6 py-3 dark:text-gray-400 text-white">
                {github_link ? (
                  <a
                    target="_blank"
                    href={github_link}
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                ) : (
                  <></>
                )}
                {project_link ? (
                  <a
                    target="_blank"
                    href={project_link}
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
