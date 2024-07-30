import "../../input.css";
import { MyHeader } from "../containers/MyHeader.jsx";
import { MySection } from "../containers/MySection.jsx";
import { MyFooter } from "../containers/MyFooter.jsx";
import { Banner } from "../containers/Banner.jsx";
import { MarqueeList } from "../containers/Marquee.jsx";

export function HomePage() {
  return (
    <div className="flex flex-col bg-intense-grey h-screen" id="home">
      <MyHeader />
      <main className="flex flex-col">
        <MySection className="flex justify-center bg-banner bg-no-repeat bg-cover">
          <Banner />
        </MySection>
        <MySection className="flex flex-row w-full py-[1.2vw] bg-intense-purple ">
          <MarqueeList/>
        </MySection>
      </main>
      <MyFooter />
    </div>
  );
}
