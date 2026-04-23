"use client";

// [DADO A CONFIRMAR] — As 14 perguntas e respostas finais devem ser fornecidas pelo cliente
// As perguntas abaixo são realistas e representativas — revisar e ajustar conforme necessário

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Pergunta {
  q: string;
  a: string;
}

const faqs: Pergunta[] = [
  {
    q: "Como posso me associar à ABO Patos de Minas?",
    a: "Para se associar, basta entrar em contato com a sede da ABO pelo WhatsApp (34) 99789-0123 ou pelo e-mail patosdeminas.abo@gmail.com. Nossa equipe informará sobre a documentação necessária, taxa de associação e os benefícios disponíveis.",
  },
  {
    q: "Quais são os benefícios de ser associado?",
    a: "Os associados têm acesso a preços especiais nos cursos e eventos, participação em assembleias e decisões da classe, networking com profissionais da região, representação junto ao CRO-MG e acesso a conteúdos e informações exclusivos da categoria.",
  },
  {
    q: "Como funciona a inscrição nos cursos?",
    a: "As inscrições são feitas diretamente pelo WhatsApp da ABO: (34) 99789-0123. Nossa equipe informará sobre vagas disponíveis, datas, valores, formas de pagamento e o que é necessário para confirmar a inscrição.",
  },
  {
    q: "Os cursos têm certificado reconhecido pelo CRO-MG?",
    a: "Sim. Todos os cursos oferecidos pela ABO Patos de Minas são certificados e seguem as normas estabelecidas pelo Conselho Regional de Odontologia de Minas Gerais (CRO-MG). A Especialização em Ortodontia possui reconhecimento específico pelo CFO.",
  },
  {
    q: "Os cursos são abertos para estudantes de odontologia?",
    a: "Alguns cursos de atualização são abertos para estudantes de odontologia do último ano. Cada curso tem seu público-alvo específico. Entre em contato pelo WhatsApp para verificar a elegibilidade para cada programa.",
  },
  {
    q: "Qual é a diferença entre Atualização, Aperfeiçoamento e Especialização?",
    a: "Atualização são cursos de curta duração para manter o profissional informado sobre as novidades da área. Aperfeiçoamento é um aprofundamento técnico em uma área específica. Especialização é um programa longo, reconhecido pelo CFO, que habilita o profissional a atuar com titulação de especialista.",
  },
  {
    q: "Como funciona o Curso de ASB (Auxiliar em Saúde Bucal)?",
    a: "O Curso de ASB da ABO é um programa de formação completo para quem deseja trabalhar como Auxiliar em Saúde Bucal. É voltado a pessoas com ensino médio completo e ao final o aluno recebe certificação habilitante, reconhecida pelo CRO-MG, para atuar em clínicas odontológicas.",
  },
  {
    q: "As imersões têm prática clínica supervisionada?",
    a: "Sim. As imersões em Toxina Botulínica e em Facetas com Resina Composta incluem prática supervisionada em modelos e/ou pacientes, dependendo da carga horária do módulo. O objetivo é que o aluno saia apto para aplicar a técnica na sua rotina clínica.",
  },
  {
    q: "Quais são as formas de pagamento aceitas?",
    a: "As formas de pagamento variam conforme o curso. Em geral, aceitamos PIX, boleto bancário e cartão de crédito (com parcelamento em alguns casos). Entre em contato pelo WhatsApp para informações específicas do curso de interesse.",
  },
  {
    q: "A ABO oferece estacionamento ou acesso facilitado?",
    a: "Nossa sede está localizada na Rua dos Carajás, no bairro Caiçaras, em Patos de Minas. Há opções de estacionamento nas proximidades. Para informações detalhadas de acesso, entre em contato conosco.",
  },
  {
    q: "Como recebo informações sobre novos cursos e eventos?",
    a: "A melhor forma de se manter atualizado é nos seguindo no Instagram (@abo.patosdeminas) e entrando em contato pelo WhatsApp para ser incluído em nossa lista de avisos. Associados recebem informações em primeira mão.",
  },
  {
    q: "Posso indicar um palestrante ou instrutor para um curso?",
    a: "Sim! A ABO está sempre aberta a sugestões de temas e profissionais para cursos e palestras. Entre em contato pelo e-mail patosdeminas.abo@gmail.com com sua indicação.",
  },
  {
    q: "A ABO atende pacientes? Como funciona esse atendimento?",
    a: "Sim, a ABO Patos de Minas realiza atendimento odontológico a pacientes em sua sede. Para informações sobre serviços disponíveis, agendamento e condições de atendimento, entre em contato pelo WhatsApp exclusivo de pacientes: (34) 99894-0124.",
  },
  {
    q: "Como funciona a Especialização em Ortodontia?",
    a: "A Especialização em Ortodontia é um programa longo e estruturado, voltado a cirurgiões-dentistas que desejam obter o título de especialista em ortodontia pelo CFO. O programa inclui módulos teóricos e práticos, com supervisão de especialistas. Entre em contato para informações sobre carga horária, duração, valor e próxima turma.",
  },
];

function ItemFAQ({ faq, indice }: { faq: Pergunta; indice: number }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      className="border-b transition-colors duration-150"
      style={{ borderColor: "rgba(10,27,45,0.07)" }}
    >
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={aberto}
      >
        <div className="flex items-start gap-3">
          <span
            className="flex-shrink-0 text-xs font-semibold mt-0.5 w-6"
            style={{ color: "var(--abo-accent)", opacity: 0.5 }}
          >
            {String(indice + 1).padStart(2, "0")}
          </span>
          <span
            className="font-body font-semibold text-base leading-snug"
            style={{ color: "var(--abo-ink-display)" }}
          >
            {faq.q}
          </span>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-200"
          style={{
            borderColor: aberto ? "var(--abo-accent)" : "rgba(10,27,45,0.15)",
            backgroundColor: aberto ? "var(--abo-accent)" : "transparent",
            color: aberto ? "white" : "var(--abo-ink-secondary)",
          }}
        >
          {aberto ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: aberto ? "500px" : "0px" }}
      >
        <p
          className="pb-5 pl-9 text-base leading-relaxed"
          style={{ color: "var(--abo-ink-secondary)" }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--abo-surface-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Coluna esquerda — sticky */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "var(--abo-accent)" }}
              />
              <span
                className="eyebrow"
                style={{ color: "var(--abo-accent)" }}
              >
                Perguntas Frequentes
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
                Temos
              </span>{" "}
              respostas.
            </h2>

            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "var(--abo-ink-secondary)" }}
            >
              Não encontrou o que procurava? Fale diretamente conosco pelo
              WhatsApp.
            </p>

            <a
              href="https://wa.me/5534997890123"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-badge text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px"
              style={{
                backgroundColor: "var(--abo-accent)",
                boxShadow: "0 4px 16px rgba(1,55,117,0.25)",
              }}
            >
              Falar com a ABO
            </a>
          </div>

          {/* Coluna direita — accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <ItemFAQ key={i} faq={faq} indice={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
