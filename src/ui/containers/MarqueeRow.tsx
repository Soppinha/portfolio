import { MarqueeComp } from "@/ui/components/MarqueeComp.tsx";
import {
    Aws,
    Css,
    Docker, Git,
    GitHub,
    Html,
    Java,
    Js,
    Kotlin,
    Nginx,
    Python,
    Spring,
    Sql,
    Tailwind
} from "@/util/MyIcons.tsx";
import Marquee from "@/ui/components/magicui/marquee.tsx";

export const MarqueeList = () => {
    return <article className="w-screen transition-all duration-300">
        <Marquee pauseOnHover className="[--duration:20s] bg-intense-purple drop-shadow-[0_-15px_10px_rgba(0,0,0,0.3)]">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-intense-grey"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-intense-grey"></div>
    </article>
}