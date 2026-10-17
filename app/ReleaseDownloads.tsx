"use client";

import { useEffect, useState } from "react";
import { PrimaryDownload } from "./PrimaryDownload";

const releaseApiUrl =
  "https://api.github.com/repos/JHoff1/VerityPDF/releases/latest";
const releaseUrl = "https://github.com/JHoff1/VerityPDF/releases/latest";
const downloadUrl = (fileName: string) => `${releaseUrl}/download/${fileName}`;

type GitHubRelease = {
  tag_name?: unknown;
};

function formatVersion(tagName: unknown) {
  if (
    typeof tagName !== "string" ||
    !/^v?\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(tagName)
  ) {
    return "";
  }

  return tagName.startsWith("v") ? tagName : `v${tagName}`;
}

export function ReleaseDownloads({ sourceUrl }: { sourceUrl: string }) {
  const [version, setVersion] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadLatestVersion() {
      try {
        const response = await fetch(releaseApiUrl, {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal,
        });
        if (!response.ok) return;

        const release = (await response.json()) as GitHubRelease;
        setVersion(formatVersion(release.tag_name));
      } catch {
        // The direct download links still point to GitHub's latest release.
      }
    }

    void loadLatestVersion();
    return () => controller.abort();
  }, []);

  const versionSuffix = version ? ` ${version}` : "";

  return (
    <>
      <div className="actions">
        <PrimaryDownload version={version} />
        <a className="plain-link" href={sourceUrl}>
          View source →
        </a>
      </div>
      <div className="download" id="downloads">
        <p>Download for your OS</p>
        <div className="download-links">
          <a href={downloadUrl("VerityPDF.exe")}>Windows{versionSuffix}</a>
          <a href={downloadUrl("VerityPDF.dmg")}>macOS{versionSuffix}</a>
          <a href={downloadUrl("VerityPDF.AppImage")}>AppImage{versionSuffix}</a>
          <a href={downloadUrl("VerityPDF.deb")}>DEB{versionSuffix}</a>
        </div>
      </div>
    </>
  );
}
