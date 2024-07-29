import {TextBanner} from "../components/TextBanner.jsx";

export const Banner = () => {
    return (
        <div
            className='
            flex
            gap-1
            flex-col
            justify-center
            items-center
            h-screen'>
            <TextBanner array={['Sofia Bastos', 'Kotlin', 'Java', 'Python', 'JavaScript']}/>
         
            
        </div>
    )
}