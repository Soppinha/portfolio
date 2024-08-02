import { Area, Gh, Linkedin } from "../../util/MyIcons";
import { DownloadButton } from "../components/DownloadButton";

export const About = () => {
  return (
    <article className="flex items-center font-Raleway font-light px-[6vw] gap-[4vw] transition-all duration-300 py-[4vw]">
      <Area />
      <div className="flex flex-col w-full gap-[2vw]">
        <div>
          <span className="text-intense-purple text-[4vw] leading-[4.5vw]">
            Olá, eu sou a
          </span>
          <div className="flex justify-between">
            <span className="font-bold leading-[5vw] text-white text-[6vw]">
              Sofia Bastos
            </span>
            <div className="flex items-center gap-[1vw]">
              <Linkedin /> <Gh />
            </div>
          </div>
        </div>
        <p className="font-Nunito font-extralight text-white text-[2vw]">
          Sou formada em Análise e Desenvolvimento de Sistemas e iniciei minha
          carreira na área de tecnologia faz mais de um ano. Fiz estágio na área
          de Segurança da Informação e, atualmente, estou focada em aprimorar
          minhas habilidades técnicas, com ênfase no desenvolvimento back-end.
        </p>
        <DownloadButton />
      </div>
    </article>
  );
};
