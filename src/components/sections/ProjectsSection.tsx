"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/utils";

const tagColorMap: Record<string, string> = {
    forest: "bg-forest-100 text-forest-700",
    clay: "bg-clay-100 text-clay-700",
    earth: "bg-earth-100 text-earth-700",
    ocean: "bg-ocean-100 text-ocean-700",
};

const statColorMap: Record<string, string> = {
    forest: "text-forest-600",
    clay: "text-clay-500",
    earth: "text-earth-500",
    ocean: "text-ocean-600",
};

export function ProjectsSection() {
    return (
        <section className="py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="reveal mb-14">
                    <p className="section-label mb-3">Projetos em Destaque</p>
                    <h2
                        className="font-display font-bold text-dark leading-tight"
                        style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
                    >
                        Projetos em{" "}
                        <span className="text-forest-600 italic">Destaque</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <div
                            key={project.title}
                            className={`reveal reveal-delay-${i + 1} card-lift group bg-white rounded-3xl overflow-hidden border border-stone-100`}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-52">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className={`font-sans text-xs font-semibold px-3 py-1 rounded-full ${tagColorMap[project.tagColor]}`}
                                    >
                                        {project.tag}
                                    </span>
                                    <div className="flex items-center gap-1 text-stone-400">
                                        <MapPin className="w-3 h-3" />
                                        <span className="font-sans text-xs">{project.location}</span>
                                    </div>
                                </div>

                                <h3 className="font-display font-bold text-dark text-xl mb-2">
                                    {project.title}
                                </h3>
                                <p className="font-body text-stone-500 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <p className={`font-sans font-semibold text-sm ${statColorMap[project.tagColor]}`}>
                                        {project.stat}
                                    </p>
                                    <button className="w-8 h-8 rounded-full bg-stone-100 hover:bg-forest-100 flex items-center justify-center text-stone-400 hover:text-forest-600 transition-colors group-hover:bg-forest-100 group-hover:text-forest-600">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}