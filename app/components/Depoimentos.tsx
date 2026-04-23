"use client";

// [ASSET EXTERNO] — Links dos vídeos do Instagram com depoimentos de associados
// [DADO A CONFIRMAR] — Depoimentos em texto: nome, especialidade, frase de impacto

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

interface Depoimento {
  nome: string;
  especialidade: string;
  texto: string;
  instagramUrl?: string;
}

const depoimentos: Depoimento[] = [
  {
    nome: "Dr(a). A confirmar",
    especialidade: "Especialista em Dentística",
    texto:
      "A ABO Patos de Minas foi fundamental para minha atualização profissional. Os cursos são conduzidos por profissionais de alto nível e a troca com os colegas da região é inestimável.",
    instagramUrl: undefined,
  },
  {
    nome: "Dr(a). A confirmar",
    especialidade: "Cirurgião-dentista — Clínica Geral",
    texto:
      "Participar dos cursos da ABO me deu a segurança que precisava para aplicar técnicas modernas na minha prática diária. O ambiente é sério, o conteúdo é atualizado.",
    instagramUrl: undefined,
  },
  {
    nome: "Dr(a). A confirmar",
    especialidade: "Especialista em Ortodontia",
    texto:
      "Não é só um curso — é uma comunidade. Fiz amizades, aprendi com colegas incríveis e me sinto parte de algo maior que a minha clínica. Recomendo a todos.",
    instagramUrl: undefined,
  },
  {
    nome: "Dr(a). A confirmar",
    especialidade: "Recém-formada — UNIUBE",
    texto:
      "Logo que me formei, a ABO foi o primeiro lugar que busquei. A acolhida foi excelente e os cursos me ajudaram a consolidar o que aprendi na faculdade com aplicação prática real.",
    instagramUrl: undefined,
  },
];

export default function Depoimentos() {
  const [atual, setAtual] = useState(0);

  const anterior = () =>
    setAtual((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  const proximo = () =>
    setAtual((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));

  const dep = depoimentos[atual];

  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--abo-surface-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <div className="mb-14 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--abo-accent)" }}
            />
            <span
              className="eyebrow"
              style={{ color: "var(--abo-accent)" }}
            >
              O que dizem sobre a ABO
            </span>
          </div>

          <h2
            className="headline-section font-body font-extrabold"
            style={{ color: "var(--abo-ink-display)" }}
          >
            <span
              className="font-display italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vozes da
            </span>{" "}
            nossa comunidade.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Coluna Esquerda — Carrossel de depoimentos texto */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-card p-8 flex flex-col gap-6"
              style={{
                backgroundColor: "var(--abo-surface-subtle)",
                minHeight: "280px",
              }}
            >
              {/* Aspas */}
              <Quote
                size={32}
                style={{ color: "var(--abo-accent)", opacity: 0.4 }}
              />

              {/* Texto do depoimento */}
              <p
                className="font-display italic text-xl leading-relaxed flex-1"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--abo-ink-body)",
                }}
              >
                "{dep.texto}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "var(--abo-accent)" }}
                >
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--abo-ink-display)" }}
                  >
                    {dep.nome}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--abo-ink-secondary)" }}
                  >
                    {dep.especialidade}
                  </p>
                </div>
                <span
                  className="ml-auto px-2.5 py-1 rounded-badge text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(1,55,117,0.10)",
                    color: "var(--abo-accent)",
                    border: "1px solid rgba(1,55,117,0.20)",
                  }}
                >
                  Associado ABO
                </span>
              </div>
            </div>

            {/* Controles do carrossel */}
            <div className="flex items-center gap-4">
              <button
                onClick={anterior}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-150 hover:bg-surface-subtle"
                style={{
                  borderColor: "rgba(10,27,45,0.15)",
                  color: "var(--abo-ink-body)",
                }}
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAtual(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: i === atual ? "24px" : "8px",
                      height: "8px",
                      backgroundColor:
                        i === atual
                          ? "var(--abo-accent)"
                          : "rgba(10,27,45,0.15)",
                    }}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={proximo}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-150 hover:bg-surface-subtle"
                style={{
                  borderColor: "rgba(10,27,45,0.15)",
                  color: "var(--abo-ink-body)",
                }}
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Coluna Direita — Vídeo depoimento */}
          <div className="flex flex-col gap-4">
            <p
              className="text-sm font-medium mb-2"
              style={{ color: "var(--abo-ink-body)" }}
            >
              Assista ao depoimento em vídeo:
            </p>

            <div
              className="relative rounded-card overflow-hidden aspect-[9/16] w-full max-w-sm mx-auto"
              style={{
                boxShadow: "0 16px 48px rgba(10,27,45,0.20)",
                backgroundColor: "#000",
              }}
            >
              <video
                src="/depoimento.mp4"
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <a
              href="https://www.instagram.com/abo.patosdeminas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold mt-2 transition-all duration-150 hover:gap-3 self-center"
              style={{ color: "var(--abo-accent)" }}
            >
              <InstagramIcon size={15} />
              @abo.patosdeminas no Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
