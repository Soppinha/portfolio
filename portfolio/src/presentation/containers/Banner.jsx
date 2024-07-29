import { Divider, Exclamation, Star } from "../../util/MyIcons.jsx";
import { TextBanner } from "../components/TextBanner.jsx";

export const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-banner bg-no-repeat bg-cover">
      <div className="backdrop-blur-[188px] gap-6 px-24 flex flex-col justify-center w-full h-full font-Raleway font-black text-7xl">
        <div className="flex gap-4">
          <span className="text-yellow-lemonade">TODOS</span>
          <span className="text-white">os meus</span>
        </div>

        <div className="flex flex-row w-full place-items-baseline gap-12 ">
          <span className="flex justify-center items-center gap-1 text-white">
            pr
            <Star />
            jetos
          </span>
          <Divider />
          <TextBanner array={["Kotlin", "Java", "Python", "JavaScript"]} />
        </div>
        <div>
          <span className="text-white flex gap-4 justify-end">
            em <span className="text-intense-purple">um</span> só lugar <Exclamation/>
          </span>
        </div>
      </div>
    </div>
  );
};
