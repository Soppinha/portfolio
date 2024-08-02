import { useScrollToSection } from "../hooks/Scroll";

// eslint-disable-next-line react/prop-types
export const LabelOptions = ({ label, className, id }) => {
  const scrollToSection = useScrollToSection(id);
  return (
    <div className="flex flex-col relative justify-center group font-OpenSans font-semibold text-[2.8vw] md:text-[14px]">
      <button onClick={scrollToSection} className={className}>
        {label}
      </button>
      <div className="w-0 h-1 rounded absolute top-full left-1/2 translate-x-[-50%] group-hover:w-full duration-500 bg-intense-purple" />
    </div>
  );
};
