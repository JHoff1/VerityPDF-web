import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("production output carries the VerityPDF brand", async () => {
  const html = await readFile(
    new URL(".next/server/app/index.html", root),
    "utf8",
  );

  assert.match(html, /<title>VerityPDF - Private PDF editing<\/title>/i);
  assert.match(html, /VerityPDF keeps PDF editing/);
  assert.match(html, /No cloud\. No account\. No tracking\./);
  assert.match(html, /https:\/\/www\.veritypdf\.com\/og\.png/);
  assert.doesNotMatch(html, />SovereignPDF</i);
  assert.doesNotMatch(html, /SoverignPDF/);
});

test("download links use the rebranded stable release filenames", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /VerityPDF\.exe/);
  assert.match(page, /VerityPDF\.dmg/);
  assert.match(page, /VerityPDF\.AppImage/);
  assert.match(page, /VerityPDF\.deb/);
  assert.match(page, /JHoff1\/VerityPDF/);
  assert.match(
    page,
    /https:\/\/apps\.microsoft\.com\/detail\/9NTJ3VJLH22M\?hl=en-us&gl=US&ocid=pdpshare/,
  );
  assert.match(
    page,
    /Prefer the Microsoft Store\? Get VerityPDF from Microsoft →/,
  );
  assert.match(page, /Windows\{versionSuffix\}/);
  assert.doesNotMatch(page, /Windows installer\{versionSuffix\}/);
});

test("latest release metadata is refreshed every two hours with a fallback", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  const html = await readFile(
    new URL(".next/server/app/index.html", root),
    "utf8",
  );

  assert.match(
    page,
    /api\.github\.com\/repos\/JHoff1\/VerityPDF\/releases\/latest/,
  );
  assert.match(page, /RELEASE_REVALIDATE_SECONDS = 60 \* 60 \* 2/);
  assert.match(page, /Download latest version/);
  assert.match(
    html,
    /Download (?:VerityPDF v\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)? for Windows|latest version)/,
  );
});
