"use client";

import { Leaf, Building2, BookOpen, Heart } from "lucide-react";
import { MISSION_PILLARS } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
    Leaf,
    Building2,
    BookOpen,
    Heart,
};

const colorMap: Record<string, { bg: string; icon: string; border: string; stat: string }> = {
    forest: {
        bg: "bg-forest-50",
        icon: "bg-forest-100 text-forest-600",
        border: "border-t-4 border-forest-500",
        stat: "text-forest-600",
    },
    ocean: {
        bg: "bg-ocean-50",
        icon: "bg-ocean-100 text-ocean-600",
        border: "border-t-4 border-ocean-500",
        stat: "text-ocean-600",
    },
    clay: {
        bg: "bg-clay-50",
        icon: "bg-clay-100 text-clay-600",
        border: "border-t-4 border-clay-500",
        stat: "text-clay-600",
    },
    earth: {
        bg: "bg-earth-50",
        icon: "bg-earth-100 text-earth-600",
        border: "border-t-4 border-earth-500",
        stat: "text-earth-600",
    },
};

export function MissionSection() {
    return (
        <section id="sobre" className="bg-cream py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="reveal">
                        <p className="section-label mb-3">Nossa Missão</p>
                        <h2 className="font-display font-bold text-dark leading-tight" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
                            Nossa{" "}
                            <span className="text-clay-500 italic">Missão</span>
                        </h2>
                        <p className="font-body text-stone-500 mt-4 max-w-md leading-relaxed">
                            Quatro pilares que guiam cada projeto que realizamos na América Latina.
                        </p>
                    </div>
                    <div className="reveal reveal-delay-2">
                        <div className="inline-flex items-center gap-2 bg-ocean-600 text-white rounded-full px-5 py-2.5 font-sans text-sm font-semibold">
                            DESDE 2008
                        </div>
                    </div>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MISSION_PILLARS.map((pillar, i) => {
                        const Icon = iconMap[pillar.icon];
                        const colors = colorMap[pillar.color];
                        return (
                            <div
                                key={pillar.title}
                                className={`reveal reveal-delay-${i + 1} card-lift rounded-2xl p-6 ${colors.bg} ${colors.border} flex flex-col gap-4`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-dark text-lg mb-2">{pillar.title}</h3>
                                    <p className="font-body text-stone-500 text-sm leading-relaxed">{pillar.description}</p>
                                </div>
                                <p className={`font-sans font-semibold text-sm mt-auto ${colors.stat}`}>
                                    {pillar.stat}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}