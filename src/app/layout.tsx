import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://get.rubberfit.app"),
  title: "Rubberfit — Material that lands flat.",
  description:
    "Manufacturing operations for rubber-roll fabricators. A Rust nesting engine plus an AI-augmented planner turn raw stock into operator-grade cut layouts.",
  alternates: {
    canonical: "https://get.rubberfit.app",
  },
  openGraph: {
    title: "Rubberfit — Material that lands flat.",
    description:
      "Manufacturing operations for rubber-roll fabricators. A Rust nesting engine plus an AI-augmented planner turn raw stock into operator-grade cut layouts.",
    url: "https://get.rubberfit.app",
    siteName: "Rubberfit",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rubberfit — Material that lands flat.",
    description:
      "Manufacturing operations for rubber-roll fabricators. A Rust nesting engine plus an AI-augmented planner turn raw stock into operator-grade cut layouts.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} ${mono.variable}`}>
        <div className="rf-grid-bg" aria-hidden="true" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
