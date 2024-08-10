import "../../input.css";
import {Header} from "../containers/Header.tsx";
import {Section} from "../containers/Section.tsx";
import {Footer} from "../containers/Footer.tsx";
import {Banner} from "../containers/Banner.tsx";
import {About} from "../containers/About.tsx";
import {Projects} from "../containers/Project.tsx";


export function HomePage() {
    return (
        <div className="flex flex-col bg-intense-grey">
            <Header/>
            <main className="flex flex-col">
                <Section className="flex bg-banner bg-no-repeat bg-cover">
                    <Banner/>
                </Section>
                <Section id="about" className="scroll-mt-[65px]">
                    <About/>
                </Section>
                <Section id="proj" className=" scroll-mt-[70px]">
                    <Projects/>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
