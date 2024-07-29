import { LabelLink } from "./LabelLink.jsx";
import {LabelOptions } from "./LabelOptions.jsx";

export const NavOptions = () => {
  return (
    <ul className="flex flex-row gap-4 text-white text-base justify-evenly">
      <li>
        <LabelOptions label="Projetos" link="#" className=" text-white" />
      </li>
      <li>
        <LabelOptions label="Certificados" link="#" className=" text-white" />
      </li>
      <li>
        <LabelOptions label="Sobre mim" link="#" className="text-yellow-lemonade" />
      </li>
    </ul>
  );
};


export const NavOpitionsMenu = () => {
  return(
    <ul
      className={`flex flex-col w-full pt-20 gap-2 text-white text-base justify-end`}
    >
      <li
        className={`px-9 py-2 hover:bg-neutral-900 duration-100`}
      >
        <LabelLink label="Projetos" link="#" className="text-white" />
      </li>
      <li
        className={`px-9 py-2 hover:bg-neutral-900 duration-100`}
      >
        <LabelLink label="Certificados" link="#" className="text-white" />
      </li>
      <li
        className={`px-9 py-2 hover:bg-neutral-900 duration-100`}
      >
        <LabelLink label="Sobre mim" link="#" className="text-yellow-lemonade" />
      </li>
    </ul>
  )
}