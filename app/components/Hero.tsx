"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.78, ease: EASE, delay },
  };
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-[72px] flex items-center overflow-hidden"
      style={{ backgroundColor: "#020905" }}
    >
      {/* ─── Video — slow cinematic zoom ─── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/imgs/fachada.jpg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{
          opacity: 0.40,
          filter: "blur(0.8px) brightness(0.88) contrast(1.06) saturate(0.92)",
          animation: "heroBgZoom 30s ease-in-out infinite alternate",
          transformOrigin: "55% 50%",
        }}
        aria-hidden="true"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>

      {/* ─── Layer 1: Cinematic left-to-right gradient ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(108deg, rgba(2,8,4,0.96) 0%, rgba(2,8,4,0.84) 28%, rgba(2,8,4,0.56) 55%, rgba(2,8,4,0.10) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Layer 2: Bottom vignette ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(2,8,4,0.72) 0%, transparent 30%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Layer 3: Top edge ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,8,4,0.50) 0%, transparent 20%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Layer 4: Atmospheric green glow — right ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 42%, rgba(26,107,42,0.13) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Layer 5: Subtle left accent glow ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at -5% 50%, rgba(26,107,42,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-0">
        <div className="max-w-[700px] flex flex-col gap-8 lg:gap-9">

          {/* Eyebrow */}
          <motion.div
            {...fadeUp(0.18)}
            className="flex items-center gap-3"
          >
            <div
              className="hidden sm:block w-10 h-px flex-shrink-0"
              style={{ background: "linear-gradient(90deg, rgba(127,209,148,0.70), transparent)" }}
            />
            <span
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.17em",
                textTransform: "uppercase",
                color: "rgba(127,209,148,0.75)",
              }}
            >
              Associação Brasileira de Odontologia · Patos de Minas
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.32)}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(3.25rem, 8vw, 7rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "#7FD194",
                marginBottom: "0.06em",
              }}
            >
              Excelência
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontWeight: 800,
                fontSize: "clamp(2.6rem, 6.4vw, 5.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#FFFFFF",
              }}
            >
              em Formação
              <br className="hidden xs:block" />
              {" "}Odontológica.
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            {...fadeUp(0.44)}
            className="flex items-center gap-4"
          >
            <div
              className="h-px w-10"
              style={{ backgroundColor: "rgba(127,209,148,0.45)" }}
            />
            <motion.p
              style={{
                fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                lineHeight: 1.75,
                color: "rgba(210,228,215,0.68)",
                fontWeight: 400,
                maxWidth: "480px",
              }}
            >
              Cursos de atualização, aperfeiçoamento, especialização
              e imersões práticas para cirurgiões-dentistas que buscam
              evolução contínua.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.58)}
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Primary — green premium */}
            <a
              href="https://wa.me/5534997890123"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[3px]"
              style={{
                borderRadius: "13px",
                background:
                  "linear-gradient(140deg, #1E8038 0%, #145C29 100%)",
                border: "1px solid rgba(127,209,148,0.28)",
                boxShadow:
                  "0 0 36px rgba(26,107,42,0.38), 0 8px 24px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.14)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com a ABO no WhatsApp
            </a>

            {/* Secondary — dark glass */}
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-[3px]"
              style={{
                borderRadius: "13px",
                color: "rgba(255,255,255,0.82)",
                background: "rgba(255,255,255,0.045)",
                border: "1px solid rgba(255,255,255,0.13)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.20)",
              }}
            >
              Conhecer os cursos
              <ChevronDown size={14} strokeWidth={2} />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.72)}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1"
          >
            {[
              { value: "7", label: "programas" },
              { value: "Desde 1956", label: "" },
              { value: "CRO-MG", label: "reconhecido" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && (
                  <div
                    className="w-px h-3.5"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  />
                )}
                <div className="flex items-baseline gap-1.5">
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "rgba(127,209,148,0.90)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {stat.value}
                  </span>
                  {stat.label && (
                    <span
                      style={{
                        fontSize: "0.625rem",
                        color: "rgba(255,255,255,0.36)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.22)",
            fontWeight: 500,
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          <ChevronDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* ─── Keyframe: slow cinematic zoom ─── */}
      <style>{`
        @keyframes heroBgZoom {
          0%   { transform: scale(1.00); }
          100% { transform: scale(1.07); }
        }
      `}</style>
    </section>
  );
}
