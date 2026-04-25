import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const NAV_LINKS = [
    { label: "Sobre", href: "#sobre" },
    { label: "Proposta", href: "#proposta" },
    { label: "Impacto", href: "#impacto" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
];

export const MISSION_PILLARS = [
    {
        color: "forest",
        icon: "Leaf",
        title: "Justiça Climática",
        description:
            "Apoiamos comunidades indígenas e rurais na linha de frente da crise climática, financiando soluções baseadas na natureza e no conhecimento ancestral.",
        stat: "23 projetos ativos",
    },
    {
        color: "ocean",
        icon: "Building2",
        title: "Buen Vivir",
        description:
            "Promovemos o modelo de Buen Vivir como alternativa ao desenvolvimento predatório, fortalecendo a autonomia e soberania das comunidades locais.",
        stat: "12.000 beneficiados",
    },
    {
        color: "clay",
        icon: "BookOpen",
        title: "Educação & Cultura",
        description:
            "Investimos em educação intercultural bilíngue e preservação cultural, garantindo que as próximas gerações mantenham sua identidade e saberes.",
        stat: "3.400 estudantes",
    },
    {
        color: "earth",
        icon: "Heart",
        title: "Saúde Comunitária",
        description:
            "Financiamos postos de saúde comunitários e programas de medicina tradicional, integrando saberes ancestrais com práticas modernas de saúde.",
        stat: "18 clínicas apoiadas",
    },
];

export const METRICS = [
    {
        value: "47",
        label: "Comunidades Atendidas",
        sub: "Em 9 países da América Latina",
        color: "ocean",
    },
    {
        value: "R$8.2M",
        label: "Investidos em Projetos",
        sub: "Desde a fundação em 2008",
        color: "forest",
    },
    {
        value: "12.000+",
        label: "Pessoas Beneficiadas",
        sub: "Impacto direto e mensurável",
        color: "clay",
    },
    {
        value: "98%",
        label: "Taxa de Aprovação",
        sub: "Avaliação dos parceiros",
        color: "earth",
    },
    {
        value: "23",
        label: "Projetos Ativos",
        sub: "Em execução atualmente",
        color: "forest",
    },
    {
        value: "15",
        label: "Anos de Atuação",
        sub: "Construindo legado",
        color: "ocean",
    },
];

export const PROJECTS = [
    {
        tag: "Clima",
        tagColor: "forest",
        location: "Brasil & Peru",
        title: "Reflorestamento Amazônico",
        stat: "4.200 ha reflorestados",
        image:
            "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop",
        description:
            "Restauração de áreas degradadas com espécies nativas, envolvendo comunidades ribeirinhas como guardiãs da floresta.",
    },
    {
        tag: "Saúde",
        tagColor: "clay",
        location: "Bolívia & Equador",
        title: "Água Limpa para Todos",
        stat: "400 famílias atendidas",
        image:
            "https://images.unsplash.com/photo-1594007654729-407eeec4be35?w=800&auto=format&fit=crop",
        description:
            "Implementação de sistemas de saneamento e purificação de água em comunidades rurais sem acesso à infraestrutura básica.",
    },
    {
        tag: "Educação",
        tagColor: "earth",
        location: "México & Guatemala",
        title: "Escolas Interculturais",
        stat: "3.400 estudantes",
        image:
            "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&auto=format&fit=crop",
        description:
            "Criação de escolas bilíngues que integram o currículo nacional com saberes e línguas das comunidades indígenas locais.",
    },
];

export const TESTIMONIALS = [
    {
        quote:
            "A Fundaccion transformou nossa comunidade. Com o apoio deles, construímos um sistema de água potável que beneficia mais de 400 famílias. Pela primeira vez em décadas, nossas crianças têm acesso à água limpa.",
        name: "María Quispe",
        role: "Líder Comunitária, Bolívia",
        community: "Comunidade Quechua de Potosí",
        color: "forest",
    },
    {
        quote:
            "Graças ao projeto de reflorestamento, nossa aldeia recuperou terras que pensávamos perdidas para sempre. Hoje plantamos não só árvores, mas esperança para as próximas gerações.",
        name: "Carlos Yawari",
        role: "Cacique, Brasil",
        community: "Povo Munduruku, Pará",
        color: "earth",
    },
    {
        quote:
            "As Escolas Interculturais permitiram que nossos filhos aprendessem em nossa língua materna sem abrir mão do futuro. Isso é o que chamamos de Buen Vivir — viver bem sem perder quem somos.",
        name: "Rosa Caal Maquin",
        role: "Professora Comunitária, Guatemala",
        community: "Comunidade Q'eqchi'",
        color: "ocean",
    },
];

export const FOOTER_LINKS = {
    institucional: [
        "Sobre nós",
        "Equipe",
        "Governança",
        "Relatórios",
        "Imprensa",
    ],
    projetos: [
        "Clima & Natureza",
        "Educação",
        "Saúde",
        "Empoderamento",
        "Água & Saneamento",
    ],
    apoie: [
        "Como Financiar",
        "Parcerias",
        "Voluntariado",
        "Política de Privacidade",
        "Termos de Uso",
    ],
};

export const PARTNERS = [
    "PNUD",
    "BID",
    "WWF",
    "Ashoka",
    "Ford Foundation",
    "GIZ",
    "IUCN",
    "Oxfam",
];