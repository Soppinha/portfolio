import { CardData, cardDataList } from "@/util/MyProjects.ts";
import { Card } from "@/ui/components/Card.tsx";
import { FC, useState} from "react";
import {useScrollToSection} from "@/ui/hooks/scroll.ts";


type CardListProps = {
    areaFilter: string;
};

export const CardList: FC<CardListProps> = ({ areaFilter }) => {
    const filteredCards = cardDataList.filter((data: CardData) =>
        areaFilter === '' || data.area === areaFilter
    );

    const [showAll, setShowAll] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);
    const scrollToSection = useScrollToSection("proj");

    const handleShowMore = () => {
        console.log("Handle Show More Clicked");
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => {
                if (prev >= filteredCards.length) return prev;
                return Math.min(prev + 6, filteredCards.length);
            });
            setShowAll(prev => prev || visibleCount + 6 >= filteredCards.length);
            setLoading(false);
        }, 800);
    };

    const handleShowLess = () => {
        console.log("Handle Show Less Clicked");
        setVisibleCount(6);
        setShowAll(false);
        setTimeout(() => {
            scrollToSection();
        }, 100);
    };

    return (
        <div className="relative bg-gradient-to-t from-intense-grey">
            {filteredCards.length === 0 ? (
                <div className="flex justify-center items-center min-h-[25vh] md:min-h-[20vh] lg:min-h-[65vh] text-center font-bold">
                    <p className="text-white text-[2vw] font-Raleway">Ops! No momento não tenho projetos dessa categoria. :(</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-[2vw] px-[6vw]">
                        {filteredCards.slice(0, visibleCount).map((data, index) => (
                            <Card key={index} data={data} />
                        ))}
                    </div>
                    {loading && (
                        <div className="flex w-full justify-center items-center bg-intense-grey mt-4">
                            <div className="flex flex-row justify-center items-center gap-[.5vw]">
                                <div className="w-[1.2vw] h-[1.2vw] rounded-full bg-purple-dark animate-bounce"></div>
                                <div
                                    className="w-[1.2vw] h-[1.2vw] rounded-full bg-intense-purple animate-bounce [animation-delay:-.3s]"></div>
                                <div
                                    className="w-[1.2vw] h-[1.2vw] rounded-full bg-yellow-lemonade animate-bounce [animation-delay:-.5s]"></div>
                            </div>
                        </div>
                    )}
                    {filteredCards.length > 6 && !loading && (
                        <div className="flex justify-center mt-4 font-Raleway font-bold">
                            {showAll ? (
                                <button onClick={handleShowLess} className="btn text-[1.5vw] text-white">
                                    Ver Menos
                                </button>
                            ) : (
                                <button onClick={handleShowMore} className="btn text-[1.5vw] text-white">
                                    Ver Mais
                                </button>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
