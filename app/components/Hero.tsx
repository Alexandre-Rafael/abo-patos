import { MessageCircle, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-[72px] flex items-center overflow-hidden"
      style={{ backgroundColor: "#0A2E12" }}
    >
      {/* ── Vídeo de fundo (com fachada como poster) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/imgs/fachada.jpg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.5 }}
        aria-hidden="true"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay para legibilidade ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,46,18,0.82) 0%, rgba(10,46,18,0.50) 55%, rgba(10,46,18,0.25) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Conteúdo ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,640px)_1fr] gap-12 items-center">

          {/* ── COLUNA ESQUERDA — Texto ── */}
          <div className="flex flex-col gap-8">
            <h1
              className="headline-hero font-body font-extrabold"
              style={{ color: "#FFFFFF" }}
            >
              <span
                className="font-display italic block"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "#7FD194",
                }}
              >
                Excelência
              </span>
              em Formação{" "}
              <br className="hidden sm:block" />
              Odontológica.
            </h1>

            <p
              className="text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              A ABO Patos de Minas oferece cursos de atualização,
              aperfeiçoamento, especialização e imersões práticas para
              cirurgiões-dentistas que buscam evolução contínua.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5534997890123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-badge text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "var(--abo-accent)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                <MessageCircle size={16} />
                Falar com a ABO no WhatsApp
              </a>
              <a
                href="#cursos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-badge text-sm font-semibold border-2 transition-all duration-150 hover:bg-white/10"
                style={{
                  color: "#FFFFFF",
                  borderColor: "rgba(255,255,255,0.35)",
                }}
              >
                Conhecer os cursos
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
