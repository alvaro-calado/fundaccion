import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Fundaccion — Transformando Vidas na América Latina",
    description:
        "Financiamos projetos de impacto real em comunidades vulneráveis, promovendo o Buen Vivir e a justiça climática em toda a América Latina desde 2008.",
    keywords: [
        "ONG",
        "América Latina",
        "Buen Vivir",
        "justiça climática",
        "comunidades indígenas",
        "impacto social",
    ],
    openGraph: {
        title: "Fundaccion — Transformando Vidas na América Latina",
        description:
            "Financiamos projetos de impacto real em comunidades vulneráveis, promovendo o Buen Vivir e a justiça climática.",
        locale: "pt_BR",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,300;1,8..60,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased grain-overlay">{children}</body>
        </html>
    );
}