// eslint-disable-next-line react/prop-types
export const IconSvg = ({width,height,viewBox,children}) => {
    return <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
}

