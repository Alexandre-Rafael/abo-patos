import Image from "next/image";

const parceiros = [
  { nome: "Linkus Contabilidade de Saúde", logo: "/imgs/parceiros/linkus.png" },
  { nome: "Lumiar", logo: "/imgs/parceiros/lumiar.png" },
  { nome: "Ferreira & Souza", logo: "/imgs/parceiros/ferreira-souza.png" },
  { nome: "Pamela Andrade", logo: "/imgs/parceiros/pamela-andrade.png" },
  { nome: "Mariana", logo: "/imgs/parceiros/mariana.png" },
  { nome: "Murilo", logo: "/imgs/parceiros/murilo.png" },
];

export default function Parceiros() {
  return (
    <section
      id="parceiros"
      className="py-14 lg:py-16 border-y"
      style={{
        backgroundColor: "var(--abo-surface-subtle)",
        borderColor: "rgba(10,27,45,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <span
            className="eyebrow"
            style={{ color: "var(--abo-ink-micro)" }}
          >
            Parceiros e Apoiadores
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 lg:gap-x-20">
            {parceiros.map((parceiro) => (
              <div
                key={parceiro.nome}
                className="relative h-24 w-44 lg:h-28 lg:w-52 transition-all duration-200 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                title={parceiro.nome}
              >
                <Image
                  src={parceiro.logo}
                  alt={parceiro.nome}
                  fill
                  sizes="(min-width: 1024px) 208px, 176px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
