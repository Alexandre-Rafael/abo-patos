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

export default function Home() {
  return (
    <>
      {/* Navegação fixa */}
      <Nav />

      <main>
        {/* ATO 1 — CHAMADO */}
        <Hero />

        {/* RESPIRO — Prova social rápida */}
        <Parceiros />

        {/* ATO 2 — RAÍZES */}
        <Sobre />

        {/* ATO 3 — CLÍMAX — Produto principal */}
        <Cursos />

        {/* ATO 4 — AUTORIDADE */}
        <Diretoria />

        {/* RESPIRO — Tradição e história */}
        <ExPresidentes />

        {/* HUMANIZAÇÃO — Vozes da comunidade */}
        <Depoimentos />

        {/* ATO 5 — COMUNIDADE */}
        <Eventos />

        {/* EXTENSÃO — Atendimento a pacientes */}
        <Atendimento />

        {/* CLAREZA — Remoção de objeções */}
        <FAQ />

        {/* RESOLUÇÃO — Convocação final */}
        <CTAFinal />
      </main>

      {/* Fechamento */}
      <Footer />

      {/* Botão flutuante WhatsApp — persiste em toda a página */}
      <WhatsAppFloat />
    </>
  );
}
