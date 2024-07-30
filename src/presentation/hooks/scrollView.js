import {useEffect, useState} from "react";

export const useScrollShadow = () => {
    const [hasShadow, setHasShadow] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setHasShadow(currentScrollY > 50);
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return hasShadow;
};
