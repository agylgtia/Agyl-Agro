"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";
import recomendacionesData from "../../data/recomendaciones.json";

// Tipos derivados del propio JSON: no se modifica la estructura de datos,
// solo se describe para poder tipar la capa de presentación.
type Recomendacion = (typeof recomendacionesData)[number];
type ItemRecomendacion = Recomendacion["items"][number];
type ItemCalculado = ItemRecomendacion & {
  cantidadMinima: number | null;
  cantidadMaxima: number | null;
};
type RecomendacionCalculada = Omit<Recomendacion, "items"> & {
  items: ItemCalculado[];
};

// Nombres visibles para el productor (las palabras internas de la base
// de datos como "Fertilizante" o "ALTERNATIVA" nunca se muestran tal cual).
const TIPO_LABELS: Record<string, string> = {
  Fertilizante: "Fertilización",
  Insecticida: "Control de insectos",
  Herbicida: "Control de malezas",
};

const TIPO_ORDEN: Record<string, number> = {
  Fertilizante: 0,
  Insecticida: 1,
  Herbicida: 2,
};

const RELACION_LABELS: Record<string, string> = {
  "ÚNICO": "Recomendado",
  CONJUNTO: "Usar en conjunto",
  ALTERNATIVA: "Elegí una opción",
  MIXTA: "Recomendación combinada",
  MANEJO: "Manejo del cultivo",
};

export default function ResultPage() { return <Suspense fallback={<main className="min-h-screen bg-[#050706]" />}><ResultContent /></Suspense>; }

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const crop = searchParams.get("crop") || "Maíz";
  const stage = searchParams.get("stage") || "Desarrollo";
  const area = searchParams.get("area") || "2";
  const areaNumber = Number(area);

const recomendaciones = recomendacionesData.filter(
  (recomendacion) =>
    recomendacion.cultivo === crop &&
    recomendacion.etapa === stage,
);

const recomendacionesCalculadas = recomendaciones.map((recomendacion) => ({
  ...recomendacion,
  items: recomendacion.items.map((item) => ({
    ...item,
    cantidadMinima:
      typeof item.dosis_min_cuerda === "number"
        ? areaNumber * item.dosis_min_cuerda
        : null,
    cantidadMaxima:
      typeof item.dosis_max_cuerda === "number"
        ? areaNumber * item.dosis_max_cuerda
        : null,
  })),
}));


  return <div className="app-shell page-enter min-h-screen text-[var(--ink)]"><main className="screen-main mx-auto min-h-screen w-full max-w-2xl px-5 pb-36 pt-6 sm:px-8 sm:pt-8">
    <button type="button" onClick={() => router.push(`/formulario?crop=${encodeURIComponent(crop)}&stage=${encodeURIComponent(stage)}&area=${encodeURIComponent(area)}`)} className="flex min-h-12 items-center gap-2 text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--lime)]"><span className="text-xl" aria-hidden="true">←</span> Corregir datos</button>
    <header className="screen-header mt-7 result-stagger"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--lime)]">Resultado</p><h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Tu recomendación</h1></header>
    <section className="result-context surface-panel result-stagger result-stagger-3 mt-6 p-5 sm:p-6"><h2 className="text-base font-bold text-[var(--ink)]">Contexto del cálculo</h2><dl className="mt-5 grid gap-4 sm:grid-cols-3"><SummaryItem label="Cultivo" value={crop} /><SummaryItem label="Etapa" value={stage} /><SummaryItem label="Área" value={`${area} ${Number(area) === 1 ? "cuerda" : "cuerdas"}`} /></dl></section>
    <section className="mt-8 space-y-5">
  {recomendacionesCalculadas.map((recomendacion) => (
    <article
      key={recomendacion.id}
      className="surface-panel p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--lime)]">
            {recomendacion.tipo_insumo}
          </p>
          <h2 className="mt-2 text-xl font-bold text-[var(--ink)]">
            {recomendacion.recomendacion_original}
          </h2>
        </div>

        <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-bold text-[var(--ink-soft)]">
          {recomendacion.relacion}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {recomendacion.items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[var(--line)] p-4"
          >
            <h3 className="font-bold text-[var(--ink)]">
              {item.producto_texto}
            </h3>

            {item.cantidadMinima !== null &&
              item.cantidadMaxima !== null &&
              item.unidad_dosis &&
              item.tipo_calculo !== "ninguno" && (
                <p className="mt-2 text-lg font-bold text-[var(--lime)]">
                  {item.cantidadMinima === item.cantidadMaxima
                    ? `${item.cantidadMinima} ${item.unidad_dosis.replace("/cuerda", "")}`
                    : `${item.cantidadMinima} – ${item.cantidadMaxima} ${item.unidad_dosis.replace("/cuerda", "")}`}
                </p>
              )}

            {item.explicacion_funcional && (
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                {item.explicacion_funcional}
              </p>
            )}

            {item.forma_aplicacion && (
              <p className="mt-3 text-sm text-[var(--ink-soft)]">
                <strong>Aplicación:</strong> {item.forma_aplicacion}
              </p>
            )}

            {item.frecuencia_aplicaciones && (
              <p className="mt-1 text-sm text-[var(--ink-soft)]">
                <strong>Frecuencia:</strong> {item.frecuencia_aplicaciones}
              </p>
            )}
          </div>
        ))}
      </div>

      {recomendacion.relacion === "ALTERNATIVA" && (
        <p className="mt-4 text-sm font-semibold text-[var(--ink-soft)]">
          Elegí una de las alternativas. No se suman las dosis.
        </p>
      )}

      {(recomendacion.relacion === "CONJUNTO" ||
        recomendacion.relacion === "MIXTA") && (
        <p className="mt-4 text-sm font-semibold text-[var(--ink-soft)]">
          Calculá cada componente por separado. Esto no significa que deban mezclarse físicamente.
        </p>
      )}
    </article>
  ))}
</section>
    <div className="result-actions result-stagger result-stagger-4 mt-8 grid gap-3 sm:grid-cols-2"><button type="button" onClick={() => router.push("/formulario")} className="primary-button px-6 text-base">Hacer otro cálculo</button><button type="button" onClick={() => router.push("/calculos")} className="secondary-button px-6 text-base">Ver mis cálculos</button></div>
  </main><BottomNavigation /></div>;
}

function SummaryItem({ label, value }: { label: string; value: string }) { return <div><dt className="text-sm text-[var(--ink-soft)]">{label}</dt><dd className="mt-1 font-bold text-[var(--ink)]">{value}</dd></div>; }
