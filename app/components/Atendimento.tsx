import { MessageCircle, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function Atendimento() {
  return (
    <section
      id="pacientes"
      className="py-20 lg:py-24"
      style={{ backgroundColor: "var(--abo-surface-subtle)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Coluna esquerda — Foto */}
          <div
            className="relative rounded-card overflow-hidden aspect-[4/3] w-full"
            style={{ boxShadow: "0 16px 48px rgba(10,27,45,0.14)" }}
          >
            <Image
              src="/imgs/atendimento.jpg"
              alt="Atendimento odontológico na ABO Patos de Minas"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Coluna direita — Texto */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "var(--abo-accent)" }}
              />
              <span className="eyebrow" style={{ color: "var(--abo-accent)" }}>
                Atendimento a Pacientes
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
                Cuidado
              </span>{" "}
              acessível à comunidade.
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--abo-ink-secondary)" }}
            >
              Além dos cursos e atividades científicas, a ABO Patos de Minas
              também realiza atendimento odontológico a pacientes em sua sede.
              Um serviço prestado à comunidade com responsabilidade e
              qualidade.
            </p>

            <div className="flex flex-col gap-3 text-sm" style={{ color: "var(--abo-ink-secondary)" }}>
              <div className="flex items-center gap-2">
                <Clock size={16} style={{ color: "var(--abo-accent)" }} />
                <span>Seg–Qui: 8h–13h · Sex e Sáb em dias de curso</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} style={{ color: "var(--abo-accent)" }} className="mt-0.5 flex-shrink-0" />
                <span>Rua Carajás, 729 — Patos de Minas - MG, 38702-188 <br /><span style={{ opacity: 0.7 }}>(próximo ao Hotel IBIS)</span></span>
              </div>
            </div>

            <a
              href="https://wa.me/5534998940124"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-badge text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 w-fit"
              style={{
                backgroundColor: "#25D366",
                boxShadow: "0 4px 16px rgba(37,211,102,0.30)",
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Pacientes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
