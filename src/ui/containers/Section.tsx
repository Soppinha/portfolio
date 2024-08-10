import React, {FC} from "react";

type SectionProps = {
    children?: React.ReactNode,
    className?: string,
    id?: string
}

export const Section : FC<SectionProps> = ({children, className, id}) => {
    return <section id={id} className={className}>{children}</section>;
};