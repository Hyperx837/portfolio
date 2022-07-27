import { NextComponentType } from "next";
import Image from "next/image";
import { openURL } from "utils";

interface Props {
  name: string;
  children: React.ReactNode;
  img: string;
  gh: string;
  web?: string;
}

const Project = ({ name, children, img, gh, web }: Props) => (
  <div className="w-96 h-[30rem]  flex flex-col rounded-lg shadow-lg  overflow-clip bg-black pb-7">
    <div className="relative aspect-video min-h-[200px]">
      <Image src={`/images/projects/${img}`} layout="fill" alt={name} />
    </div>
    <div className="flex flex-col w-10/12 mx-auto h-full">
      <a
        className="font-[Poppins] font-bold text-[2rem] text-center hover:underline  my-3 cursor-pointer"
        onClick={openURL(`https://github.com/${gh}`)}
      >
        {name}
      </a>
      <p className="text-slate-700 font-[Montserrat] text-[1.1rem]">
        {children}
      </p>
      <a
        className="text-sky-600 mt-auto font-[Poppins] hover:underline decoration-sky-500 cursor-pointer"
        onClick={openURL(`https://${web}`)}
      >
        {web}
      </a>
    </div>
  </div>
);

const Projects: NextComponentType = () => (
  <div className="py-20 w-10/12 mx-auto" id="work">
    <span className="title">My Work</span>
    <div className="flex flex-wrap mt-10 justify-evenly gap-y-16">
      <Project
        name="Kithulgodaranya"
        img="kithulgodaranya.png"
        gh="kithulgodaranya/kithulgodaranya.github.io"
        web="kithulgodaranya.github.io"
      >
        A website made for a temple located in Sri Lanka
      </Project>
      <Project
        name="Technicolor"
        img="technicolor.png"
        gh="Hyperx837/technicolor"
        web="technicolor.netlify.app"
      >
        The Website for an annual school compition. this project was made alive
        with help of the fellow school students and an equal credit goes to them
      </Project>
      <Project name="Moddy" img="moddy.png" gh="moddy">
        Moderation Discord bot for your server
      </Project>
      <Project
        name="Asphalt Gaming machine"
        img="asphalt.png"
        gh="Hyperx837/realworld-asphalt8"
      >
        This was a project with my friend where we implemented a gaming machine
        for asphalt 8 with arduino and pyfirmata
      </Project>
      <Project name="~/.dotfiles" img="dotfiles.png" gh="Hyperx837/.dotfiles">
        These are my dotfiles for linux system. I frequently configure them to
        customize my system
      </Project>
    </div>
  </div>
);

export default Projects;
