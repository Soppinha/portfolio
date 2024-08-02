import "../../input.css";
import { Header } from "../containers/Header.jsx";
import { Section } from "../containers/Section.jsx";
import { Footer } from "../containers/Footer.jsx";
import { Banner } from "../containers/Banner.jsx";
import { About } from "../containers/About.jsx";
import { Projects } from "../containers/Projects.jsx";

export function HomePage() {
  return (
    <div className="flex flex-col bg-intense-grey h-screen ">
      <Header />
      <main className="flex flex-col">
        <Section className="flex bg-banner bg-no-repeat bg-cover">
          <Banner />
        </Section>
        <Section id="about" className="scroll-mt-[65px]">
          <About/>
        </Section>
        <Section id="proj" className=" scroll-mt-[65px]">
          <Projects />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
