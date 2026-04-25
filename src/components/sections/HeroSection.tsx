"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export function HeroSection() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1552799446-159ba9523315?w=1920&auto=format&fit=crop&q=80"
                    alt="Amazon rainforest"
                    className="w-full h-full object-cover object-center"
                />
                <div className="hero-overlay absolute inset-0" />
                {/* Top color accent bars */}
                <div className="absolute top-0 left-0 right-0 h-1 flex z-10">
                    <div className="flex-1 bg-forest-500" />
                    <div className="flex-1 bg-earth-500" />
                    <div className="flex-1 bg-clay-500" />
                    <div className="flex-1 bg-ocean-500" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
                {/* Label */}
                <div
                    className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
                    <span className="font-sans text-xs text-white/80 tracking-widest uppercase">
                        Desde 2008 · 9 países · América Latina
                    </span>
                </div>

                {/* Heading */}
                <h1
                    className={`font-display font-black text-white leading-[0.92] mb-6 transition-all duration-800 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                >
                    Transformando
                    <br />
                    <span className="text-earth-400 italic"> Vidas</span>{" "}
                    <span className="text-white">na</span>
                    <br />
                    América Latina
                </h1>

                {/* Subtitle */}
                <p
                    className={`font-body text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
                >
                    Financiamos projetos de impacto real em comunidades vulneráveis, promovendo o{" "}
                    <em>Buen Vivir</em> e a justiça climática em toda a América Latina.
                </p>

                {/* CTAs */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <a
                        href="#impacto"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#impacto")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-7 py-4 rounded-full font-sans font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-forest-900/40"
                    >
                        Conheça nosso impacto
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                        href="#contato"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-white px-7 py-4 rounded-full font-sans font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-clay-900/40"
                    >
                        Seja um financiador
                    </a>
                </div>

                {/* Scroll indicator */}
                <div
                    className={`mt-16 flex flex-col items-center gap-2 text-white/40 transition-all duration-700 delay-700 ${loaded ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
            </div>

            {/* Floating stat badges */}
            <div
                className={`absolute bottom-16 left-8 hidden xl:block transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
            >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
                    <p className="font-display text-3xl font-bold">47</p>
                    <p className="font-sans text-xs text-white/60 mt-1">Comunidades atendidas</p>
                </div>
            </div>

            <div
                className={`absolute bottom-16 right-8 hidden xl:block transition-all duration-700 delay-800 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
            >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
                    <p className="font-display text-3xl font-bold text-earth-300">R$8.2M</p>
                    <p className="font-sans text-xs text-white/60 mt-1">Investidos em projetos</p>
                </div>
            </div>
        </section>
    );
}