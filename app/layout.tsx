import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ABO Patos de Minas — Formação Odontológica de Excelência",
  description:
    "A Associação Brasileira de Odontologia Regional Patos de Minas oferece cursos de atualização, aperfeiçoamento, especialização e imersões práticas para cirurgiões-dentistas. Sua referência em formação odontológica em Patos de Minas - MG.",
  keywords:
    "ABO Patos de Minas, odontologia, cursos odontologia, especialização odontologia, dentística, endodontia, ortodontia, cirurgia oral, ASB",
  openGraph: {
    title: "ABO Patos de Minas — Formação Odontológica de Excelência",
    description:
      "Cursos de atualização, aperfeiçoamento, especialização e imersões para cirurgiões-dentistas em Patos de Minas - MG.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-full antialiased font-body">
        {children}
      </body>
    </html>
  );
}
