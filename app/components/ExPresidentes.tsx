import Image from "next/image";

interface ExPresidente {
  nome: string;
  periodo: string;
  foto?: string;
  atual?: boolean;
  fotoPosicao?: string;
  fotoZoom?: number;
}

const exPresidentes: ExPresidente[] = [
  { nome: "Celso Clarimundo da Fonseca", periodo: "1956–1957", foto: "/imgs/presidentes/celso-fonseca.png", fotoPosicao: "center 28%", fotoZoom: 1.18 },
  { nome: "Cristovão Caixeta de Melo", periodo: "1957–1961 · 1964–1965 · 1969–1971", foto: "/imgs/presidentes/cristovao-melo.png" },
  { nome: "Romero Marques", periodo: "1961–1962", foto: "/imgs/presidentes/romero-marques.png" },
  { nome: "Dirceu Deoclaciano Pacheco", periodo: "1963–1964 · 1975–1979", foto: "/imgs/presidentes/dirceu-pacheco.png" },
  { nome: "Antonio Ferreira Maciel", periodo: "1965–1967", foto: "/imgs/presidentes/antonio-maciel.png" },
  { nome: "José Campos Gonçalves", periodo: "1967–1969", foto: "/imgs/presidentes/jose-goncalves.png" },
  { nome: "Wander de Oliveira", periodo: "1971–1972", foto: "/imgs/presidentes/wander-oliveira.png" },
  { nome: "Tarcísio Fonseca Sobrinho", periodo: "1972–1975", foto: "/imgs/presidentes/tarcisio-sobrinho.png" },
  { nome: "João Batista Alves", periodo: "1979–1983", foto: "/imgs/presidentes/joao-alves.png" },
  { nome: "Acir Vieira Caixeta", periodo: "1983–1985", foto: "/imgs/presidentes/acir-caixeta.png" },
  { nome: "Helio Marques França", periodo: "1985–1987", foto: "/imgs/presidentes/helio-franca.png" },
  { nome: "Elza Maria Arruda Alves", periodo: "1987–1989", foto: "/imgs/presidentes/elza-alves.png" },
  { nome: "José Mauro dos Reis", periodo: "1990–1995", foto: "/imgs/presidentes/jose-reis.png" },
  { nome: "José Jorge Vianna Junior", periodo: "1995–1998", foto: "/imgs/presidentes/jose-vianna.png" },
  { nome: "Augusto Alves de Oliveira", periodo: "1998–2001", foto: "/imgs/presidentes/augusto-oliveira.png" },
  { nome: "Maria Beatriz França", periodo: "2002–2005", foto: "/imgs/presidentes/maria-franca.png" },
  { nome: "Vitorino Domingos Neto", periodo: "2005–2008", foto: "/imgs/presidentes/vitorino-neto.png" },
  { nome: "Carlos Alberto do Prado e Silva", periodo: "2008–2011", foto: "/imgs/presidentes/carlos-silva.png" },
  { nome: "Douglas Magalhães de Paula", periodo: "2012–2015", foto: "/imgs/presidentes/douglas-paula.png" },
  { nome: "Gustavo de Paula Muller Garcia", periodo: "2015–2023", foto: "/imgs/presidentes/gustavo-garcia.png" },
  {
    nome: "Victor da Mota Martins",
    periodo: "2024–2026",
    foto: "/imgs/presidentes/victor.png",
    atual: true,
    fotoPosicao: "center 10%",
    fotoZoom: 2.2,
  },
];

export default function ExPresidentes() {
  return (
    <section
      id="historia"
      className="py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--abo-surface-subtle)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--abo-accent)" }}
            />
            <span className="eyebrow" style={{ color: "var(--abo-accent)" }}>
              Nossa História
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
              Décadas de
            </span>{" "}
            liderança odontológica.
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--abo-ink-secondary)" }}
          >
            Cada gestão construiu um capítulo da história da ABO Patos de Minas.
            Reconhecemos todos que dedicaram seu tempo à nossa classe.
          </p>
        </div>

        {/* Quadro coletivo */}
        <div
          className="relative rounded-card overflow-hidden aspect-[16/7] w-full mb-12"
          style={{ boxShadow: "0 16px 48px rgba(10,27,45,0.14)" }}
        >
          <Image
            src="/imgs/quadros-presidentes.jpg"
            alt="Quadro dos ex-presidentes da ABO Patos de Minas"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Timeline com fotos */}
        <div
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(1,55,117,0.20) transparent",
          }}
        >
          {exPresidentes.map((pres, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 flex-shrink-0 snap-start"
              style={{ width: "140px" }}
            >
              <div
                className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-2 flex items-center justify-center"
                style={{
                  backgroundColor: pres.atual
                    ? "var(--abo-accent)"
                    : "var(--abo-surface-page)",
                  borderColor: pres.atual
                    ? "var(--abo-accent)"
                    : "rgba(1,55,117,0.15)",
                  boxShadow: pres.atual
                    ? "0 0 0 4px rgba(1,55,117,0.15)"
                    : "0 2px 8px rgba(10,27,45,0.08)",
                }}
              >
                {pres.foto ? (
                  <Image
                    src={pres.foto}
                    alt={pres.nome}
                    fill
                    sizes="88px"
                    className="object-cover"
                    style={{
                      objectPosition: pres.fotoPosicao ?? "center 20%",
                      transform: pres.fotoZoom ? `scale(${pres.fotoZoom})` : undefined,
                    }}
                  />
                ) : (
                  <span style={{ fontSize: 24, opacity: 0.35 }}>👤</span>
                )}
              </div>

              <div className="text-center">
                <p
                  className="text-xs font-semibold leading-tight"
                  style={{
                    color: pres.atual
                      ? "var(--abo-accent)"
                      : "var(--abo-ink-body)",
                  }}
                >
                  {pres.nome}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--abo-ink-micro)" }}
                >
                  {pres.periodo}
                </p>
                {pres.atual && (
                  <span
                    className="inline-block mt-1 px-2 py-0.5 rounded-badge text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--abo-accent)",
                      color: "white",
                      fontSize: "10px",
                    }}
                  >
                    Atual
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-xs"
          style={{ color: "var(--abo-ink-micro)" }}
        >
          Registros históricos da ABO Patos de Minas desde 1956.
        </p>
      </div>
    </section>
  );
}
