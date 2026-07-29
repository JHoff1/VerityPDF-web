import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL || "https://sovereignpdf.netlify.app"),
  title: "SovereignPDF — Private PDF editing, on your device",
  description: "A free, open-source desktop PDF editor with no cloud uploads, telemetry, accounts, or subscriptions.",
  openGraph: {
    title: "SovereignPDF — Private PDF editing, on your device",
    description: "A free, open-source desktop PDF editor with no cloud uploads, telemetry, accounts, or subscriptions.",
    images: [{ url: "/og.png", width: 1792, height: 930, alt: "SovereignPDF — Private PDF editing, on your device" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SovereignPDF — Private PDF editing, on your device",
    description: "A free, open-source desktop PDF editor with no cloud uploads, telemetry, accounts, or subscriptions.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
