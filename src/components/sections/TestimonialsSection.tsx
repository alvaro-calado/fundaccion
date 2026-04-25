"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/utils";

const colorMap: Record<string, { border: string; dot: string }> = {
    forest: { border: "border-forest-500", dot: "bg-forest-500" },
    earth: { border: "border-earth-500", dot: "bg-earth-500" },
    ocean: { border: "border-ocean-500", dot: "bg-ocean-500" },
};

const dotActiveMap: Record<string, string> = {
    forest: "bg-forest-500",
    earth: "bg-earth-500",
    ocean: "bg-ocean-500",
};

export function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const t = TESTIMONIALS[active];
    const colors = colorMap[t.color];

    const prev = () => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const next = () => setActive((active + 1) % TESTIMONIALS.length);

    return (
        <section id="depoimentos" className="py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="reveal mb-16">
                    <p className="section-label mb-3">Depoimentos</p>
                    <h2
                        className="font-display font-bold text-dark leading-tight"
                        style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
                    >
                        Vozes do{" "}
                        <span className="text-forest-600 italic">Campo</span>
                    </h2>
                </div>

                {/* Main testimonial */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Quote */}
                    <div className="reveal-left">
                        <div className="quote-mark mb-2">"</div>
                        <blockquote className="font-display text-dark text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                            {t.quote}
                        </blockquote>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-earth-400 text-earth-400" />
                            ))}
                        </div>

                        {/* Author */}
                        <div className={`border-l-4 pl-4 ${colors.border}`}>
                            <p className="font-display font-bold text-dark text-lg">{t.name}</p>
                            <p className="font-sans text-stone-500 text-sm">{t.role}</p>
                            <p className={`font-sans font-semibold text-sm mt-0.5 ${dotActiveMap[t.color].replace("bg-", "text-")}`}>
                                {t.community}
                            </p>
                        </div>

                        {/* Verified badge */}
                        <div className="mt-5 inline-flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-700 rounded-full px-4 py-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="font-sans text-xs font-medium">Parceiro verificado</span>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center gap-4 mt-10">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full border border-stone-200 hover:border-forest-400 flex items-center justify-center text-stone-400 hover:text-forest-600 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {TESTIMONIALS.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active
                                                ? dotActiveMap[item.color] + " scale-125"
                                                : "bg-stone-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full border border-stone-200 hover:border-forest-400 flex items-center justify-center text-stone-400 hover:text-forest-600 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="reveal-right">
                        <div className={`rounded-3xl overflow-hidden border-4 ${colors.border} shadow-2xl aspect-[4/5] relative`}>
                            <img
                                src={
                                    active === 0
                                        ? "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=80"
                                        : active === 1
                                            ? "https://images.unsplash.com/photo-1504199367641-aba8151af406?w=800&auto=format&fit=crop&q=80"
                                            : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80"
                                }
                                alt={t.name}
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                                    <p className="font-display font-bold text-dark">{t.name}</p>
                                    <p className="font-sans text-stone-500 text-xs">{t.community}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}