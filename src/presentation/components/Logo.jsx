import { LogoIcon } from "../../util/MyIcons.jsx";
import { useScrollToTop } from "../hooks/Scroll.jsx";


export const Logo = () => {
    const scrollToTop = useScrollToTop()
    return (
        <a className='flex cursor-pointer z-[99] items-center w-[16vw]' onClick={scrollToTop}>
           <LogoIcon/>
        </a>
    )
}