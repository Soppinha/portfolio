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
    <div className="w-screen flex flex-col gap-[2vw]">
      <Marquee
        pauseOnHover={true}
        className="gap-[2vw] motion-reduce:overflow-auto [--duration:15s]"
        innerClassName="gap-[2vw] [--gap:2vw] motion-reduce:animate-none motion-reduce:first:hidden"
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
      </Marquee>
      <Marquee
        reverse={true}
        pauseOnHover={true}
        className="gap-[2vw] motion-reduce:overflow-auto [--duration:15s]"
        innerClassName="gap-[2vw] [--gap:2vw] motion-reduce:animate-none motion-reduce:first:hidden"
      >
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
    </div>
  );
};
