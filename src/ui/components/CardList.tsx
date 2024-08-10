import {cardDataList} from "@/util/MyProjects.ts";
import {Card} from "@/ui/components/Card.tsx";

export const CardList = () => {
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-[2vw] px-[6vw]">
            {cardDataList.map((data, index) => (
                <Card key={index} data={data} />
            ))}
        </div>
    )
}