"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import SectionTitle from "./section-title";

export default function Card({
  imageFirst,
  isProject = false,
  src,
  titleHeader,
  content = "",
  description,
  skills = [],
  github_link = "",
  project_link = "",
  objectFit = "fill",
  isHoverable = true,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        className={`md:flex md:justify-center gap-x-6 md:items-start mt-20 ${
          imageFirst ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={` rounded-md w-72 h-72 relative overflow-hidden max-w-72 max-h-72 basis-2/5 hidden md:block ${
            isHoverable
              ? "transform hover:-translate-y-2 hover:shadow-2xl hover:duration-500"
              : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image src={src} layout="fill" objectFit={objectFit} alt="image" />
          {isHoverable && hovered && (
            <div className="text-5xl text-white absolute inset-0 flex justify-center items-center gap-6 bg-brown-rose bg-opacity-50">
              {github_link ? (
                <a target="_blank" href={github_link} rel="noopener noreferrer">
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
          )}
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
              <div className="block md:hidden">
                <div className="text-5xl flex gap-6 py-3 dark:text-gray-400 text-white">
                  <a
                    target="_blank"
                    href={github_link}
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    target="_blank"
                    href={project_link}
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
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
