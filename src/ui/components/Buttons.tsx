import {DownloadIcon} from "../../util/MyIcons.jsx";
import {FC} from "react";

type DownloadButtonProps = {
    text: string;
}

export const DownloadButton: FC<DownloadButtonProps> = ({text}) => (
    <button className='
    flex
    items-center
    justify-center
    relative
    gap-[.512vw]
    px-[1.5vw]
    md:px-[1vw]
    py-[1.5vw]
    md:py-[.8vw]
    text-intense-grey
    text-[2.5vw]
    md:text-[1.5vw]
    font-Open Sans
    font-extrabold
    rounded-[.8vw]
    md:rounded-[.6vw]
    bg-yellow-lemonade
    isolation-auto
    z-2
    before:absolute
    before:transition-all
    before:duration-700
    before:hover:w-full
    before:-left-full
    before:hover:left-0
    before:rounded-full
    before:bg-gradient-to-r from-intense-purple to-yellow-lemonade
    before:-z-10
    before:aspect-square
    before:hover:scale-150
    overflow-hidden
    before:hover:duration-700
    hover:drop-shadow-[0_3px_2px_rgba(0,0,0,1)]
    hover:translate-y-[-5%] 
    transition-all 
    active:drop-shadow-[0_0px_0px_rgba(0,0,0,1)]
    active:translate-y-[3%]'>
        <DownloadIcon/>
        <span className="leading-[2vw]">{text}</span>
    </button>
)

type FilterButtonProps = {
    isActive: boolean,
    text: string,
    onClick?: () => void
}

export const FilterButton: FC<FilterButtonProps> = ({isActive,text, onClick}) => {
    return <button onClick={onClick} className={`font-Open Sans text-white font-bold text-[1.3vw] ${isActive ? "bg-intense-purple" : "bg-purple-dark"} px-[1vw] py-[.3vw] rounded-[.4vw]`}>
        {text}
    </button>
}