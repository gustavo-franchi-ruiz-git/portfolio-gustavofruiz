import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Franchi Ruiz | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Gustavo Franchi Ruiz, desenvolvedor full stack com experiência em sistemas corporativos, integrações, workflows e aplicações para empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
