import {LabelOptions } from "./LabelOptions.jsx";

// eslint-disable-next-line react/prop-types
export const NavOptions = ({idProj, idCert, idAbout}) => {
  return (
    <ul className="flex flex-row gap-4 text-white justify-evenly">
      <li>
        <LabelOptions id={idProj} label="Projetos" className=" text-white" />
      </li>
      <li>
        <LabelOptions id={idCert} label="Certificados" className=" text-white" />
      </li>
      <li>
        <LabelOptions id={idAbout} label="Sobre mim" className="text-yellow-lemonade" />
      </li>
    </ul>
  );
};
