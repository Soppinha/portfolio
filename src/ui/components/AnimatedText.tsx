import { Typewriter } from "../hooks/typed.jsx";
import {FC} from "react";

type TextBannerProps = {
    arr : string[],
    className : string
}

export const TextBanner : FC<TextBannerProps> = ({ arr, className }) => {
    return (
        <div className={className}>
            <Typewriter text={arr} delay={150} />
        </div>
    );
};
