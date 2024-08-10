import { LogoIcon } from "../../util/MyIcons";
import { useScrollToTop } from "../hooks/scroll";


export const Logo = () => {
    const scrollToTop = useScrollToTop()
    return (
        <a className='flex cursor-pointer z-[99] items-center w-[14vw]' onClick={scrollToTop}>
            <LogoIcon/>
        </a>
    )
}