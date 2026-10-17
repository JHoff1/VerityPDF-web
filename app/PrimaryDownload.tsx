"use client";

import { useEffect, useState } from "react";

const releaseUrl = "https://github.com/JHoff1/VerityPDF/releases/latest";
const microsoftStoreUrl = "https://apps.microsoft.com/detail/9NTJ3VJLH22M?hl=en-us&gl=US&ocid=pdpshare";

type DownloadTarget = {
  href: string;
  label: string;
  showStoreLink: boolean;
};

function detectDownload(version: string) : DownloadTarget {
  const userAgent = navigator.userAgent.toLowerCase();
  const suffix = version ? ` ${version}` : "";

  if (userAgent.includes("linux")) {
    return { href: `${releaseUrl}/download/VerityPDF.AppImage`, label: `Download VerityPDF${suffix} for Linux`, showStoreLink: false };
  }
  if (userAgent.includes("macintosh") || userAgent.includes("mac os")) {
    return { href: `${releaseUrl}/download/VerityPDF.dmg`, label: `Download VerityPDF${suffix} for macOS`, showStoreLink: false };
  }
  if (userAgent.includes("windows")) {
    return { href: `${releaseUrl}/download/VerityPDF.exe`, label: `Download VerityPDF${suffix} for Windows`, showStoreLink: true };
  }
  return { href: releaseUrl, label: "Download latest version", showStoreLink: false };
}

export function PrimaryDownload({ version }: { version: string }) {
  const [target, setTarget] = useState<DownloadTarget>({ href: releaseUrl, label: "Download latest version", showStoreLink: false });

  useEffect(() => setTarget(detectDownload(version)), [version]);

  return (
    <div className="primary-download">
      <a className="button" href={target.href}>{target.label}</a>
      {target.showStoreLink && <a className="store-link" href={microsoftStoreUrl}>Prefer the Microsoft Store? Get VerityPDF from Microsoft →</a>}
    </div>
  );
}
