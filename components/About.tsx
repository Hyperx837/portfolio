import Image from "next/image";
const About = () => (
  <div className="flex flex-col bg-black  w-full lg:p-20">
    <span className="text-[4rem] lg:text-[5rem]  underline font-[blast] text-center">
      About Me
    </span>
    <div className="flex flex-col lg:flex-row w-full mt-10">
      <div className="rounded-2xl  mb-10 w-[330px] h-[310px] lg:w-[430px] lg:h-[400px] overflow-clip lg:mr-20 grayscale mx-auto">
        <Image
          src="/images/me.webp"
          width={430}
          height={400}
          alt="picture of me"
        />
      </div>
      <div className="font-[Montserrat] text-lg w-96 lg:w-[50rem] mx-auto">
        <p>
          Hi there I&apos;m Anupama. A student in Sri Lanka. I am currently
          studying mathematics for my higher studies. I am 17 years old and I
          expect to graduate on the year 2024.
        </p>
        <p className="mt-5 first-letter:ml-10">
          I have used python for 2 years, and Javascript for about 1.5 years. I
          build bots (discord.py), scrapers, scripting and other automation
          stuff with python. and with Javascript I build front-end websites
          using frameworks like Next.js and React. I also am an open source
          collaborator and a Linux enthusiast (I use Arch btw).
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
