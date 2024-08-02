import "../../input.css";
import { MyHeader } from "../containers/MyHeader.jsx";
import { MySection } from "../containers/MySection.jsx";
import { MyFooter } from "../containers/MyFooter.jsx";
import { Banner } from "../containers/Banner.jsx";
import { About } from "../containers/About.jsx";

export function HomePage() {
  return (
    <div className="flex flex-col bg-intense-grey h-screen" id="home">
      <MyHeader />
      <main className="flex flex-col">
        <MySection className="flex bg-banner bg-no-repeat bg-cover">
          <Banner />
        </MySection>
        <MySection className="">
          <About/>
        </MySection>
      </main>
      <MyFooter />
    </div>
  );
}
