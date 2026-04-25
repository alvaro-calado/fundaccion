"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-forest-600 relative">
                            <span className="text-white font-display font-bold text-lg leading-none">F</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-forest-400 to-forest-800 opacity-80" />
                            <span className="relative z-10 text-white font-display font-bold text-lg">F</span>
                        </div>
                        <span
                            className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-dark" : "text-white"
                                }`}
                        >
                            Fundaccion
                        </span>
                    </button>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70 ${scrolled ? "text-dark" : "text-white/90"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => handleNavClick("#contato")}
                            className="group flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-white px-5 py-2.5 rounded-full font-sans font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-clay-200"
                        >
                            Apoie Agora
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-dark hover:bg-stone-100" : "text-white hover:bg-white/10"
                            }`}
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-40 bg-white transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                style={{ paddingTop: "80px" }}
            >
                <div className="flex flex-col p-8 gap-6">
                    {NAV_LINKS.map((link, i) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="text-left font-display text-3xl font-bold text-dark hover:text-forest-600 transition-colors"
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="pt-4 border-t border-stone-100">
                        <button
                            onClick={() => handleNavClick("#contato")}
                            className="w-full flex items-center justify-center gap-2 bg-clay-500 text-white px-6 py-4 rounded-2xl font-sans font-medium text-lg"
                        >
                            Apoie Agora <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}