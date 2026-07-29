import type { Metadata } from "next";

const releaseUrl = "https://github.com/JHoff1/SoverignPDF/releases/latest";
const repositoryUrl = "https://github.com/JHoff1/SoverignPDF";

export const metadata: Metadata = {
  title: "SovereignPDF — Private PDF editing, on your device",
  description:
    "A free, open-source desktop PDF editor. Edit, redact, merge, and organize documents entirely on your device.",
};

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="SovereignPDF home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>SovereignPDF</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#linux">Linux</a>
          <a href={repositoryUrl}>Source code <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Your documents stay yours</p>
          <h1>PDF editing with<br /><em>nothing to hide.</em></h1>
          <p className="lede">A fast, private, open-source desktop editor. No cloud uploads. No account. No subscription. Just your PDFs, on your device.</p>
          <div className="hero-actions">
            <a className="button primary" href={releaseUrl}>Download for your OS <span aria-hidden="true">↓</span></a>
            <a className="button quiet" href={repositoryUrl}>View source <span aria-hidden="true">↗</span></a>
          </div>
          <p className="release-note">Free forever · AGPL-3.0 · Windows, macOS &amp; Linux</p>
        </div>
        <div className="product-scene" aria-label="SovereignPDF application preview">
          <div className="halo" />
          <div className="app-window">
            <div className="window-bar"><div className="dots"><i /><i /><i /></div><span>Quarterly-report.pdf — SovereignPDF</span><b>⌁</b></div>
            <div className="ribbon"><span className="ribbon-logo">S</span><span>File</span><span className="active-tab">Page edit</span><span>Markup</span><span>Document</span><span>View</span><div className="ribbon-tools"><i>↶</i><i>↷</i><i>⌕</i></div></div>
            <div className="workspace">
              <aside><div className="thumb selected"><div /></div><div className="thumb"><div /></div><div className="thumb"><div /></div></aside>
              <article className="document"><div className="document-top"><span>Q3 / 2026</span><span>PRIVATE</span></div><h2>Quarterly brief</h2><p className="doc-subtitle">Operational highlights and forward-looking notes</p><div className="doc-rule" /><p className="doc-line long" /><p className="doc-line" /><p className="doc-line medium" /><div className="redaction one" /><p className="doc-line long" /><p className="doc-line short" /><div className="redaction two" /><p className="doc-line medium" /></article>
              <div className="tool-float"><span>↖</span><span>▱</span><span>╱</span><span className="selected-tool">▉</span><span>✎</span></div>
            </div>
            <div className="status"><span>1 / 3</span><span>100%</span><span className="safe"><i /> Saved locally</span></div>
          </div>
          <div className="scene-caption"><i /> Every edit stays on your machine</div>
        </div>
      </section>

      <section className="trust shell" aria-label="SovereignPDF privacy promises">
        <div><strong>0</strong><span>cloud uploads</span></div><div><strong>0</strong><span>trackers or telemetry</span></div><div><strong>0</strong><span>paid feature gates</span></div><div><strong>100%</strong><span>local processing</span></div>
      </section>

      <section className="features shell" id="features">
        <div className="section-intro"><p className="eyebrow"><span /> Built for real documents</p><h2>Everything you need.<br />Nothing in the way.</h2></div>
        <div className="feature-grid">
          <article className="feature feature-large"><p className="feature-number">01</p><h3>Edit with confidence</h3><p>Reorder, rotate, duplicate, extract, split, and merge pages with full undo history.</p><div className="mini-pages"><b /><b /><b className="mini-active" /><b /></div></article>
          <article className="feature"><p className="feature-number">02</p><div className="icon-block">▉</div><h3>Redact for real</h3><p>Secure redaction exports are flattened locally, so sensitive text does not travel with your file.</p></article>
          <article className="feature"><p className="feature-number">03</p><div className="icon-block">⌕</div><h3>Find every word</h3><p>Search PDF text and run English OCR entirely offline for scanned pages.</p></article>
          <article className="feature"><p className="feature-number">04</p><div className="icon-block">⌁</div><h3>Own your workflow</h3><p>Offline saving, local recovery, metadata cleanup, and no vendor account in the middle.</p></article>
        </div>
      </section>

      <section className="linux-section" id="linux"><div className="shell linux-inner"><div><p className="eyebrow"><span /> Native Linux release</p><h2>An AppImage should<br />feel this simple.</h2><p className="linux-copy">Download one file, make it executable, and open it. No archive to unpack. No dependency maze. SovereignPDF is also available as a <code>.deb</code>, plus native installers for Windows and macOS.</p><a className="button primary appimage-button" href={releaseUrl}><span className="linux-mark">◒</span> Download as an AppImage <span aria-hidden="true">↓</span></a><p className="file-note">Get the <code>.AppImage</code> directly from the latest release.</p></div><div className="terminal" aria-label="Linux installation steps"><div className="terminal-top"><i /><i /><i /><span>terminal</span></div><code><span className="prompt">$</span> chmod +x SovereignPDF.AppImage<br /><span className="prompt">$</span> ./SovereignPDF.AppImage<br /><br /><span className="success">✓</span> SovereignPDF is ready.</code></div></div></section>

      <section className="open-source shell"><div className="open-grid"><div><p className="eyebrow"><span /> Open by design</p><h2>Software you can inspect.</h2></div><div><p>SovereignPDF is built in the open because privacy claims should be verifiable. Read the code, build it yourself, or help make it better.</p><a className="text-link" href={repositoryUrl}>Explore the repository <span>→</span></a></div></div></section>

      <section className="final-cta shell"><p className="eyebrow"><span /> Your PDFs deserve better</p><h2>Keep your documents<br /><em>under your control.</em></h2><a className="button primary" href={releaseUrl}>Download SovereignPDF <span aria-hidden="true">↓</span></a><p>Free and open source for Windows, macOS, and Linux.</p></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">S</span><span>SovereignPDF</span></a><span>Private PDF editing, on your device.</span><div><a href={repositoryUrl}>GitHub</a><a href="https://github.com/JHoff1/SoverignPDF/blob/main/LICENSE">License</a></div></footer>
    </main>
  );
}
