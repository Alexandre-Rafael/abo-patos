import Image from "next/image";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const linksRapidos = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre a ABO", href: "#sobre" },
  { label: "Cursos e Formações", href: "#cursos" },
  { label: "Diretoria", href: "#diretoria" },
  { label: "Nossa História", href: "#historia" },
  { label: "Eventos", href: "#eventos" },
  { label: "Pacientes", href: "#pacientes" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--abo-surface-page)" }}
    >
      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 — Logo e descrição */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/logo-abo.png"
              alt="ABO Patos de Minas"
              width={180}
              height={72}
              className="h-14 w-auto object-contain"
            />
            <p
              className="text-xs"
              style={{ color: "var(--abo-ink-micro)" }}
            >
              Gestão 2024–2026
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--abo-ink-secondary)" }}
            >
              A referência em formação odontológica de Patos de Minas e região.
              Cursos, eventos e comunidade profissional desde a nossa fundação.
            </p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/abo.patosdeminas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--abo-ink-secondary)" }}
            >
              <InstagramIcon size={16} />
              @abo.patosdeminas
            </a>
          </div>

          {/* Coluna 2 — Links rápidos */}
          <div className="flex flex-col gap-3">
            <h4
              className="eyebrow mb-2"
              style={{ color: "var(--abo-ink-micro)" }}
            >
              Navegação
            </h4>
            {linksRapidos.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-150"
                style={{ color: "var(--abo-ink-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Coluna 3 — Contato */}
          <div className="flex flex-col gap-4">
            <h4
              className="eyebrow mb-2"
              style={{ color: "var(--abo-ink-micro)" }}
            >
              Contato
            </h4>

            <a
              href="https://wa.me/5534997890123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group"
            >
              <Phone
                size={15}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--abo-accent)" }}
              />
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--abo-ink-micro)" }}
                >
                  WhatsApp Sede (Cursos)
                </p>
                <p
                  className="text-sm transition-colors"
                  style={{ color: "var(--abo-ink-body)" }}
                >
                  (34) 99789-0123
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/5534998940124"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group"
            >
              <Phone
                size={15}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "#25D366" }}
              />
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--abo-ink-micro)" }}
                >
                  WhatsApp Pacientes
                </p>
                <p
                  className="text-sm transition-colors"
                  style={{ color: "var(--abo-ink-body)" }}
                >
                  (34) 99894-0124
                </p>
              </div>
            </a>

            <a
              href="mailto:patosdeminas.abo@gmail.com"
              className="flex items-start gap-3 group"
            >
              <Mail
                size={15}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--abo-accent)" }}
              />
              <p
                className="text-sm transition-colors"
                style={{ color: "var(--abo-ink-body)" }}
              >
                patosdeminas.abo@gmail.com
              </p>
            </a>
          </div>

          {/* Coluna 4 — Endereço e horários */}
          <div className="flex flex-col gap-4">
            <h4
              className="eyebrow mb-2"
              style={{ color: "var(--abo-ink-micro)" }}
            >
              Localização e Horários
            </h4>

            <div className="flex items-start gap-3">
              <MapPin
                size={15}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--abo-accent)" }}
              />
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--abo-ink-secondary)" }}
              >
                Rua dos Carajás — Caiçaras
                <br />
                Patos de Minas — MG
                <br />
                CEP: 38702-188
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                size={15}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--abo-accent)" }}
              />
              <div
                className="text-sm flex flex-col gap-1"
                style={{ color: "var(--abo-ink-secondary)" }}
              >
                <span>Seg–Qui: 8h às 13h</span>
                <span>Sexta: 8h às 17h*</span>
                <span>Sábado: 8h às 12h*</span>
                <span
                  className="text-xs mt-1"
                  style={{ color: "var(--abo-ink-micro)" }}
                >
                  * Em dias de curso
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(10,27,45,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "var(--abo-ink-micro)" }}
          >
            © {new Date().getFullYear()} ABO Patos de Minas. Todos os direitos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--abo-ink-micro)" }}
          >
            Associação Brasileira de Odontologia — Regional Patos de Minas
          </p>
        </div>
      </div>
    </footer>
  );
}
