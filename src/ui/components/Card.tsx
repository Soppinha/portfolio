import {FC} from "react"
import {Tag} from "@/ui/components/Labels.tsx"
import {CardData} from "@/util/MyProjects.ts";

interface CardProps {
    data: CardData,
}

export const Card: FC<CardProps> = ({data}) => {
    return (
        <a href={data.link}
           className="flex flex-col justify-between w-[40vw] md:w-[29vw] h-full gap-[1.5vw] text-white bg-purple-black p-[2.2vw] md:p-[1.5vw] rounded-[1.8vw] md:rounded-[1.2vw] drop-shadow-[10px_5px_10px_rgba(0,0,0,0.5)]">
            <img className="rounded-[1vw] md:rounded-[.5vw] drop-shadow-[0px_0px_2px_rgba(0,0,0,1)]" src={data.img}
                 alt={data.alt}/>
            <div className="flex flex-wrap gap-x-[.5vw] gap-y-[.5vw]">
                {data.tec.map((item, i) => (
                    <Tag text={item} key={i}/>
                ))}
            </div>
            <div className="flex flex-col h-full">
                <p className="line-clamp-1 font-Rockwell font-bold text-yellow-lemonade text-[2.2vw] md:text-[1.6vw]">{data.title}</p>
                <p className="line-clamp-4 font-Nunito font-light text-white text-[1.8vw] md:text-[1.2vw]">{data.description}</p>
            </div>
            <span className="font-Raleway font-bold text-[2.4vw] md:text-[1.8vw]">
                {data.area}
            </span>
        </a>
    )
}