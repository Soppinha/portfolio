import {FilterButton} from "@/ui/components/Buttons.tsx";
import {useState} from "react";

export const FilterOptions = () => {
    const [bgFocus, setBgFocus] = useState<number>(0);
    const title = ["Ver todos", "Back-end", "Front-end", "Mobile"]

    const handleButtonClick = (index: number) => {
        setBgFocus(index);
    };

    return <div className="flex w-full justify-center gap-[1vw]">
        {title.map((item, index) => (
            <FilterButton text={item} key={index} isActive={bgFocus === index} onClick={() => handleButtonClick(index)} />
        ))}
    </div>
}