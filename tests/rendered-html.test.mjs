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
  assert.doesNotMatch(html, />SovereignPDF</i);
  assert.doesNotMatch(html, /SoverignPDF/);
});

test("download links use the rebranded stable release filenames", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /VerityPDF-Setup\.exe/);
  assert.match(page, /VerityPDF\.dmg/);
  assert.match(page, /VerityPDF\.AppImage/);
  assert.match(page, /VerityPDF\.deb/);
  assert.match(page, /JHoff1\/VerityPDF/);
});
