"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/screenshots/01-document-workspace.png", label: "Document workspace" },
  { src: "/screenshots/02-annotation-tools.png", label: "Annotation tools" },
  { src: "/screenshots/03-search-and-offline-ocr.png", label: "Search and offline OCR" },
  { src: "/screenshots/04-about-and-privacy.png", label: "Privacy settings" },
];

export function ScreenshotCarousel() {
  const [active, setActive] = useState(0);
  const [remaining, setRemaining] = useState(15);
  const slide = slides[active];
  const show = (index: number) => { setActive((index + slides.length) % slides.length); setRemaining(15); };

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining((current) => {
      if (current > 1) return current - 1;
      setActive((slideIndex) => (slideIndex + 1) % slides.length);
      return 15;
    }), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="carousel" aria-label="VerityPDF application screenshots">
      <div className="carousel-bar"><span>{slide.label}</span><span>{active + 1} / {slides.length}</span></div>
      <img src={slide.src} alt={`${slide.label} in VerityPDF`} />
      <div className="carousel-controls" aria-label="Choose a screenshot">
        <div className="carousel-numbers"><button className="carousel-arrow" type="button" onClick={() => show(active - 1)} aria-label="Show previous screenshot">←</button>{slides.map((item, index) => <button key={item.src} className={index === active ? "active" : ""} type="button" onClick={() => show(index)} aria-label={`Show ${item.label}`} aria-pressed={index === active}>{index + 1}</button>)}<button className="carousel-arrow" type="button" onClick={() => show(active + 1)} aria-label="Show next screenshot">→</button></div>
      </div>
      <div className="carousel-timer" aria-live="polite"><span>{remaining}s</span><i><b style={{ width: `${(remaining / 15) * 100}%`, transition: remaining === 15 ? "none" : "width 1s linear" }} /></i></div>
    </section>
  );
}
