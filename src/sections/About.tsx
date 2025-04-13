import Image from "next/image";
import FigmaSvg from "../assets/icons/figma.svg";
import JavascriptSvg from "../assets/icons/javascript.svg";
import ReactSvg from "../assets/icons/react.svg";
import TailwindSvg from "../assets/icons/tailwindcss.svg";

const About = () => {
  const toolItems = [
    {
      imageUrl: FigmaSvg,
      title: "Figma",
      desc: "Design Tool",
    },
    {
      imageUrl: ReactSvg,
      title: "React.js",
      desc: "Library",
    },
    {
      imageUrl: TailwindSvg,
      title: "Tailwind CSS",
      desc: "User Interface",
    },
    {
      imageUrl: JavascriptSvg,
      title: "Javascript",
      desc: "Interaction",
    },
    {
      imageUrl: FigmaSvg,
      title: "Figma",
      desc: "aaaaa",
    },
    {
      imageUrl: FigmaSvg,
      title: "Figma",
      desc: "aaaaa",
    },
    {
      imageUrl: FigmaSvg,
      title: "Figma",
      desc: "aaaaa",
    },
  ];
  return (
    <section id="about" className="mt-20">
      <div className="container-content">
        <div>
          <p className=" uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-World Results
          </p>
          <h2 className=" font-serif text-3xl text-center mt-4">
            Essential Tools I use
          </h2>
          <p className="text-center text-white/60 mt-4">
            Discover the powerfull tools and technologies I use to create
            <br></br>
            exceptional, high-performing websites & applications.
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mt-5">
            {toolItems?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group"
              >
                <div className=" bg-zinc-700/50 rounded-lg overflow-hidden size-12 p-2 group-hover:bg-zinc-900 transition-colors">
                  <Image
                    src={item.imageUrl}
                    alt="tool icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3>{item?.title}</h3>
                  <p className="text-zinc-400 text-sm">{item?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
