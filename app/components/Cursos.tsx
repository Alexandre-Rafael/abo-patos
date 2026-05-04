import Image from "next/image";
import { MessageCircle } from "lucide-react";

// [DADO A CONFIRMAR] — Carga horária e datas de cada curso

type Modalidade =
  | "Atualização"
  | "Aperfeiçoamento"
  | "Especialização"
  | "Imersão"
  | "Formação"
  | "Evento";

interface Curso {
  numero: string;
  titulo: string;
  modalidade: Modalidade;
  descricao: string;
  chamada?: string;
  formato: string;
  cargaHoraria: string;
  publico: string;
  inicio: string;
  capa: string;
  inscricaoUrl?: string;
}

const cursos: Curso[] = [
  {
    numero: "01",
    titulo: "Atualização em Dentística",
    modalidade: "Atualização",
    descricao:
      "Programa de atualização voltado às técnicas mais modernas em dentística restauradora, com foco em estética, biomateriais e abordagens minimamente invasivas para resultados naturais e duradouros.",
    formato: "Presencial",
    cargaHoraria: "A confirmar",
    publico: "Cirurgiões-dentistas",
    inicio: "A confirmar",
    capa: "/imgs/cursos/dentistica.png",
  },
  {
    numero: "02",
    titulo: "Atualização em Endodontia",
    modalidade: "Atualização",
    descricao:
      "Atualização focada em técnicas contemporâneas de tratamento endodôntico, incluindo instrumentação rotatória, retratamentos e diagnóstico por imagem para maior segurança clínica.",
    formato: "Presencial",
    cargaHoraria: "A confirmar",
    publico: "Cirurgiões-dentistas",
    inicio: "A confirmar",
    capa: "/imgs/cursos/endodontia.png",
  },
  {
    numero: "03",
    titulo: "Aperfeiçoamento em Cirurgia Oral Menor e Periodontia",
    modalidade: "Aperfeiçoamento",
    descricao:
      "Programa de aperfeiçoamento prático em procedimentos cirúrgicos orais menores e técnicas periodontais, com ênfase em protocolo clínico, sutura e manejo de tecidos moles.",
    formato: "Presencial com prática clínica",
    cargaHoraria: "A confirmar",
    publico: "Cirurgiões-dentistas",
    inicio: "A confirmar",
    capa: "/imgs/cursos/cirurgia-periodontia.png",
  },
  {
    numero: "04",
    titulo: "Especialização em Ortodontia",
    modalidade: "Especialização",
    descricao:
      "Especialização estruturada em ortodontia clínica, reconhecida pelo CRO-MG, abrangendo diagnóstico, planejamento, biomecânica, aparelhos fixos e alinhadores removíveis.",
    formato: "Presencial modular",
    cargaHoraria: "A confirmar",
    publico: "Cirurgiões-dentistas",
    inicio: "A confirmar",
    capa: "/imgs/cursos/ortodontia.png",
  },
  {
    numero: "05",
    titulo: "Imersão em Toxina Botulínica e Preenchimento Labial",
    modalidade: "Imersão",
    descricao:
      "Imersão prática intensiva em aplicação terapêutica e estética de toxina botulínica e ácido hialurônico, com protocolo de segurança, anatomia facial e treinamento em modelos.",
    formato: "Presencial — imersão intensiva",
    cargaHoraria: "A confirmar",
    publico: "Cirurgiões-dentistas habilitados",
    inicio: "A confirmar",
    capa: "/imgs/cursos/toxina-botulinica.png",
  },
  {
    numero: "06",
    titulo: "Imersão em Facetas com Resina Composta",
    modalidade: "Imersão",
    descricao:
      "Imersão técnica em confecção de facetas diretas em resina composta: escolha de cor, estratificação, escultura e polimento. Abordagem estética com foco em resultado natural e durável.",
    formato: "Presencial — imersão intensiva",
    cargaHoraria: "A confirmar",
    publico: "Cirurgiões-dentistas",
    inicio: "A confirmar",
    capa: "/imgs/cursos/facetas.png",
  },
  {
    numero: "07",
    titulo: "Curso de ASB — Auxiliar em Saúde Bucal",
    modalidade: "Formação",
    descricao:
      "É com imenso prazer que viemos informá-los que trazemos uma novidade muito esperada: o retorno do curso de Auxiliar de Saúde Bucal — ASB. Em parceria com a ABO Montes Claros, disponibilizamos o curso de forma on-line. Compartilhe o link abaixo para que possamos fortalecer nossa querida ABO Patos de Minas.",
    chamada: "Inscrições abertas — modalidade on-line, em parceria com a ABO Montes Claros.",
    formato: "On-line",
    cargaHoraria: "A confirmar",
    publico: "Ensino médio completo",
    inicio: "A confirmar",
    capa: "/imgs/cursos/asb.png",
    inscricaoUrl: "https://hotm.art/abopatosdeminas",
  },
];

const badgeStyles: Record<Modalidade, { bg: string; border: string; text: string }> = {
  Atualização: {
    bg: "rgba(26,107,42,0.12)",
    border: "rgba(26,107,42,0.40)",
    text: "#4A7EC8",
  },
  Aperfeiçoamento: {
    bg: "rgba(124,90,32,0.12)",
    border: "rgba(124,90,32,0.40)",
    text: "#A07030",
  },
  Especialização: {
    bg: "rgba(139,105,20,0.14)",
    border: "rgba(139,105,20,0.40)",
    text: "#A08020",
  },
  Imersão: {
    bg: "rgba(13,107,94,0.12)",
    border: "rgba(13,107,94,0.40)",
    text: "#1A8C7A",
  },
  Formação: {
    bg: "rgba(74,90,106,0.14)",
    border: "rgba(74,90,106,0.40)",
    text: "#8AA0B4",
  },
  Evento: {
    bg: "rgba(74,45,107,0.12)",
    border: "rgba(74,45,107,0.40)",
    text: "#9A70C0",
  },
};

function Badge({ modalidade }: { modalidade: Modalidade }) {
  const s = badgeStyles[modalidade];
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-badge text-xs font-semibold"
      style={{
        backgroundColor: s.bg,
        border: `1px solid ${s.border}`,
        color: s.text,
        letterSpacing: "0.03em",
      }}
    >
      {modalidade}
    </span>
  );
}

function CursoFicha({ curso, invertido }: { curso: Curso; invertido: boolean }) {
  return (
    <article
      className="rounded-card overflow-hidden flex flex-col lg:flex-row"
      style={{
        backgroundColor: "var(--abo-surface-card-dark)",
        flexDirection: invertido ? undefined : undefined,
      }}
    >
      {/* Capa do curso */}
      <div
        className={`relative flex-shrink-0 lg:w-[38%] aspect-[4/3] lg:aspect-auto min-h-[260px] ${
          invertido ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={curso.capa}
          alt={curso.titulo}
          fill
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Conteúdo da ficha */}
      <div
        className={`flex flex-col gap-4 p-6 lg:p-8 flex-1 ${
          invertido ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Numeração + Badge */}
        <div className="flex items-center justify-between gap-4">
          <span
            className="font-body text-xs font-semibold"
            style={{ color: "#7FB0EA", letterSpacing: "0.10em" }}
          >
            /{curso.numero}
          </span>
          <Badge modalidade={curso.modalidade} />
        </div>

        {/* Título */}
        <h3
          className="headline-card font-body font-bold"
          style={{ color: "var(--abo-ink-display-dark)" }}
        >
          {curso.titulo}
        </h3>

        {/* Descrição */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--abo-ink-secondary-dark)" }}
        >
          {curso.descricao}
        </p>

        {/* Divisória */}
        <div
          className="w-full h-px"
          style={{ backgroundColor: "rgba(232,237,242,0.08)" }}
        />

        {/* Grid de detalhes */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Formato", valor: curso.formato },
            { label: "Carga Horária", valor: curso.cargaHoraria },
            { label: "Público-alvo", valor: curso.publico },
            { label: "Início", valor: curso.inicio },
          ].map((detalhe) => (
            <div key={detalhe.label}>
              <p
                className="text-xs font-semibold mb-0.5"
                style={{ color: "var(--abo-ink-micro-dark)" }}
              >
                {detalhe.label}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--abo-ink-body-dark)" }}
              >
                {detalhe.valor}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2 flex flex-wrap gap-3">
          <a
            href="https://wa.me/5534997890123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-badge text-sm font-semibold border transition-all duration-150 hover:bg-white hover:text-surface-dark"
            style={{
              color: "white",
              borderColor: "rgba(255,255,255,0.25)",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            <MessageCircle size={15} />
            Saber mais no WhatsApp
          </a>
          {curso.inscricaoUrl && (
            <a
              href={curso.inscricaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-badge text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5"
              style={{
                color: "white",
                backgroundColor: "var(--abo-accent)",
                boxShadow: "0 4px 16px rgba(1,55,117,0.30)",
              }}
            >
              Inscrever-se →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Cursos() {
  return (
    <section
      id="cursos"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--abo-surface-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho da seção */}
        <div className="mb-14 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "#7FB0EA" }}
            />
            <span
              className="eyebrow"
              style={{ color: "#7FB0EA" }}
            >
              Cursos e Formações
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
              Formação que
            </span>{" "}
            transforma carreiras.
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--abo-ink-secondary-dark)" }}
          >
            Do aprimoramento técnico à especialização reconhecida — cada programa
            é desenvolvido com rigor científico e aplicação prática imediata.
          </p>
        </div>

        {/* Fichas de cursos */}
        <div className="flex flex-col gap-6">
          {cursos.map((curso, i) => (
            <CursoFicha key={curso.numero} curso={curso} invertido={i % 2 !== 0} />
          ))}
        </div>

        {/* Nota sobre palestras */}
        <div
          className="mt-10 rounded-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            backgroundColor: "rgba(1,55,117,0.10)",
            border: "1px solid rgba(1,55,117,0.20)",
          }}
        >
          <div
            className="w-10 h-10 rounded-subtle flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(26,107,42,0.20)" }}
          >
            <span style={{ fontSize: 18 }}>🎤</span>
          </div>
          <div className="flex-1">
            <p
              className="font-semibold text-sm"
              style={{ color: "var(--abo-ink-body-dark)" }}
            >
              Palestras e Eventos Científicos
            </p>
            <p
              className="text-sm mt-0.5"
              style={{ color: "var(--abo-ink-secondary-dark)" }}
            >
              A ABO também promove palestras com especialistas nacionais e eventos
              científicos ao longo do ano. Fale conosco para saber a programação.
            </p>
          </div>
          <a
            href="https://wa.me/5534997890123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-badge text-xs font-semibold flex-shrink-0 transition-colors duration-150"
            style={{
              backgroundColor: "var(--abo-accent)",
              color: "white",
            }}
          >
            <MessageCircle size={13} />
            Consultar programação
          </a>
        </div>
      </div>
    </section>
  );
}
