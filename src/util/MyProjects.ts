export type CardData = {
    img: string,
    alt: string,
    tec: string[],
    title: string,
    description: string,
    area: string,
    link: string
}

export const cardDataList: CardData[] = [
    {
        img: "src/ui/assets/portifolio.png",
        alt: "Portifólio",
        tec: ["React", "TypeScript", "Tailwind", "Swapper", "MagicUI"],
        title: "Meu portifólio - Sofia",
        description: "Bem-vindo ao meu portfólio! Meu nome é Sofia e sou uma desenvolvedora iniciante com experiência em Java, Kotlin e Python. " +
            "Este portfólio exibe meus projetos mais recentes e minhas habilidades com várias linguagens, bibliotecas e frameworks.",
        area: "Frontend",
        link: "https://github.com/Soppinha/portfolio"
    },
]