import {FC} from "react"
import {CardData} from "@/util/MyProjects.ts";
// @ts-expect-error
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import {Tag} from "@/ui/components/Labels.tsx";
import {clsx} from "clsx";
import {colors} from "@/util/MyColors.ts";

interface CardProps {
    data: CardData,
}

export const Card: FC<CardProps> = ({data}) => {
    return (
        <a href={data.link}
           className="flex flex-col justify-between w-[40vw] md:w-[29vw] h-full gap-y-[1.8vw] text-white bg-purple-black hover:bg-[#100A16] p-[2.2vw] md:p-[1.5vw] border-purple-dark border-[1.5px] rounded-[1.8vw] md:rounded-[1.2vw] transition-all hover:translate-y-[-3%]  hover:drop-shadow-[5px_5px_10px_rgba(0,0,0,1)]">
            <img
                className=" h-[15vw] md:h-[12vw] w-full rounded-[1vw] md:rounded-[.5vw] drop-shadow-[0px_0px_2px_rgba(0,0,0,1)]"
                src={data.img}
                alt={data.alt}/>
            <div className="">
                <Splide options={{
                    type: 'loop',
                    perPage: 3,
                    perMove: 3,
                    padding: '15px',
                    speed: 400,
                    gap: 6,
                    autoplay: true,
                    pagination: false,
                    arrows: false,
                }} className="splide">
                    {data.tec.map((item, i) => (
                        <SplideSlide key={i} className="flex">
                            <Tag text={item} className={clsx(colors[item] || 'bg-[#FFFFFF]')}/>
                        </SplideSlide>
                    ))}
                </Splide>

            </div>
            <div className="flex flex-col">
                <p className="line-clamp-1 font-Rockwell font-bold text-yellow-lemonade text-[2.2vw] md:text-[1.6vw]">{data.title}</p>
                <p className="line-clamp-4 font-Nunito font-light text-white text-[1.8vw] md:text-[1.2vw]">{data.description}</p>
            </div>
            <span className="font-Raleway font-bold text-[2.4vw] md:text-[1.8vw]">
                {data.area}
            </span>
        </a>
    )
}