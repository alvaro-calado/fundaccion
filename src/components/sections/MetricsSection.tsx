"use client";

import { MapPin, CheckCircle2, Users, Award, Sprout, CalendarDays } from "lucide-react";
import { METRICS } from "@/lib/utils";

const iconMap = [MapPin, CheckCircle2, Users, Award, Sprout, CalendarDays];

const colorMap: Record<string, { value: string; icon: string; bar: string }> = {
    forest: { value: "text-forest-600", icon: "bg-forest-100 text-forest-600", bar: "bg-forest-500" },
    ocean: { value: "text-ocean-600", icon: "bg-ocean-100 text-ocean-600", bar: "bg-ocean-500" },
    clay: { value: "text-clay-500", icon: "bg-clay-100 text-clay-500", bar: "bg-clay-500" },
    earth: { value: "text-earth-500", icon: "bg-earth-100 text-earth-500", bar: "bg-earth-500" },
};

export function MetricsSection() {
    return (
        <section id="impacto" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div className="reveal">
                        <p className="section-label mb-3">Métricas de Impacto</p>
                        <h2
                            className="font-display font-bold text-dark leading-tight"
                            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
                        >
                            Números que{" "}
                            <span className="text-gradient-forest italic">falam por si</span>
                        </h2>
                    </div>
                    <div className="reveal reveal-delay-2 max-w-xs">
                        <p className="font-body text-stone-400 text-sm leading-relaxed">
                            Dados auditados e verificados por organismos internacionais independentes.
                        </p>
                    </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {METRICS.map((metric, i) => {
                        const Icon = iconMap[i];
                        const colors = colorMap[metric.color];
                        return (
                            <div
                                key={metric.label}
                                className={`reveal reveal-delay-${i + 1} card-lift bg-stone-50 rounded-2xl p-5 flex flex-col gap-3 border-b-4 ${colors.bar.replace("bg-", "border-")}`}
                            >
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colors.icon}`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className={`font-display font-black text-2xl xl:text-3xl ${colors.value}`}>
                                        {metric.value}
                                    </p>
                                    <p className="font-sans font-semibold text-dark text-xs mt-1 leading-snug">
                                        {metric.label}
                                    </p>
                                    <p className="font-sans text-stone-400 text-xs mt-0.5 leading-snug">
                                        {metric.sub}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Report CTA */}
                <div className="mt-12 reveal">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-earth-50 border border-earth-200 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-ocean-600 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="font-sans font-semibold text-dark text-sm">Relatório de Impacto 2024</p>
                                <p className="font-sans text-stone-400 text-xs">Auditado pela Deloitte · 48 páginas</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white px-5 py-2.5 rounded-full font-sans font-medium text-sm transition-colors whitespace-nowrap">
                            Solicitar relatório completo
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}