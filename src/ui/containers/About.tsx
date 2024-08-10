
import { Area, Gh, Linkedin } from "../../util/MyIcons";
import { DownloadButton } from "../components/Buttons.tsx";

export const About = () => {
    return (
        <article
            className="flex justify-start items-center font-Raleway font-light px-[6vw] gap-[4vw] w-full h-[60vw] md:h-[40vw] transition-all duration-300 py-[4vw]">
            <Area />
            <div className="flex flex-col items-start w-full gap-[2vw]">
                <div className="flex w-full flex-col gap-[1vw] md:gap-[0vw]">
                    <span className="text-intense-purple text-[4vw] md:text-[3.2vw] leading-[4.5vw]">
                        Olá, eu sou a
                    </span>
                    <div className="flex justify-between">
                        <span className="font-bold leading-[5vw] text-white text-[7vw] md:text-[6vw]">
                            Sofia Bastos
                        </span>
                        <div className="flex items-end gap-[1vw]">
                            <Linkedin /> <Gh />
                        </div>
                    </div>
                </div>
                <p className="font-Nunito font-extralight text-white text-[2.8vw] md:text-[2vw]">
                    Sou formada em Análise e Desenvolvimento de Sistemas e iniciei minha
                    carreira na área de tecnologia faz mais de um ano. Fiz estágio na área
                    de Segurança da Informação e, atualmente, estou focada em aprimorar
                    minhas habilidades técnicas, com ênfase no desenvolvimento back-end.
                </p>
                <DownloadButton text={"Baixar CV"} />
            </div>
        </article>
    );
};
