import React from "react";
import Card from "./components/card";

export default function About() {
  return (
    <div id="about" className="w-5/6 md:w-3/5 mx-auto">
      <Card
        imageFirst={true}
        objectFit="cover"
        src="/avatar.jpeg"
        titleHeader="About me"
        content="Passionate Software Developer based in Chicago, Illinois 📍"
        description="As a recent graduate of Washington University in St. Louis, I am a computer science enthusiast concentrating on front- and back-end development utilizing various technical stacks including Javascript, React, TypeScript, Python, Java, PHP, MySQL, and more. I bring the most efficient and user-friendly products to the world by commiting myself to become a developer who optimizes, maintains, and challenges codes."
        isHoverable={false}
      />
    </div>
  );
}
