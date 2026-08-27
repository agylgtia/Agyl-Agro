"use client";

import Link from "next/link";
import Topography from "./components/Topography";

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
          <div
            className="pointer-events-none agro-grid relative mt-12 min-h-64 overflow-hidden rounded-2xl border border-[var(--line)] bg-black sm:mt-0 sm:min-h-80"
                        aria-hidden="true"
>
          <div className="absolute inset-0">
         <Topography />
         </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
        </section>

        <footer className="border-t border-[var(--line)] pt-5 text-sm text-[var(--ink-soft)]">Una herramienta. Un problema. Una solución útil.</footer>
      </div>
    </main>
  );
}

