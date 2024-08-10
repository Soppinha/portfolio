import {Subtitle} from "../components/Subtitle";
import {FilterOptions} from "@/ui/components/FilterOptions.tsx";
import {CardList} from "@/ui/components/CardList.tsx";

export const Projects = () => {
    return (
        <div className="flex flex-col gap-[4vw] w-full h-full transition-all duration-300">
            <div className="flex flex-col gap-[2vw]">
                <Subtitle text="Meus Projetos"/>
                <FilterOptions/>
            </div>
            <div className="bg-number h-full bg-repeat-y bg-cover">
                <CardList/>
            </div>
        </div>
    );
};
