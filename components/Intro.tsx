import Image from "next/image";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import TypeWriter from "./TypeWriter";

const About = () => {
  const [color, setColor] = useState("");
  const { text, count } = useTypewriter({
    words: ["Developer", "Freelancer", "Programmer", "Student"],
    loop: 0,
  });

  useEffect(() => {
    let colors = ["yellow", "blue", "green", "red"];
    setColor(`text-${colors[count % 4]}`);
  }, [count]);

  return (
    <div
      className="flex lg:flex-row pl-20  justify-around flex-col-reverse  mb-20"
      id="about"
    >
      <div className="flex justify-center lg:w-[45%] sm:w-full sm:mt-20 lg:m-0 overflow-clip rounded-full">
        <Image
          src="/images/avatar.webp"
          alt="pic of my avatar"
          width={560}
          height={630}
        />
      </div>
      <div className="pl-2 flex flex-col w-full lg:w-[55%] pt-16">
        <span className="text-[2.8rem] md:text-[4rem] lg:text-[4.5rem]  font-[Poppins]  leading-[4rem] lg:leading-[5rem]  mx-auto lg:mx-0 text-center lg:text-left text-glow">
          I am
          <br />
          <span className="font-[brussels] text-gradient">
            Anupama Dissanayake
          </span>
        </span>
        <span className="flex text-[2.8rem] md:text-[4rem] lg:text-[3rem]  font-[Poppins]  leading-[4rem] lg:leading-[5rem]  mx-auto lg:mx-0 text-center lg:text-left">
          I am a <span className={`${color} ml-4`}> {text}</span>
          <span className={`${color} blink`}>_</span>
        </span>
        <TypeWriter />
        <button className="btn mx-auto lg:mx-0 py-4 mt-20 w-96 ">
          Let's Chat
        </button>
      </div>
    </div>
  );
};

export default About;
