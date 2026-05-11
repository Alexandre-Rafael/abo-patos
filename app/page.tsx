import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Parceiros from "./components/Parceiros";
import Sobre from "./components/Sobre";
import Cursos from "./components/Cursos";
import Diretoria from "./components/Diretoria";
import ExPresidentes from "./components/ExPresidentes";
import Depoimentos from "./components/Depoimentos";
import Eventos from "./components/Eventos";
import Atendimento from "./components/Atendimento";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero aparece imediatamente, sem animação de entrada */}
        <Hero />

        <FadeIn delay={0}>
          <Parceiros />
        </FadeIn>

        <FadeIn>
          <Sobre />
        </FadeIn>

        <FadeIn>
          <Cursos />
        </FadeIn>

        <FadeIn>
          <Diretoria />
        </FadeIn>

        <FadeIn>
          <ExPresidentes />
        </FadeIn>

        <FadeIn>
          <Depoimentos />
        </FadeIn>

        <FadeIn>
          <Eventos />
        </FadeIn>

        <FadeIn>
          <Atendimento />
        </FadeIn>

        <FadeIn>
          <FAQ />
        </FadeIn>

        <FadeIn>
          <CTAFinal />
        </FadeIn>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
