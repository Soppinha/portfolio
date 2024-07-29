import { DownloadIcon } from "../../util/MyIcons.jsx";

export const DownloadButton = () => (
    <button className='
    flex
    items-center
    relative
    gap-2
    px-6
    py-2
    text-intense-grey
    text-sm
    font-Open Sans
    font-bold
    rounded-md
    bg-yellow-lemonade
    isolation-auto
    z-10
    before:absolute
    before:w-full
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
    hover:shadow-intense
    hover:translate-y-[-5%] transition-all active:translate-y-[-7%]'>
        <DownloadIcon/>
        Baixar CV
    </button>
)