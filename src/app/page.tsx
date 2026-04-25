import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ProposalSection } from "@/components/sections/ProposalSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { RevealInit } from "@/components/ui/RevealInit";

export default function Home() {
    return (
        <main>
            <RevealInit />
            <Navbar />
            <HeroSection />
            <MissionSection />
            <ProposalSection />
            <MetricsSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}