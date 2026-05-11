import { MessageCircle, MapPin, Clock } from "lucide-react";

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--abo-surface-cta)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">

          {/* ── COLUNA ESQUERDA — Texto ── */}
          <div className="flex flex-col gap-6">
            <span
              className="eyebrow"
              style={{ color: "rgba(232,237,242,0.45)" }}
            >
              Pronto para avançar?
            </span>

            <h2
              className="font-body font-extrabold"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--abo-ink-display-dark)",
              }}
            >
              <span
                className="font-display italic block"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Faça parte da
              </span>
              referência em
              <br />
              <span style={{ color: "white" }}>odontologia.</span>
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--abo-ink-secondary-dark)" }}
            >
              Entre em contato pelo WhatsApp e descubra como a ABO Patos de
              Minas pode transformar sua carreira odontológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://wa.me/5534997890123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-badge text-base font-semibold text-white transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--abo-accent)",
                  boxShadow: "0 8px 32px rgba(1,55,117,0.35)",
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Sede — Cursos</span>
              </a>

              <a
                href="https://wa.me/5534998940124"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-badge text-base font-semibold border-2 transition-all duration-150 hover:bg-white/8"
                style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.25)",
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Pacientes</span>
              </a>
            </div>

            <div
              className="flex flex-col gap-2 text-sm mt-4"
              style={{ color: "var(--abo-ink-micro-dark)" }}
            >
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Rua Carajás, 729 — Patos de Minas - MG, 38702-188</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 flex-shrink-0" />
                <span>Seg–Qui: 8h–13h · Sex: 8h–17h (dias de curso) · Sáb: 8h–12h (dias de curso)</span>
              </div>
            </div>
          </div>

          {/* ── COLUNA DIREITA — Mapa ── */}
          <div
            className="relative rounded-card overflow-hidden aspect-[4/3] w-full"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.40)" }}
          >
            <iframe
              title="Localização ABO Patos de Minas"
              src="https://www.google.com/maps?q=Rua+Caraj%C3%A1s+729+Patos+de+Minas+MG+38702-188&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
