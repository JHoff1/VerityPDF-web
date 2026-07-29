import type { Metadata } from "next";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

const releaseUrl = "https://github.com/JHoff1/VerityPDF/releases/latest";
const repositoryUrl = "https://github.com/JHoff1/VerityPDF";
const downloadUrl = (fileName: string) => `${releaseUrl}/download/${fileName}`;
const privacyUrl = `${repositoryUrl}/blob/main/PRIVACY.md`;
const licenseUrl = `${repositoryUrl}/blob/main/LICENSE`;

export const metadata: Metadata = {
  title: "VerityPDF - Private PDF editing",
  description: "A free, open-source desktop PDF editor that keeps your documents on your device.",
};

export default function Home() {
  return (
    <main className="shell">
      <nav><a className="brand" href="#top"><img src="/app-icon.png" alt="" />VerityPDF</a><div><a href={repositoryUrl}>Source</a><a href={releaseUrl}>Releases</a></div></nav>
      <section className="intro" id="top"><p className="kicker">Private by design · Free and open source</p><h1>VerityPDF keeps PDF editing<br />on your device.</h1><p className="summary">VerityPDF lets you edit, merge, organize, and redact PDFs without cloud uploads, accounts, telemetry, or subscriptions.</p><div className="actions"><a className="button" href={downloadUrl("VerityPDF.exe")}>Download for Windows</a><a className="plain-link" href={repositoryUrl}>View source →</a></div><div className="download" id="downloads"><p>Download for your OS</p><div className="download-links"><a href={downloadUrl("VerityPDF.exe")}>Windows</a><a href={downloadUrl("VerityPDF.dmg")}>macOS</a><a href={downloadUrl("VerityPDF.AppImage")}>AppImage</a><a href={downloadUrl("VerityPDF.deb")}>DEB</a></div></div></section>
      <ScreenshotCarousel />
      <section className="details" aria-label="VerityPDF features"><div className="privacy"><strong>Private, offline, yours.</strong><p>Every document is opened, processed, and saved locally. Nothing is uploaded.</p></div><div className="features"><article><b>Edit</b><span>Reorder, rotate, split, extract, merge, and undo.</span></article><article><b>Redact</b><span>Flatten secure redactions locally before export.</span></article><article><b>Search</b><span>Use local text search and offline OCR for scans.</span></article><article><b>Control</b><span>Clean metadata, local recovery, no paid gates.</span></article></div></section>
      <footer><span>AGPL-3.0</span><span>No cloud. No account. No tracking.</span><div><a href={privacyUrl}>Privacy</a><a href={licenseUrl}>License</a><a href={`${repositoryUrl}/issues`}>Contribute</a></div></footer>
    </main>
  );
}
