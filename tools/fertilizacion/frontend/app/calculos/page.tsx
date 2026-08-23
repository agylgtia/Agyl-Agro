"use client";

import { useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

const sampleCalculations = [
  { crop: "Maíz", stage: "Desarrollo", area: "2", unit: "cuerdas", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=320&q=70" },
  { crop: "Café", stage: "Floración", area: "1", unit: "manzana", image: "https://plus.unsplash.com/premium_photo-1666976504656-75eca1e9aaf5?q=80&w=320&auto=format&fit=crop" },
  { crop: "Frijol", stage: "Siembra", area: "3", unit: "cuerdas", image: "https://images.unsplash.com/photo-1639947219179-bb0357b8856a?auto=format&fit=crop&w=320&q=70" },
];

export default function CalculationsPage() {
  const router = useRouter();
  return <div className="app-shell page-enter min-h-screen text-[var(--ink)]"><main className="screen-main mx-auto min-h-screen w-full max-w-2xl px-5 pb-36 pt-6 sm:px-8 sm:pt-8">
    <button type="button" onClick={() => router.push("/")} className="flex min-h-12 items-center gap-2 text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--lime)]"><span className="text-xl" aria-hidden="true">←</span> Inicio</button>
    <header className="screen-header mt-7"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--lime)]">Tu actividad</p><h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Mis cálculos</h1><p className="mt-3 text-base leading-7 text-[var(--ink-soft)]">Consulta tus recomendaciones de demostración.</p></header>
    <div className="calc-list mt-8 space-y-3">{sampleCalculations.map((item) => <button key={`${item.crop}-${item.stage}`} type="button" onClick={() => router.push(`/resultado?crop=${encodeURIComponent(item.crop)}&stage=${encodeURIComponent(item.stage)}&area=${item.area}&unit=${encodeURIComponent(item.unit)}`)} className="calc-record surface-panel flex min-h-28 w-full items-center gap-4 p-4 text-left transition hover:border-[var(--lime)] active:translate-y-px sm:p-5"><img src={item.image} alt={`Cultivo de ${item.crop}`} className="h-16 w-16 shrink-0 rounded-lg object-cover" /><span className="min-w-0 flex-1"><span className="flex items-center gap-2"><span className="truncate text-lg font-bold text-[var(--ink)]">{item.crop}</span><span className="text-[var(--lime)]" aria-hidden="true">•</span></span><span className="mt-2 block text-sm text-[var(--ink-soft)]">{item.stage} · {item.area} {item.unit}</span><span className="mt-3 block text-xs font-bold uppercase tracking-[0.1em] text-[var(--amber)]">Registro de demostración</span></span><span className="text-xl font-semibold text-[var(--lime)]" aria-hidden="true">→</span></button>)}</div>
  </main><BottomNavigation /></div>;
}
