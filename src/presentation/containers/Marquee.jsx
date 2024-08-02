import { Marquee } from "@devnomic/marquee";
import {
  Aws,
  Css,
  Docker,
  Git,
  GitHub,
  Html,
  Java,
  Js,
  Kotlin,
  Nginx,
  Python,
  Spring,
  Sql,
  Tailwind,
} from "../../util/MyIcons";
import { MarqueeComp } from "../components/MarqueeComp";
import "@devnomic/marquee/dist/index.css";

export const MarqueeList = () => {
  return (
    <article className="w-screen flex flex-col gap-[2vw] transition-all duration-300">
      <Marquee
        pauseOnHover={true}
        className="gap-[1vw] motion-reduce:overflow-auto [--duration:25s]"
        innerClassName="gap-[1vw] [--gap:1vw] motion-reduce:animate-none motion-reduce:first:hidden"
      >
        <MarqueeComp>
          <Html />
          HTML
        </MarqueeComp>
        <MarqueeComp>
          <Css />
          CSS
        </MarqueeComp>
        <MarqueeComp>
          <Js />
          Javascript
        </MarqueeComp>
        <MarqueeComp>
          <Sql />
          SQL
        </MarqueeComp>
        <MarqueeComp>
          <Aws />
          AWS
        </MarqueeComp>
        <MarqueeComp>
          <Java />
          Java
        </MarqueeComp>
        <MarqueeComp>
          <Tailwind />
          Tailwind
        </MarqueeComp>
        <MarqueeComp>
          <Docker />
          Docker
        </MarqueeComp>
        <MarqueeComp>
          <Kotlin />
          Kotlin
        </MarqueeComp>
        <MarqueeComp>
          <Spring />
          Spring Boot
        </MarqueeComp>
        <MarqueeComp>
          <GitHub />
          GitHub
        </MarqueeComp>
        <MarqueeComp>
          <Nginx />
          Nginix
        </MarqueeComp>
        <MarqueeComp>
          <Python />
          Python
        </MarqueeComp>
        <MarqueeComp>
          <Git />
          Git
        </MarqueeComp>
      </Marquee>
      
    </article>
  );
};
