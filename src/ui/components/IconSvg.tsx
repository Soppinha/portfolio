import React, {FC} from "react";

type IconProps = {
    width: string,
    height: string,
    viewBox: string,
    children: React.ReactNode,
}

export const IconSvg: FC<IconProps> = ({width, height, viewBox, children}) => {
    return <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
}