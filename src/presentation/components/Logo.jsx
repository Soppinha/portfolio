import { LogoIcon } from "../../util/MyIcons.jsx";


export const Logo = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Suave rolagem
        });
    };

    return (
        <a className='flex cursor-pointer z-[99] items-center' onClick={scrollToTop}>
           <LogoIcon/>
        </a>
    )
}