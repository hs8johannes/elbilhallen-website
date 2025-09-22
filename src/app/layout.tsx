import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Elbilhallen - Din spesialist på elbil",
    template: "%s | Elbilhallen"
  },
  description: "Med Norges mest allsidige kompetanse innen elbil tilbyr vi salg av nye og brukte elbiler, frakt, innbytte, forsikring og finansiering.",
  keywords: ["elbil", "elektrisk bil", "Tesla", "BMW", "Audi", "Volkswagen", "Hyundai", "Polestar", "Sandnes", "Norge", "bilforhandler", "elbilforhandler"],
  authors: [{ name: "Elbilhallen" }],
  creator: "Elbilhallen",
  publisher: "Elbilhallen",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://elbilhallen.no",
    siteName: "Elbilhallen",
    title: "Elbilhallen - Din spesialist på elbil",
    description: "Med Norges mest allsidige kompetanse innen elbil tilbyr vi salg av nye og brukte elbiler, frakt, innbytte, forsikring og finansiering.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elbilhallen - Din spesialist på elbil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elbilhallen - Din spesialist på elbil",
    description: "Med Norges mest allsidige kompetanse innen elbil tilbyr vi salg av nye og brukte elbiler, frakt, innbytte, forsikring og finansiering.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
