import Card from "./components/card";

export default function About() {
  return (
    <div className="mb-64 w-3/5 mx-auto">
      <Card
        imageFirst={true}
        imageLessRounded={false}
        objectFit="cover"
        src="/avatar.jpeg"
        titleHeader="About me"
        content="Passionate Software Developer based in Chicago, Illinois 📍"
        description="As a recent graduate of Washington University in St. Louis, I am a computer science enthusiast concentrating on front- and back-end development utilizing various technical stacks including Javascript, React, TypeScript, Python, Java, PHP, MySQL, and more. I bring the most efficient and user-friendly products to the world by commiting myself to become a developer who optimizes, maintains, and challenges codes."
      />
    </div>
  );
}
