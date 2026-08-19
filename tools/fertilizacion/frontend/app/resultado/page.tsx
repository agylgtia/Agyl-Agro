"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

export default function ResultPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f5eee0]" />}>
      <ResultContent />
    </Suspense>
  );
}

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const crop = searchParams.get("crop") || "Maíz";
  const stage = searchParams.get("stage") || "Desarrollo";
  const area = searchParams.get("area") || "2";
  const unit = searchParams.get("unit") || "Cuerda";

  return (
    <>
      <main className="mx-auto min-h-screen w-full max-w-lg bg-[#f5eee0] px-5 pb-32 pt-8 text-[#1f3b2a] sm:px-6">
      <button
        type="button"
        onClick={() => router.push("/formulario")}
        className="mb-7 text-sm font-semibold text-[#38573f]"
      >
        ← Volver
      </button>

      <header className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#527256]">
          Resultado
        </p>
        <h1 className="text-3xl font-extrabold uppercase leading-tight text-[#163826]">
          RECOMENDACIÓN
        </h1>
      </header>

      <p className="mb-5 rounded-xl border border-[#c7d8b8] bg-[#eaf1df] px-4 py-3 text-sm font-medium text-[#38573f]">
        Resultado de demostración
      </p>

      <section className="rounded-2xl bg-white/70 p-5 shadow-[0_12px_35px_-28px_rgba(31,59,42,0.8)]">
        <dl className="space-y-4 text-sm">
          <SummaryRow label="Cultivo" value={crop} />
          <SummaryRow label="Etapa" value={stage} />
          <SummaryRow label="Área" value={area} />
          <SummaryRow label="Unidad" value={unit} />
          <SummaryRow label="Fertilizante recomendado" value="Fertilizante de demostración" />
          <SummaryRow label="Cantidad" value="XX unidades" emphasis />
        </dl>
      </section>

      <div className="mt-7 space-y-3">
        <button
          type="button"
          onClick={() => router.push("/formulario")}
          className="w-full rounded-full bg-[#17492d] px-6 py-4 text-base font-bold text-white transition hover:bg-[#133d27]"
        >
          NUEVO CÁLCULO
        </button>
        <button
          type="button"
          onClick={() => router.push("/calculos")}
          className="w-full rounded-full border-2 border-[#17492d] px-6 py-3.5 text-sm font-bold text-[#17492d] transition hover:bg-[#e6eed8]"
        >
          MIS CÁLCULOS
        </button>
      </div>
      </main>
      <BottomNavigation />
    </>
  );
}

function SummaryRow({ label, value, emphasis = false }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-[#dbe6cf] pb-3 last:border-0 last:pb-0">
      <dt className="text-[#687561]">{label}</dt>
      <dd className={`text-right font-semibold ${emphasis ? "text-lg text-[#17492d]" : "text-[#1f3b2a]"}`}>
        {value}
      </dd>
    </div>
  );
}
