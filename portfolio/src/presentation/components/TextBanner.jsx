import {Typewriter} from "../hooks/typed.jsx";

// eslint-disable-next-line react/prop-types
export const TextBanner = ({array}) => {
    return (
        <div className='font-Raleway flex flex-col items-center'>
            <p className='text-yellow-lemonade font-extrabold text-6xl'>
                &lt;/
                <span className='text-white'>
                    <Typewriter text={array} delay={100}/>
                </span>
                &gt;</p>
        </div>
    )
}