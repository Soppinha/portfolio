import { FC } from "react";
import { TextBanner } from "./AnimatedText";

type SubtitleProps = {
    text: string;
}

export const Subtitle: FC<SubtitleProps> = ({ text }) => {
    return (
        <div className="flex w-screen justify-center text-yellow-lemonade font-Raleway font-black text-[5.5vw] md:text-[4.5vw]">
            <span>&#123;&#160;</span>
            <TextBanner className="text-white font-Rockwell font-bold" arr={[text, " Kotlin", "Java", "Python", "Javascript"]} />
            <span>&#125;</span>
        </div>
    );
};
