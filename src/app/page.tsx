import PlayMusic from "@/components/PlayMusic";
import About from "@/sections/About";
import Description from "@/sections/Description";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Project from "@/sections/Project";

export default function Home() {
  return (
    <div className=" relative h-[2000px] overflow-hidden">
      <PlayMusic />
      <Header />
      <Hero />
      <Description />
      <About />
      <Project />
    </div>
  );
}
