import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Guilherme Ramos — Dev Portfolio",
  description:
    "Portfólio de Guilherme Ramos Nepomuceno — Desenvolvedor Full-Stack especializado em React, Node.js e arquiteturas modernas.",
  keywords: ["developer", "portfolio", "react", "nodejs", "typescript", "Laravel", "PHP", "fullstack"],
  authors: [{ name: "Guilherme Ramos Nepomuceno" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Guilherme Ramos — Dev Portfolio",
    description: "Full-Stack Developer | React · Node.js · TypeScript",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
