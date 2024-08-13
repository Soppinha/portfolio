import {Logo} from "../components/Logo";
import {NavOptions} from "../components/NavOptions";
import {useScrollShadow} from "../hooks/scrollView";

export const MyNavbar = () => {
    const hasShadow = useScrollShadow();
    return (
        <nav
            className={`flex items-center z-[99] fixed top-0 left-0 right-0 px-[6vw] transition-all duration-200 justify-between content-center ${
                hasShadow
                    ? "drop-shadow-[0_3px_2px_rgba(0,0,0,1)] transition-all duration-800 bg-intense-grey"
                    : ""
            }`}
        >
            <Logo/>
            <div className="flex py-6">
                <NavOptions idProj="proj" idCert="cert" idAbout="about"/>
            </div>
        </nav>
    );
};
