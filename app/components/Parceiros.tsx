// [ASSET EXTERNO] — Substituir placeholders pelos logos reais dos parceiros (PNG transparente ou SVG)

const parceiros = [
  { nome: "Parceiro 1", sigla: "P1" },
  { nome: "Parceiro 2", sigla: "P2" },
  { nome: "Parceiro 3", sigla: "P3" },
  { nome: "Parceiro 4", sigla: "P4" },
  { nome: "Parceiro 5", sigla: "P5" },
  { nome: "Parceiro 6", sigla: "P6" },
];

export default function Parceiros() {
  return (
    <section
      id="parceiros"
      className="py-8 border-y"
      style={{
        backgroundColor: "var(--abo-surface-subtle)",
        borderColor: "rgba(10,27,45,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Label */}
          <span
            className="eyebrow flex-shrink-0"
            style={{ color: "var(--abo-ink-micro)" }}
          >
            Parceiros e Apoiadores
          </span>

          {/* Linha divisória */}
          <div
            className="hidden sm:block w-px h-8 flex-shrink-0"
            style={{ backgroundColor: "rgba(10,27,45,0.10)" }}
          />

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 flex-1">
            {parceiros.map((parceiro, i) => (
              <div
                key={i}
                className="flex items-center gap-2 transition-all duration-200 opacity-50 hover:opacity-100 cursor-default"
                title={parceiro.nome}
              >
                {/* [ASSET EXTERNO] — substituir por <Image src="/parceiros/parceiro-n.svg" /> */}
                <div
                  className="w-20 h-8 rounded-subtle flex items-center justify-center text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(10,27,45,0.06)",
                    color: "var(--abo-ink-secondary)",
                  }}
                >
                  {parceiro.sigla}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
