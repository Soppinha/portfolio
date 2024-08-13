import {FilterButton} from "@/ui/components/Buttons.tsx";
import {FC, useState} from "react";

type FilterOptionsProps = {
    onFilterChange: (area: string) => void;
};

export const FilterOptions : FC<FilterOptionsProps> = ( { onFilterChange } ) => {
    const [bgFocus, setBgFocus] = useState<number>(0);
    const title = ["Ver todos", "Back-end", "Front-end", "Mobile"]

    const handleButtonClick = (index: number) => {
        setBgFocus(index);
        onFilterChange(index === 0 ? '' : title[index]);
    };

    return <div className=" sticky flex w-full justify-center gap-[1.5vw] md:gap-[1vw]">
        {title.map((item, index) => (
            <FilterButton text={item} key={index} isActive={bgFocus === index} onClick={() => handleButtonClick(index)} />
        ))}
    </div>
}