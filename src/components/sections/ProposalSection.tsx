"use client";

import { CheckCircle } from "lucide-react";

const PILLARS = [
    {
        number: "01",
        color: "text-forest-600",
        title: "Financiamento baseado em confiança",
        desc: "Acreditamos que as comunidades sabem o que precisam. Nosso modelo repassa recursos sem burocracia excessiva, confiando na liderança local.",
    },
    {
        number: "02",
        color: "text-clay-500",
        title: "Cocriação com as comunidades",
        desc: "Cada projeto nasce de um diálogo genuíno. Não chegamos com soluções prontas — construímos junto com quem vive o problema.",
    },
    {
        number: "03",
        color: "text-earth-500",
        title: "Impacto verificável e transparente",
        desc: "Todas as nossas métricas são auditadas por organismos independentes. Você sabe exatamente como seu recurso está sendo usado.",
    },
    {
        number: "04",
        color: "text-ocean-600",
        title: "Sustentabilidade de longo prazo",
        desc: "Não criamos dependência. Nossos projetos fortalecem a autonomia local para que as comunidades prosperem por conta própria.",
    },
];

export function ProposalSection() {
    return (
        <section id="proposta" className="py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: image collage */}
                    <div className="reveal-left relative h-[560px] hidden lg:block">
                        <div className="absolute top-0 left-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&auto=format&fit=crop"
                                alt="Community"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-16 right-0 w-56 h-72 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop"
                                alt="Children"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 left-16 w-72 h-52 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop"
                                alt="Nature"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center gap-1 animate-float border border-stone-100">
                                <p className="font-display font-black text-3xl text-forest-600">98%</p>
                                <p className="font-sans text-xs text-stone-500 text-center">Taxa de aprovação<br />dos parceiros</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: text */}
                    <div>
                        <div className="reveal">
                            <p className="section-label mb-3">Nossa Proposta</p>
                            <h2
                                className="font-display font-bold text-dark leading-tight mb-6"
                                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                            >
                                Um modelo diferente de{" "}
                                <span className="text-clay-500 italic">financiamento social</span>
                            </h2>
                            <p className="font-body text-stone-500 leading-relaxed mb-10">
                                A Fundaccion nasceu da crença de que as comunidades da América Latina não precisam de ajuda para serem salvas — precisam de recursos para exercer sua própria soberania.
                            </p>
                        </div>

                        <div className="space-y-7">
                            {PILLARS.map((p, i) => (
                                <div key={p.number} className={`reveal reveal-delay-${i + 1} flex gap-5 items-start`}>
                                    <div className="flex-shrink-0 pt-0.5">
                                        <span className={`font-mono font-bold text-sm ${p.color}`}>{p.number}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-dark text-lg mb-1">{p.title}</h4>
                                        <p className="font-body text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="reveal mt-10">
                            <button
                                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                                className="group flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-7 py-3.5 rounded-full font-sans font-semibold text-sm transition-all"
                            >
                                Quero ser parceiro
                                <CheckCircle className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}