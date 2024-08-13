import {useCallback} from "react";

export const useScrollToTop = () => {
    return () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
};

export const useScrollToSection = (sectionId: string) => {
    return useCallback(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [sectionId]);
};