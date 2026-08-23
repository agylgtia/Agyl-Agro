"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

export default function ResultPage() { return <Suspense fallback={<main className="min-h-screen bg-[#050706]" />}><ResultContent /></Suspense>; }

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const crop = searchParams.get("crop") || "Maíz";
  const stage = searchParams.get("stage") || "Desarrollo";
  const area = searchParams.get("area") || "2";
  const unit = searchParams.get("unit") || "Cuerda";
  const formattedUnit = formatUnit(unit, area);

  return <div className="app-shell page-enter min-h-screen text-[var(--ink)]"><main className="screen-main mx-auto min-h-screen w-full max-w-2xl px-5 pb-36 pt-6 sm:px-8 sm:pt-8">
    <button type="button" onClick={() => router.push(`/formulario?crop=${encodeURIComponent(crop)}&stage=${encodeURIComponent(stage)}&area=${encodeURIComponent(area)}&unit=${encodeURIComponent(unit)}`)} className="flex min-h-12 items-center gap-2 text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--lime)]"><span className="text-xl" aria-hidden="true">←</span> Corregir datos</button>
    <header className="screen-header mt-7 result-stagger"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--lime)]">Resultado</p><h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Tu recomendación</h1></header>
    <div className="result-demo result-stagger result-stagger-1 mt-8 rounded-xl border border-[#6a572b] bg-[var(--amber-soft)] px-4 py-3 text-sm leading-6 text-[#f1d98e]"><strong>Datos de demostración.</strong> Esta recomendación es parte del prototipo.</div>
    <section className="result-card result-stagger result-stagger-2 mt-5 overflow-hidden rounded-2xl border border-[var(--lime)] bg-[var(--forest)] shadow-[0_0_32px_rgba(168,255,34,0.08)]"><div className="agro-grid p-6 sm:p-8"><div className="flex items-center gap-2 text-sm font-semibold text-[var(--lime)]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--lime)] text-[var(--forest)]" aria-hidden="true">✓</span> Recomendación lista</div><p className="mt-7 text-sm font-semibold text-[#d9e8dc]">Para {area} {formattedUnit} de {crop.toLowerCase()} en {stage.toLowerCase()}:</p><p className="mt-4 text-5xl font-bold leading-none tracking-[-0.05em] text-[var(--lime)] sm:text-7xl">XX</p><p className="mt-2 text-lg font-semibold text-white">unidades</p><p className="mt-5 text-base font-semibold text-[#d9e8dc]">Fertilizante de demostración</p></div><div className="border-t border-white/15 px-6 py-4 text-sm leading-6 text-[#c9d8cd]">La cantidad mostrada es ficticia y sirve únicamente para probar la experiencia.</div></section>
    <section className="result-context surface-panel result-stagger result-stagger-3 mt-6 p-5 sm:p-6"><h2 className="text-base font-bold text-[var(--ink)]">Contexto del cálculo</h2><dl className="mt-5 grid gap-4 sm:grid-cols-3"><SummaryItem label="Cultivo" value={crop} /><SummaryItem label="Etapa" value={stage} /><SummaryItem label="Área" value={`${area} ${formattedUnit}`} /></dl></section>
    <div className="result-actions result-stagger result-stagger-4 mt-8 grid gap-3 sm:grid-cols-2"><button type="button" onClick={() => router.push("/formulario")} className="primary-button px-6 text-base">Hacer otro cálculo</button><button type="button" onClick={() => router.push("/calculos")} className="secondary-button px-6 text-base">Ver mis cálculos</button></div>
  </main><BottomNavigation /></div>;
}

function SummaryItem({ label, value }: { label: string; value: string }) { return <div><dt className="text-sm text-[var(--ink-soft)]">{label}</dt><dd className="mt-1 font-bold text-[var(--ink)]">{value}</dd></div>; }
function formatUnit(unit: string, amount: string) { const normalized = unit.toLowerCase().replace(/s$/, ""); return Number(amount) === 1 ? normalized : `${normalized}s`; }
