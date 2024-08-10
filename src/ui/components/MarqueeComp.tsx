import React from "react";

type MarqueeCompProps = {
    children?: React.ReactNode;
    text?: string
}

export const MarqueeComp : React.FC<MarqueeCompProps> = ({ children, text }) => {
    return (
        <div className="flex justify-center items-center h-[2em] md:h-[3vw] font-Open Sans font-semibold text-white  rounded-[1.5vw] md:rounded-[.8vw] gap-[.5vw] text-[3vw] md:text-[1.6vw] bg-purple-dark px-[.5em]">
            {children}
            {text}
        </div>
    );
};