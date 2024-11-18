import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ModalProvider } from '@/contexts/modal-context'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Orthotics NOW | Custom Foot Orthotics in Amherstburg, Ontario",
  description: "Expert custom orthotics for foot, knee, hip & back pain. Same-day service available in Amherstburg. Schedule your consultation today: (519) 736-5353",
  openGraph: {
    title: "Orthotics NOW | Custom Foot Orthotics in Amherstburg, Ontario",
    description: "Expert custom orthotics for foot, knee, hip & back pain. Same-day service available in Amherstburg. Schedule your consultation today.",
    url: "https://orthoticsnow.com",
    siteName: "Orthotics NOW",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-auto`}
      >
        <ModalProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-[6rem]">
              {children}
            </main>
            <Footer />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
