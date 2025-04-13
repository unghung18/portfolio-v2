import SparkleIcon from "@/assets/icons/SparkleIcon";
import StartIcon from "@/assets/icons/StartIcon";
import HeroObit from "@/components/HeroObit";
import Image from "next/image";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import grainImage from "../assets/images/grain.jpg";
import memoji1 from "../assets/images/memoji-computer.png";

const Hero = () => {
  return (
    <div className="py-32 md:py-20 lg:py-40 relative z-0">
      {/* background */}
      <div className=" absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroObit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroObit>

        <HeroObit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroObit>

        <HeroObit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className=" size-2 rounded-full bg-emerald-300/20"></div>
        </HeroObit>

        <HeroObit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroObit>

        <HeroObit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-12 text-emerald-300" />
        </HeroObit>

        <HeroObit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-8 text-emerald-300" />
        </HeroObit>

        <HeroObit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className=" size-2 rounded-full bg-emerald-300/20"></div>
        </HeroObit>

        <HeroObit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroObit>

        <HeroObit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroObit>

        <HeroObit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="text-emerald-300 size-28" />
        </HeroObit>
      </div>

      {/* content */}
      <div className="container-content relative">
        <div className="link__socials md:text-2xl">
          <a
            href="https://github.com/unghung18"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="social-icon" />
          </a>

          <a
            href="https://www.messenger.com/t/100058122019367/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="social-icon" />
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram className="social-icon" />
          </a>
        </div>

        <a
          href="#contact"
          className="absolute bottom-5 hidden md:block right-0 rotate-90 z-50 text-sm tracking-wide text-emerald-300 hover:text-white"
        >
          Scroll Down
        </a>

        <div className=" flex flex-col items-center">
          <Image src={memoji1} className=" size-[100px]" alt="memoji" />
          <div className=" bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className=" bg-green-500 size-2.5 rounded-full relative">
              <div className=" bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
            </div>
            <div className=" text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto md:text-lg ">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            I'm Ứng Hùng
          </h1>
          <p className="mt-4 text-center text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            suscipit sequi sint voluptatibus
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
            <span className="">Dowload my cv</span>
            <GoDownload />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer">
            <span className="">Let connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
