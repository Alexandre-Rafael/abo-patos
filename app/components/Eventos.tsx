import Image from "next/image";
import { ArrowRight } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

// [ASSET EXTERNO] — Fotos de eventos sociais, confraternizações, formaturas (mínimo 6 fotos)

const galeria = [
  { src: "/imgs/equipe.jpg", label: "Equipe ABO" },
  { src: "/imgs/sala-aula.jpg", label: "Sala de aula" },
  { src: "/imgs/atendimento.jpg", label: "Atendimento a pacientes" },
  { src: "/imgs/quadros-presidentes.jpg", label: "Quadro de ex-presidentes" },
  { src: "/imgs/atendimento2.jpg", label: "Clínica escola" },
  { src: "/imgs/equipamento-antigo.jpg", label: "Acervo histórico" },
  { src: "/imgs/atendimento3.jpg", label: "Consultório" },
  { src: "/imgs/equipamento-antigo-2.jpg", label: "Equipamentos históricos" },
];

export default function Eventos() {
  return (
    <section
      id="eventos"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--abo-surface-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "#7FB0EA" }}
              />
              <span
                className="eyebrow"
                style={{ color: "#7FB0EA" }}
              >
                Eventos e Comunidade
              </span>
            </div>

            <h2
              className="headline-section font-body font-extrabold"
              style={{ color: "var(--abo-ink-display-dark)" }}
            >
              <span
                className="font-display italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Além dos
              </span>{" "}
              cursos, pertencimento.
            </h2>

            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "var(--abo-ink-secondary-dark)" }}
            >
              A ABO é onde a odontologia regional se encontra, celebra e avança
              junto. Eventos, confraternizações e momentos que constroem a nossa
              identidade coletiva.
            </p>
          </div>

          <a
            href="https://www.instagram.com/abo.patosdeminas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-badge text-sm font-semibold border transition-all duration-150 self-start lg:self-auto hover:bg-white/10 flex-shrink-0"
            style={{
              color: "white",
              borderColor: "rgba(255,255,255,0.25)",
            }}
          >
            <InstagramIcon size={15} />
            Ver mais no Instagram
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Galeria mosaico */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
          {galeria.map((foto, i) => {
            const spans =
              i === 0
                ? "md:col-span-2 md:row-span-2"
                : i === 3
                ? "md:col-span-2"
                : "";
            return (
              <div
                key={i}
                className={`group relative rounded-card overflow-hidden ${spans}`}
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.30)" }}
              >
                <Image
                  src={foto.src}
                  alt={foto.label}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay com hover */}
                <div
                  className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,27,42,0.85) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "white" }}
                  >
                    {foto.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frase de pertencimento */}
        <div
          className="mt-12 text-center py-8 border-t"
          style={{ borderColor: "rgba(232,237,242,0.08)" }}
        >
          <p
            className="font-display italic text-xl lg:text-2xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--abo-ink-body-dark)",
            }}
          >
            "Ser associado da ABO não é só um cartão. É pertencer à elite
            profissional da odontologia regional."
          </p>
        </div>
      </div>
    </section>
  );
}
