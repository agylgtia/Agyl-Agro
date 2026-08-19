"use client";

import { useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

const sampleCalculations = [
  { crop: "Maíz", stage: "Desarrollo", area: "2", unit: "cuerdas" },
  { crop: "Café", stage: "Floración", area: "1", unit: "manzana" },
  { crop: "Frijol", stage: "Siembra", area: "3", unit: "cuerdas" },
];

export default function CalculationsPage() {
  const router = useRouter();

  return (
    <>
      <main className="mx-auto min-h-screen w-full max-w-lg bg-[#f5eee0] px-5 pb-32 pt-8 text-[#1f3b2a] sm:px-6">
      <button
        type="button"
        onClick={() => router.push("/resultado")}
        className="mb-7 text-sm font-semibold text-[#38573f]"
      >
        ← Volver
      </button>

      <header className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#527256]">
          Agyl Agro
        </p>
        <h1 className="text-3xl font-extrabold uppercase leading-tight text-[#163826]">
          MIS CÁLCULOS
        </h1>
      </header>

      <div className="space-y-3">
        {sampleCalculations.map((item) => (
          <article
            key={`${item.crop}-${item.stage}`}
            className="rounded-2xl bg-white/70 px-5 py-4 shadow-[0_12px_35px_-28px_rgba(31,59,42,0.8)]"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-[#17492d]">{item.crop}</h2>
              <span className="rounded-full bg-[#e6eed8] px-3 py-1 text-xs font-semibold text-[#527256]">
                Simulado
              </span>
            </div>
            <p className="mt-2 text-sm text-[#687561]">
              {item.stage} · {item.area} {item.unit}
            </p>
          </article>
        ))}
      </div>
      </main>
      <BottomNavigation />
    </>
  );
}
