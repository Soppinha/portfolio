import {Subtitle} from "../components/Subtitle";
import {FilterOptions} from "@/ui/components/FilterOptions.tsx";
import {CardList} from "@/ui/components/CardList.tsx";
import {useEffect, useRef, useState} from "react";

export const Projects = () => {
    const [selectedArea, setSelectedArea] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [shouldScroll, setShouldScroll] = useState<boolean>(false);
    const cardListRef = useRef<HTMLDivElement>(null);

    const handleFilterChange = (area: string) => {
        if (selectedArea !== area) {
            setSelectedArea(area);
            setShouldScroll(true);
            setIsLoading(true);
        }
    };

    useEffect(() => {
        if (shouldScroll && cardListRef.current) {
            cardListRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setShouldScroll(false);
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [selectedArea, shouldScroll]);

    return (
        <div className="flex flex-col gap-[6vw] md:gap-[4vw] w-full max-h-full transition-all duration-300 ">
            <div className="flex flex-col gap-[2vw]">
                <Subtitle text="Meus Projetos"/>
                <FilterOptions onFilterChange={handleFilterChange}/>
            </div>
            <div ref={cardListRef} className="bg-number h-full w-screen bg-repeat bg-cover scroll-mt-[30vw] md:scroll-mt-[15vw]">
                {isLoading ? (
                    <div className="flex min-h-[25vh] md:min-h-[20vh] lg:min-h-[65vh] w-full justify-center items-stretch bg-gradient-to-t from-intense-grey">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <div className="w-[2.2vw] h-[2.2vw] rounded-full bg-purple-dark animate-bounce"></div>
                            <div
                                className="w-[2.2vw] h-[2.2vw] rounded-full bg-intense-purple animate-bounce [animation-delay:-.3s]"></div>
                            <div
                                className="w-[2.2vw] h-[2.2vw] rounded-full bg-yellow-lemonade animate-bounce [animation-delay:-.5s]"></div>
                        </div>
                    </div>
                ) : (
                    <CardList areaFilter={selectedArea}/>
                )}
            </div>
        </div>
    );
};
