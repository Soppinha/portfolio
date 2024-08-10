export const useScrollToTop = () => {
    return () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
};

export const useScrollToSection = (id: string) => {
    return () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
        }else {
            console.error(`Elemento com id "${id}" não encontrado.`);
        }
    };
};