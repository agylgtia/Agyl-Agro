"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="app-shell home-screen page-enter min-h-screen text-[var(--ink)]">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-6 sm:px-8 sm:py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--lime)] text-sm font-black text-[#091007]" aria-label="Agyl Agro">AG</div>
            <div><p className="text-sm font-bold tracking-[0.08em] text-[var(--ink)]">AGYL AGRO</p><p className="text-xs text-[var(--ink-soft)]">Herramientas para el campo</p></div>
          </div>
          <span className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-soft)]">Prototipo</span>
        </header>

        <section className="flex flex-1 flex-col justify-center py-16 sm:grid sm:grid-cols-[1.05fr_0.95fr] sm:items-center sm:gap-12 sm:py-20">
          <div>
          <p className="home-reveal home-reveal-1 mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--lime)]">Herramienta de fertilización</p>
          <h1 className="home-reveal home-reveal-2 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">Fertiliza con claridad.</h1>
          <p className="home-reveal home-reveal-2 mt-5 max-w-lg text-lg leading-8 text-[var(--ink-soft)]">Obtén una recomendación sencilla según tu cultivo, etapa y área sembrada.</p>
          <Link href="/formulario" className="home-reveal home-reveal-3 primary-button relative z-10 mt-9 flex w-full touch-manipulation items-center justify-center px-6 text-base sm:w-fit sm:min-w-64">Iniciar cálculo <span className="ml-2" aria-hidden="true">→</span></Link>
          </div>
          <div className="pointer-events-none agro-grid mt-12 flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:mt-0 sm:min-h-80" aria-hidden="true">
            <svg viewBox="0 0 360 260" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="home-field-line" d="M-18 223C57 178 109 183 177 214C241 243 285 203 380 150" stroke="#34443A" strokeWidth="2" />
              <path className="home-field-line" d="M-18 184C57 139 109 144 177 175C241 204 285 164 380 111" stroke="#34443A" strokeWidth="2" />
              <path className="home-field-line" d="M-18 145C57 100 109 105 177 136C241 165 285 125 380 72" stroke="#526A58" strokeWidth="2" />
              <path className="home-field-line" d="M-18 106C57 61 109 66 177 97C241 126 285 86 380 33" stroke="#A8FF22" strokeOpacity=".48" strokeWidth="2" strokeDasharray="8 10" />
              <path d="M197 209C194 175 201 146 220 120C232 104 246 93 264 83" stroke="#A8FF22" strokeWidth="3" strokeLinecap="round" />
              <path d="M220 123C202 122 190 111 189 97C205 97 216 105 220 123ZM239 103C240 87 251 77 265 75C266 90 256 101 239 103Z" fill="#A8FF22" />
              <circle className="home-field-pulse" cx="87" cy="151" r="4" fill="#A8FF22" /><circle className="home-field-pulse" cx="303" cy="105" r="4" fill="#A8FF22" style={{ animationDelay: "2800ms" }} />
            </svg>
          </div>
        </section>

        <footer className="border-t border-[var(--line)] pt-5 text-sm text-[var(--ink-soft)]">Una herramienta. Un problema. Una solución útil.</footer>
      </div>
    </main>
  );
}

