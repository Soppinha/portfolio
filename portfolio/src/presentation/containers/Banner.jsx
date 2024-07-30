import { Divider, Exclamation, Star } from "../../util/MyIcons.jsx";
import { TextBanner } from "../components/TextBanner.jsx";

export const Banner = () => {
  return (
    <div className="flex justify-center items-center md:min-h-screen w-screen ">
      <div className=" backdrop-blur-[308px] pt-[18vw] pb-[12vw] md:py-[6vw] px-12 md:px-24 flex flex-col h-full w-full md:justify-center font-Raleway font-black text-[6vw]">

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
    </div>
  );
};
