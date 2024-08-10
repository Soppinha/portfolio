import {Exclamation, Star, Web} from "../../util/MyIcons";
import BlurFade from "../components/magicui/blur-fade";
import Particles from "../components/magicui/particles";
import {MarqueeList} from "@/ui/containers/MarqueeRow.tsx";

export const Banner = () => {
    return (
        <article
            className="flex flex-col backdrop-blur-[50px] justify-start items-center h-screen sm:h-[40vh] lg:h-screen w-screen ">
            <Particles
                className="absolute inset-0"
                quantity={300}
                ease={80}
                color="#990DCE"
                refresh
            />
            <div
                className="leading-[7vw] pt-[12vw] md:pt-[6vw] sm:pt-[6vw] px-8 md:px-24 gap-2 relative flex flex-col justify-center items-center h-full w-full font-Raleway font-black text-[2.5rem] md:text-[6vw] transition-all">
                <BlurFade delay={0.25} inView>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="text-yellow-lemonade">
                            TODOS
                        </span>
                        <span className="text-white">os meus </span>
                        <span className="flex gap-1 text-white">
                            pr
                            <Star/>
                            jetos
                        </span>
                    </div>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                    <div className="flex justify-center gap-4 text-white">
                        <span className="flex gap-2 md:gap-4 justify-end items-center">
                            em
                            <span className="flex text-intense-purple">um</span>
                            <span className="flex items-center">só lugar <Exclamation/></span>
                        </span>
                    </div>
                </BlurFade>
            </div>

            <div
                className="flex flex-col justify-between overflow-hidden w-[80%] h-[50%] md:h-[70%] bg-[#161616] rounded-t-[1vw] drop-shadow-[0_-15px_10px_rgba(0,0,0,0.3)]">
                <div
                    className="flex px-[2vw] w-full py-[1%] bg-intense-purple rounded-t-[1vw] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    <Web/>
                </div>
                <div className="bg-[url('./src/ui/assets/vscode.png')] h-full bg-no-repeat bg-cover"/>
            </div>
            <MarqueeList/>
        </article>
    );
};
