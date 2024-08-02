import { Divider, Exclamation, Star } from "../../util/MyIcons.jsx";
import { TextBanner } from "../components/AnimatedText.jsx";
import { MarqueeList } from "./Marquee.jsx";

export const Banner = () => {
  return (
    <article className="flex flex-col backdrop-blur-[50px] justify-center items-center min-h-[60vw] md:min-h-screen w-screen ">
      <div className="pt-[4rem] pb-[5vw] md:pt-[8vw] md:pb-[4vw] px-8 md:px-24 flex flex-col justify-center h-full w-full md:justify-center font-Raleway font-black text-[6vw] transition-all">
        <div className="flex gap-4">
          <span className="text-yellow-lemonade">
            TODOS <span className="text-white">os meus</span>
          </span>
        </div>

        <div className="flex flex-row h-[8vw] w-full place-items-center gap-6 md:gap-12 ">
          <span className="flex justify-center items-center gap-1 text-white">
            pr
            <Star />
            jetos
          </span>
          <Divider />
          <TextBanner array={["Kotlin", "Java", "Python", "JavaScript"]} />
        </div>
        <div>
          <span className="text-white flex gap-2 md:gap-4 justify-end">
            em <span className="text-intense-purple">um</span> só lugar
            <Exclamation />
          </span>
        </div>
      </div>
      <div className="bg-intense-purple py-[1.2vw]">
        <MarqueeList />
      </div>
    </article>
  );
};
