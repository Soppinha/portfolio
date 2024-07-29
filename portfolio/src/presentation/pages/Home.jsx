import "../../input.css"
import {MyHeader} from "../containers/header/MyHeader.jsx";
import {MySection} from "../containers/section/MySection.jsx";
import {MyFooter} from "../containers/footer/MyFooter.jsx";
import { Banner } from "../containers/Banner.jsx";

export function HomePage() {
    return (
        <div className='flex flex-col bg-intense-grey h-screen' id='home'>
            <MyHeader/>
            <main>
                <MySection className="flex justify-center content-center gap-x-10">
                    <Banner/>
                </MySection>
                <MySection className='flex flex-row w-full px-3'>
                </MySection>
            </main>
            <MyFooter/>
        </div>
    )
}