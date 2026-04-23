import Image from "next/image";

interface Membro {
  nome: string;
  cargo: string;
  lattes?: string;
  foto: string;
}

const diretoria: Membro[] = [
  {
    nome: "Victor da Mota Martins",
    cargo: "Presidente",
    lattes: "https://lattes.cnpq.br/6649569508994402",
    foto: "/imgs/diretoria/victor.jpg",
  },
  {
    nome: "Janaina Rosa Amorim",
    cargo: "Tesoureira",
    lattes: "https://lattes.cnpq.br/6337683179183786",
    foto: "/imgs/diretoria/janaina.jpg",
  },
  {
    nome: "Beatriz Vieira de Paiva",
    cargo: "Secretária",
    lattes: "https://lattes.cnpq.br/4655997612795313",
    foto: "/imgs/diretoria/beatriz.jpg",
  },
  {
    nome: "Stefânia Michelle da Mota",
    cargo: "Diretora de Patrimônio",
    lattes: "https://lattes.cnpq.br/6102374471767755",
    foto: "/imgs/diretoria/stefania.jpg",
  },
  {
    nome: "Thaise Aparecida Lopes",
    cargo: "Diretora de Comunicação",
    lattes: "https://lattes.cnpq.br/8126216263867370",
    foto: "/imgs/diretoria/thaise.jpg",
  },
  {
    nome: "Raquel Amorim Pacheco",
    cargo: "Diretora Social",
    foto: "/imgs/diretoria/raquel.jpg",
  },
];

function CardMembro({ membro }: { membro: Membro }) {
  return (
    <div className="flex flex-col">
      <div
        className="relative rounded-card overflow-hidden aspect-[3/4] mb-4"
        style={{ boxShadow: "0 4px 20px rgba(10,27,45,0.08)" }}
      >
        <Image
          src={membro.foto}
          alt={membro.nome}
          fill
          sizes="(min-width: 1024px) 22vw, 45vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3
          className="font-body font-bold text-base leading-tight"
          style={{ color: "var(--abo-ink-display)" }}
        >
          {membro.nome}
        </h3>

        <p className="eyebrow" style={{ color: "var(--abo-accent)" }}>
          {membro.cargo}
        </p>

        <div
          className="w-8 h-px mt-0.5"
          style={{ backgroundColor: "rgba(1,55,117,0.30)" }}
        />

        {membro.lattes && (
          <a
            href={membro.lattes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium mt-2 transition-all duration-200 hover:gap-2"
            style={{ color: "var(--abo-accent)" }}
          >
            Ver currículo Lattes →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Diretoria() {
  return (
    <section
      id="diretoria"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--abo-surface-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--abo-accent)" }}
            />
            <span className="eyebrow" style={{ color: "var(--abo-accent)" }}>
              Gestão 2024–2026
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
              As pessoas que
            </span>{" "}
            movem a ABO.
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--abo-ink-secondary)" }}
          >
            Nossa diretoria é composta por cirurgiões-dentistas com formação
            acadêmica comprovada e dedicação à classe odontológica regional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {diretoria.map((membro) => (
            <CardMembro key={membro.nome} membro={membro} />
          ))}
        </div>
      </div>
    </section>
  );
}
