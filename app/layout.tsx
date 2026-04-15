import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OKOUME CONNECT | Où votre vision rencontre nos solutions",
  description:
    "OKOUMÉ CONNECT est une société d'intermédiation commerciale qui crée des passerelles solides entre fournisseurs et acheteurs, avec un accompagnement sur mesure pour chaque partenaire — des PME locales aux grandes multinationales. Nous aidons également les entreprises en manque de moyens financiers à obtenir des crédits auprès des institutions financières, renforçant ainsi leur capacité opérationnelle.",
  keywords: [
    "okoume",
    "okoume connect",
    "gabon",
    "intermédiation commerciale",
    "fournisseur",
    "acheteur",
    "accompagnement",
    "pme",
    "multinationale",
    "crédit",
    "institution financière",
  ],
  authors: [
    {
      name: "Wemi Labs Ltd ",
      url: "https://lisham.dev/",
    },
  ],
  creator: "Wemi Labs Ltd",
  metadataBase: new URL("https://okoumeconnect.com/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://okoumeconnect.com/",
    title: "OKOUME CONNECT | Où votre vision rencontre nos solutions",
    description:
      "OKOUMÉ CONNECT est une société d'intermédiation commerciale qui crée des passerelles solides entre fournisseurs et acheteurs, avec un accompagnement sur mesure pour chaque partenaire — des PME locales aux grandes multinationales. Nous aidons également les entreprises en manque de moyens financiers à obtenir des crédits auprès des institutions financières, renforçant ainsi leur capacité opérationnelle.",
    siteName: "OKOUME CONNECT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OKOUME CONNECT | Où votre vision rencontre nos solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OKOUME CONNECT | Où votre vision rencontre nos solutions",
    description:
      "OKOUMÉ CONNECT est une société d'intermédiation commerciale qui crée des passerelles solides entre fournisseurs et acheteurs, avec un accompagnement sur mesure pour chaque partenaire — des PME locales aux grandes multinationales. Nous aidons également les entreprises en manque de moyens financiers à obtenir des crédits auprès des institutions financières, renforçant ainsi leur capacité opérationnelle.",
    // images: [GENERAL_BRANDING_IMG_URL],
    creator: "@mthlish",
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  const { children } = props;
  return (
    <html
      lang="fr"
      className={`${geistSans.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
