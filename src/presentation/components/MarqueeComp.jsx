/* eslint-disable react/prop-types */
export const MarqueeComp = ({ children, text }) => {
  return (
    <div className="flex justify-center items-center h-[3.4vw] md:h-[3vw] font-Open Sans font-semibold text-white rounded-[1vw] gap-[.5vw] text-[2vw] md:text-[1.5vw] bg-purple-dark px-[1vw]">
      {children}
      {text}
    </div>
  );
};
