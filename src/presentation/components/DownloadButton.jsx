import { DownloadIcon } from "../../util/MyIcons.jsx";

export const DownloadButton = () => (
    <button className='
    flex
    items-center
    justify-center
    relative
    gap-[.512vw]
    w-[11.5vw]
    px-[1vw]
    py-[.5vw]
    text-intense-grey
    text-[1.5vw]
    font-Open Sans
    font-bold
    rounded-[.6vw]
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
    hover:translate-y-[-5%] transition-all active:translate-y-[-7%]'>
        <DownloadIcon/>
        Baixar CV
    </button>
)