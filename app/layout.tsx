import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurelius Legal | Bufete de Abogados Premium",
  description:
    "Aurelius Legal - Bufete de abogados de alto perfil especializado en litigio corporativo, derecho mercantil y asesoramiento legal estratégico.",
  keywords: [
    "abogados",
    "bufete legal",
    "derecho corporativo",
    "litigio",
    "asesoramiento legal",
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://aureliuslegal.com",
    siteName: "Aurelius Legal",
    title: "Aurelius Legal | Bufete de Abogados Premium",
    description:
      "Soluciones legales de excelencia para corporaciones y profesionales.",
    images: [
      {
        url: "https://aureliuslegal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurelius Legal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#050708" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
