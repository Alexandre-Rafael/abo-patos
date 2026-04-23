import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--abo-surface-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── COLUNA ESQUERDA — Foto da equipe ── */}
          <div className="relative">
            <div
              className="relative rounded-card overflow-hidden aspect-[4/3] w-full"
              style={{
                boxShadow: "0 16px 48px rgba(10,27,45,0.14)",
              }}
            >
              <Image
                src="/imgs/equipe.jpg"
                alt="Equipe ABO Patos de Minas"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ── COLUNA DIREITA — Texto ── */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "var(--abo-accent)" }}
              />
              <span
                className="eyebrow"
                style={{ color: "var(--abo-accent)" }}
              >
                Sobre a Associação
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
                Uma associação
              </span>{" "}
              <br />
              construída pela classe.
            </h2>

            <div
              className="flex flex-col gap-4 text-base leading-relaxed"
              style={{ color: "var(--abo-ink-secondary)" }}
            >
              <p>
                A ABO Patos de Minas é a seccional regional da Associação
                Brasileira de Odontologia, dedicada ao fortalecimento
                científico e profissional dos cirurgiões-dentistas do município
                e região.
              </p>
              <p>
                Ao longo de décadas, promovemos cursos, eventos científicos e
                ações de classe que mantêm os profissionais da região na
                vanguarda da odontologia brasileira.
              </p>
            </div>

            <a
              href="#cursos"
              className="inline-flex items-center gap-2 text-sm font-semibold mt-2 transition-all duration-150 hover:gap-3"
              style={{ color: "var(--abo-accent)" }}
            >
              Conhecer os cursos
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
