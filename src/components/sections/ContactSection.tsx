"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { PARTNERS } from "@/lib/utils";

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        nome: "",
        organizacao: "",
        email: "",
        parceria: "",
        mensagem: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contato" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="reveal mb-16">
                    {/* Ornament */}
                    <div className="ornament-line mb-5">
                        <span className="w-8 bg-ocean-600" />
                        <span className="w-5 bg-earth-500" />
                        <span className="w-5 bg-forest-500" />
                        <span className="w-5 bg-clay-500" />
                    </div>
                    <p className="section-label mb-3">Formulário de Contato</p>
                    <h2
                        className="font-display font-bold text-dark leading-tight"
                        style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
                    >
                        Fale com a{" "}
                        <span className="text-clay-500 italic">Fundaccion</span>
                    </h2>
                    <p className="font-body text-stone-500 mt-4 max-w-md leading-relaxed">
                        Seja você um financiador institucional, parceiro estratégico ou organização
                        interessada em colaborar, estamos prontos para apresentar nossas propostas de
                        impacto.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: info */}
                    <div className="reveal-left space-y-8">
                        {/* Contact info */}
                        <div className="space-y-5">
                            {[
                                {
                                    Icon: Mail,
                                    label: "E-mail institucional",
                                    value: "parceiros@fundaccion.org",
                                },
                                {
                                    Icon: MapPin,
                                    label: "Sede Regional",
                                    value: "Bogotá, Colômbia · América Latina",
                                },
                                {
                                    Icon: Phone,
                                    label: "Telefone",
                                    value: "+57 (1) 234-5678",
                                },
                            ].map(({ Icon, label, value }) => (
                                <div key={label} className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-stone-500" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs text-stone-400">{label}</p>
                                        <p className="font-sans font-medium text-dark text-sm">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Partners */}
                        <div>
                            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
                                Parceiros Institucionais
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {PARTNERS.map((p) => (
                                    <span
                                        key={p}
                                        className="font-sans text-xs font-medium text-stone-500 bg-stone-100 rounded-full px-3 py-1.5"
                                    >
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="rounded-2xl overflow-hidden h-48 bg-stone-100 relative">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60"
                                alt="Bogotá Colombia"
                                className="w-full h-full object-cover opacity-70"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-clay-500" />
                                    <span className="font-sans text-sm font-medium text-dark">Bogotá, Colômbia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className="reveal-right">
                        <div className="bg-stone-50 border border-earth-200 rounded-3xl p-8">
                            <h3 className="font-display font-bold text-dark text-xl mb-6">
                                Solicite uma apresentação
                            </h3>

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                                    <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 text-forest-600" />
                                    </div>
                                    <h4 className="font-display font-bold text-dark text-xl">Mensagem enviada!</h4>
                                    <p className="font-body text-stone-500 text-sm leading-relaxed max-w-xs">
                                        Nossa equipe entrará em contato em até 48 horas úteis. Obrigado pelo interesse!
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-2 font-sans text-sm text-forest-600 underline"
                                    >
                                        Enviar nova mensagem
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-sans text-xs font-semibold uppercase tracking-wide text-stone-400 block mb-1.5">
                                                Nome Completo *
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Seu nome"
                                                value={form.nome}
                                                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                                                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-sans text-sm text-dark placeholder-stone-300 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-sans text-xs font-semibold uppercase tracking-wide text-stone-400 block mb-1.5">
                                                Organização *
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Nome da instituição"
                                                value={form.organizacao}
                                                onChange={(e) => setForm({ ...form, organizacao: e.target.value })}
                                                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-sans text-sm text-dark placeholder-stone-300 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-stone-400 block mb-1.5">
                                            E-mail Institucional *
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="seu@organizacao.org"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-sans text-sm text-dark placeholder-stone-300 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-stone-400 block mb-1.5">
                                            Tipo de Parceria
                                        </label>
                                        <select
                                            value={form.parceria}
                                            onChange={(e) => setForm({ ...form, parceria: e.target.value })}
                                            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-sans text-sm text-dark focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all"
                                        >
                                            <option value="">Selecione uma opção</option>
                                            <option value="financiador">Financiador Institucional</option>
                                            <option value="parceiro">Parceiro Estratégico</option>
                                            <option value="voluntario">Voluntário</option>
                                            <option value="imprensa">Imprensa</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="font-sans text-xs font-semibold uppercase tracking-wide text-stone-400 block mb-1.5">
                                            Mensagem *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="Descreva seu interesse em colaborar com a Fundaccion..."
                                            value={form.mensagem}
                                            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                                            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-sans text-sm text-dark placeholder-stone-300 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full group flex items-center justify-center gap-2 bg-clay-500 hover:bg-clay-600 text-white py-4 rounded-xl font-sans font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-clay-200"
                                    >
                                        Enviar Mensagem
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </button>

                                    <p className="font-sans text-xs text-stone-400 text-center">
                                        Seus dados são tratados com total confidencialidade.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}