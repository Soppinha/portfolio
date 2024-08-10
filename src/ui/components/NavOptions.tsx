import {LabelOption} from "./Labels.tsx";
import {FC} from "react";

type NavOptionsProps = {
    idProj: string,
    idCert: string,
    idAbout: string
}

export const NavOptions: FC<NavOptionsProps> = ({idProj, idCert, idAbout}) => {
    return (
        <ul className="flex flex-row gap-4 text-white justify-evenly">
            <li>
                <LabelOption id={idProj} label="Projetos" className="text-white"/>
            </li>
            <li>
                <LabelOption id={idCert} label="Certificados" className="text-white"/>
            </li>
            <li>
                <LabelOption id={idAbout} label="Sobre mim" className="text-yellow-lemonade"/>
            </li>
        </ul>
    );
};