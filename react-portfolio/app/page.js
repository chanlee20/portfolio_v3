import About from "./about";
import Intro from "./intro";
import NavigationBar from "./nav";
import Project from "./project";

export default function Home() {
  return (
    // <div className="bg-gradient-to-b from-regal-green to-white">
    <div className="bg-regal-green">
      <NavigationBar />
      <Intro />
      <About />
      <Project />
    </div>
  );
}
