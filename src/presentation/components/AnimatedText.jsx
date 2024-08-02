import { Typewriter } from "../hooks/typed.jsx";

// eslint-disable-next-line react/prop-types
export const TextBanner = ({ array }) => {
  return (
    <div className="text-yellow-lemonade font-Raleway font-thin w-[380px]">
      <Typewriter text={array} delay={150} />
    </div>
  );
};
