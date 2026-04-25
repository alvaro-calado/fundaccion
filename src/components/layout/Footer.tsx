import { FOOTER_LINKS, PARTNERS } from "@/lib/utils";

export function Footer() {
    const socialIcons = [
        {
            name: "Twitter",
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1C18 4.5 17 4 16 4c-2 0-3.5 1.6-3.5 3.5 0 .3 0 .5.1.8C9 8.1 6.1 6.5 4.1 4.1c-.3.5-.5 1.1-.5 1.8 0 1.2.6 2.3 1.6 2.9-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.1 2.8 3.4-.3.1-.7.1-1 .1-.2 0-.4 0-.7-.1.4 1.4 1.8 2.5 3.3 2.5-1.2 1-2.8 1.6-4.5 1.6H2c1.6 1 3.5 1.6 5.5 1.6 6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.2 1.8-2z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5S1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.2 8h4.6v14H.2V8zm7.5 0h4.4v2h.1c.6-1.1 2-2.2 4.2-2.2 4.5 0 5.3 3 5.3 6.9V22h-4.6v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V22H7.7V8z" />
                </svg>
            )
        },
        {
            name: "Instagram",
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm6.4-.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
                </svg>
            )
        },
        {
            name: "YouTube",
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23 7s-.2-1.5-.8-2.2c-.7-.9-1.5-.9-1.9-1C17.7 3.5 12 3.5 12 3.5h0s-5.7 0-8.3.3c-.4.1-1.2.1-1.9 1C1.2 5.5 1 7 1 7S1 8.7 1 10.3v1.4C1 13.3 1 15 1 15s.2 1.5.8 2.2c.7.9 1.6.9 2 .9 1.5.1 6.2.3 8.2.3s5.7 0 8.3-.3c.4-.1 1.2-.1 1.9-1 .6-.7.8-2.2.8-2.2s0-1.7 0-3.3v-1.4C23 8.7 23 7 23 7zM10 14V8l5 3-5 3z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="footer-gradient text-white">
            {/* Partners marquee */}
            <div className="border-b border-white/10 py-4 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                    {[...PARTNERS, ...PARTNERS].map((p, i) => (
                        <span key={i} className="inline-flex items-center gap-8 mx-8">
                            <span className="font-sans text-sm font-medium text-white/50 uppercase tracking-widest">
                                {p}
                            </span>
                            <span className="text-white/20">·</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <span className="font-display font-bold text-lg text-white">F</span>
                            </div>
                            <span className="font-display font-bold text-xl">Fundaccion</span>
                        </div>

                        <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs mb-6">
                            Promovendo o Buen Vivir e a justiça climática em toda a América Latina desde 2008.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {socialIcons.map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    {item.svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(FOOTER_LINKS).map(([section, links]) => (
                        <div key={section}>
                            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </h4>

                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-sans text-xs text-white/40">
                        © 2026 Fundaccion — Por Emergência Climática. Todos os direitos reservados.
                    </p>

                    <div className="flex items-center gap-2 text-white/40">
                        {/* ShieldCheck substituído */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-forest-400">
                            <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4zm0 4.3L7 7v5c0 3.9 2.9 7.5 5 7.9 2.1-.4 5-4 5-7.9V7l-5-0.7z" />
                        </svg>

                        <span className="font-sans text-xs">
                            CNPJ verificado · Auditoria independente anual
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}