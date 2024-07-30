// eslint-disable-next-line react/prop-types
export const LabelOptions = ({label, link, className}) => {
    return (
        <div className='flex flex-col relative justify-center group font-OpenSans font-semibold text-sm'>
            <a href={link} className={className}>
                {label}
            </a>
            <div className="w-0 h-1 rounded absolute top-full left-1/2 translate-x-[-50%] group-hover:w-full duration-500 bg-intense-purple"/>
        </div>
    )
}