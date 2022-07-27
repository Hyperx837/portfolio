import Image from "next/image";
const About = () => (
  <div className="flex flex-col bg-black  w-full lg:p-20">
    <span className="title">About Me</span>
    <div className="flex flex-col xl:flex-row w-full my-10">
      <div className="rounded-2xl  mb-10 w-[330px] overflow-clip xl:mr-20 grayscale mx-auto aspect-[1.15/1.1]">
        <Image src="/images/me.webp" alt="picture of me" layout="fill" />
      </div>
      <div className="font-[Montserrat] text-lg w-10/12 max-w-[50rem] mx-auto">
        <p>
          Hi there I&apos;m Anupama. A student in Sri Lanka. I am currently
          studying mathematics for my higher studies. I am 16 years old and I
          expect to graduate on the year 2024.
        </p>
        <p className="mt-5 first-letter:ml-10">
          I have used python for 3 years, and Javascript for about 2 years. I
          build bots (discord.py), scrapers, scripting and other automation
          stuff with python. and with Javascript I build front-end websites
          using frameworks like Next.js and React. I also am an open source
          collaborator and a Linux user (I use Arch btw).
        </p>
        <p className="text-glow mt-10">
          <span className="text-gradient">Fun Fact:</span> I am a PSG fan and I
          am something of a right winger myself ; )
        </p>
      </div>
    </div>
  </div>
);
export default About;
