import {useScrollToSection} from "../hooks/scroll";
import {FC} from "react";

type LabelOptionsProps = {
    label: string,
    className?: string,
    id: string,
}

export const LabelOption: FC<LabelOptionsProps> = ({label, className, id}) => {
    const scrollToSection = useScrollToSection(id as string);
    return (
        <div
            className="flex flex-col relative justify-center group font-OpenSans font-semibold text-[2.8vw] md:text-[16px]">
            <button onClick={scrollToSection} className={className}>
                {label}
            </button>
            <div
                className="w-0 h-1 rounded absolute top-full left-1/2 translate-x-[-50%] group-hover:w-full duration-500 bg-intense-purple"/>
        </div>
    );
};

type TagProps = {
    text: string
}

export const Tag: FC<TagProps> = ({text}) => {
    return <span className="font-Open Sans font-semibold text-yellow-lemonade text-[1.5vw] md:text-[1vw] font-extrabold px-[.5vw] py-[.2vw] rounded-[.2vw] bg-intense-purple">
        {text}
    </span>
}
