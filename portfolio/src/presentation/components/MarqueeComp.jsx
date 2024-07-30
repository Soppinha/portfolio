/* eslint-disable react/prop-types */
export const MarqueeComp = ({ children, text }) => {
  return (
    <div className="flex justify-center items-center h-[4vw] font-Open Sans font-semibold text-white rounded-[1.2vw] gap-[1vw] text-[2vw] bg-purple-dark px-[1.5vw]">
      {children}
      <span>{text}</span>
    </div>
  );
};
