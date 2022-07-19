import Image from "next/image";
const About = () => (
  <div className="flex flex-col bg-black h-[50rem] w-full lg:p-20">
    <span className="text-[4rem] lg:text-[5rem]  underline font-[blast]">
      About Me
    </span>
    <div className="flex w-full mt-10">
      <div className="rounded-2xl w-[430px] h-[400px] overflow-clip mr-20 grayscale">
        <Image
          src="/images/me.webp"
          width={430}
          height={400}
          alt="picture of me"
        />
      </div>
      <div className="font-[Montserrat] text-lg w-[50rem] ">
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
