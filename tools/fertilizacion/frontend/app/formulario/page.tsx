"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";
import {
  CATEGORIAS_CULTIVOS,
  obtenerCultivosDeCategoria,
  obtenerEtapas,
  obtenerImagenCultivo,
  type CategoriaId,
} from "./catalogo-cultivos";

const units = ["Cuerda", "Manzana", "Hectárea"];
const TOTAL_PASOS = 4;

// Contenido provisional pendiente de validación agronómica.
const fieldTips = [
  "Lleva registro de las aplicaciones realizadas en cada parcela.",
  "Observa las condiciones del suelo antes de realizar una aplicación.",
  "Evita realizar aplicaciones cuando exista riesgo inmediato de lluvia intensa.",
  "Distribuir los insumos de manera uniforme ayuda a mantener un manejo consistente.",
  "Revisa periódicamente el estado general de tu cultivo.",
  "Caminar la parcela con frecuencia ayuda a notar cambios a tiempo.",
  "Mantén tus herramientas limpias y listas antes de trabajar.",
];

export default function FertilizationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [categoria, setCategoria] = useState<CategoriaId | null>(null);
  const [crop, setCrop] = useState("");
  const [stage, setStage] = useState("");
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState(units[0]);
  const [processing, setProcessing] = useState(false);
  const [tip, setTip] = useState(fieldTips[0]);
  const [processingPhase, setProcessingPhase] = useState<"blank" | "tip" | "tip-leave" | "calculating" | "ready">("blank");

  useEffect(() => {
    if (!processing) return;
    const tipTimeout = window.setTimeout(() => setProcessingPhase("tip"), 650);
    const tipLeaveTimeout = window.setTimeout(() => setProcessingPhase("tip-leave"), 4700);
    const calculatingTimeout = window.setTimeout(() => setProcessingPhase("calculating"), 5400);
    const readyTimeout = window.setTimeout(() => setProcessingPhase("ready"), 7600);
    const navigationTimeout = window.setTimeout(() => {
      const params = new URLSearchParams({ crop, stage, area, unit });
      router.push(`/resultado?${params.toString()}`);
    }, 8400);
    return () => {
      window.clearTimeout(tipTimeout);
      window.clearTimeout(tipLeaveTimeout);
      window.clearTimeout(calculatingTimeout);
      window.clearTimeout(readyTimeout);
      window.clearTimeout(navigationTimeout);
    };
  }, [area, crop, processing, router, stage, unit]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTip(fieldTips[Math.floor(Math.random() * fieldTips.length)]);
    setProcessing(true);
  }

  // Al cambiar de categoría, el cultivo y la etapa previos solo se conservan
  // si siguen siendo compatibles con la nueva categoría; de lo contrario se
  // limpian para evitar estados inválidos.
  function handleCategoriaSelect(nextCategoria: CategoriaId) {
    setCategoria(nextCategoria);
    if (!obtenerCultivosDeCategoria(nextCategoria).includes(crop)) {
      setCrop("");
      setStage("");
    } else {
      const etapasValidas = obtenerEtapas(crop);
      setStage((etapaActual) => (etapasValidas.includes(etapaActual) ? etapaActual : etapasValidas[0]));
    }
    setStep(2);
  }

  // Al cambiar de cultivo, la etapa previa solo se conserva si sigue siendo
  // válida para el nuevo cultivo; de lo contrario se reinicia a su primera etapa.
  function handleCropSelect(nextCrop: string) {
    setCrop(nextCrop);
    const etapasValidas = obtenerEtapas(nextCrop);
    setStage((etapaActual) => (etapasValidas.includes(etapaActual) ? etapaActual : etapasValidas[0]));
  }

  if (processing) return <ProcessingScreen tip={tip} phase={processingPhase} />;

  const nombreCategoria = CATEGORIAS_CULTIVOS.find((item) => item.id === categoria)?.nombre ?? "";

  return (<><div className={`app-shell flow-screen min-h-screen text-[var(--ink)] ${step === 1 ? "isolation-screen" : "page-enter"}`}><main className="flow-main mx-auto w-full max-w-2xl px-5 pt-6 sm:px-8 sm:pt-8">
    {step === 1 ? <Link href="/" className="flow-back flex min-h-12 items-center gap-2 text-sm font-bold text-[var(--ink-soft)]"><span className="text-xl" aria-hidden="true">←</span> Inicio</Link> : <button type="button" onClick={() => setStep(step - 1)} className="flow-back flex min-h-12 items-center gap-2 text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--lime)]"><span className="text-xl" aria-hidden="true">←</span> Paso anterior</button>}
    <header className="flow-header mt-7"><div className="flex items-center justify-between text-sm font-semibold text-[var(--ink-soft)]"><span>Nuevo cálculo</span><span>Paso {step} de {TOTAL_PASOS}</span></div><div className="mt-3 flex gap-2" aria-label={`Paso ${step} de ${TOTAL_PASOS}`}>{Array.from({ length: TOTAL_PASOS }, (_, index) => index + 1).map((item) => <span key={item} className={`h-1.5 flex-1 rounded-full ${item <= step ? "progress-active" : "bg-[var(--line)]"}`} />)}</div></header>
    <form onSubmit={handleSubmit} className="flow-form mt-12">
      {step === 1 && <section><h1 className="text-3xl font-bold leading-tight text-[var(--ink)]">¿Qué tipo de cultivo tienes?</h1><p className="mt-4 max-w-lg text-base leading-7 text-[var(--ink-soft)]">Elige una categoría para encontrar tu cultivo más rápido.</p><div className="crop-choice-grid mt-8">{CATEGORIAS_CULTIVOS.map((opcion) => { const selected = categoria === opcion.id; return <button key={opcion.id} type="button" aria-pressed={selected} onClick={() => handleCategoriaSelect(opcion.id)} className={`crop-card ${selected ? "crop-card-selected" : ""}`}><img src={opcion.imagen} alt={`Cultivo de ${opcion.nombre.toLowerCase()}`} /><span className="crop-card-label"><span>{opcion.nombre}</span><span className="crop-card-check" aria-hidden="true">{selected ? "✓" : ""}</span></span></button>; })}</div></section>}
      {step === 2 && categoria && <div className="step-enter"><section><h1 className="text-3xl font-bold leading-tight text-[var(--ink)]">Selecciona tu cultivo</h1><p className="mt-4 max-w-lg text-base leading-7 text-[var(--ink-soft)]">Categoría: {nombreCategoria}. Toca el cultivo que vas a fertilizar.</p><div className="crop-choice-grid mt-8">{obtenerCultivosDeCategoria(categoria).map((option) => { const selected = crop === option; return <button key={option} type="button" aria-pressed={selected} onClick={() => handleCropSelect(option)} className={`crop-card ${selected ? "crop-card-selected" : ""}`}><img src={obtenerImagenCultivo(option)} alt={`Cultivo de ${option.toLowerCase()}`} loading="lazy" /><span className="crop-card-label"><span>{option}</span><span className="crop-card-check" aria-hidden="true">{selected ? "✓" : ""}</span></span></button>; })}</div></section></div>}
      {step === 3 && <div className="step-enter"><StepContent title="¿En qué etapa está el cultivo?" description="Toca el momento actual del cultivo."><ChoiceGroup label="Etapa del cultivo" options={obtenerEtapas(crop)} value={stage} onChange={setStage} /></StepContent></div>}
      {step === 4 && <div className="step-enter"><StepContent title="¿Cuánta área tienes sembrada?" description="Indica el área sobre la que vas a aplicar el fertilizante."><div className="grid gap-5 sm:grid-cols-2"><Field label="Área sembrada"><input type="number" min="0.1" step="any" inputMode="decimal" value={area} onChange={(event) => setArea(event.target.value)} className="form-control" placeholder="Ej. 2" required /></Field><Field label="Unidad"><select value={unit} onChange={(event) => setUnit(event.target.value)} className="form-control" required>{units.map((option) => <option key={option}>{option}</option>)}</select></Field></div></StepContent></div>}
      {step === TOTAL_PASOS ? <button type="submit" className="flow-action primary-button mt-12 w-full px-6 text-base">Calcular recomendación <span className="ml-2" aria-hidden="true">→</span></button> : step > 1 ? <button type="button" onClick={() => setStep(step + 1)} disabled={!crop} className="flow-action primary-button mt-12 w-full px-6 text-base">Continuar <span className="ml-2" aria-hidden="true">→</span></button> : null}
    </form>
  </main></div>{step !== 1 && <BottomNavigation />}</>);
}

function StepContent({ title, description, children }: { title: string; description: string; children: React.ReactNode }) { return <section><h1 className="flow-title max-w-xl text-3xl font-bold leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">{title}</h1><p className="flow-description mt-4 max-w-lg text-base leading-7 text-[var(--ink-soft)]">{description}</p><div className="flow-step-panel surface-panel mt-9 p-5 sm:p-6">{children}</div></section>; }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block text-sm font-semibold text-[var(--ink)]"><span className="mb-2 block">{label}</span>{children}</label>; }

function ChoiceGroup({ label, options, value, onChange }: { label: string; options: readonly string[]; value: string; onChange: (value: string) => void }) { return <fieldset><legend className="mb-3 text-sm font-semibold text-[var(--ink)]">{label}</legend><div className="choice-grid">{options.map((option) => { const selected = value === option; return <button key={option} type="button" aria-pressed={selected} onClick={() => onChange(option)} className={`choice-card ${selected ? "choice-card-selected" : ""}`}><span className="font-semibold">{option}</span><span className="choice-check" aria-hidden="true">{selected ? "✓" : ""}</span></button>; })}</div></fieldset>; }

function ProcessingScreen({ tip, phase }: { tip: string; phase: "blank" | "tip" | "tip-leave" | "calculating" | "ready" }) {
  const showingTip = phase === "tip" || phase === "tip-leave";
  const showingCalculation = phase === "calculating" || phase === "ready";
  return <div className="processing-screen min-h-screen text-[var(--ink)]"><main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-5 py-10 sm:px-8">
    {showingTip && <aside className={`processing-tip surface-panel border-l-4 border-l-[var(--lime)] p-5 text-left ${phase === "tip-leave" ? "processing-tip-leave" : "processing-tip-visible"}`}><p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--lime)]">Consejo de campo</p><p className="mt-4 text-lg leading-8 text-[var(--ink)]">“{tip}”</p><p className="mt-3 text-xs text-[var(--ink-soft)]">Contenido provisional del prototipo.</p></aside>}
    {showingCalculation && <div className={`${phase === "ready" ? "processing-ready" : "processing-calculating"}`}><div className={`processing-field agro-grid p-5 sm:p-8 ${phase === "ready" ? "border-[var(--lime)]" : ""}`}><svg viewBox="0 0 360 180" className="relative z-[1] h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Parcelas agrícolas siendo analizadas"><path className="field-line-muted" d="M-20 148C64 112 112 114 180 143C242 169 285 135 380 92" /><path className="field-line-muted" d="M-20 119C64 83 112 85 180 114C242 140 285 106 380 63" /><path className="field-line" d="M-20 148C64 112 112 114 180 143C242 169 285 135 380 92" /><path className="field-line" d="M-20 89C64 53 112 55 180 84C242 110 285 76 380 33" /><circle className="processing-dot" cx="205" cy="132" r="5" /><circle className="processing-dot" cx="267" cy="101" r="4" style={{ animationDelay: "180ms" }} /><circle className="processing-dot" cx="318" cy="72" r="3" style={{ animationDelay: "360ms" }} /></svg><div className="relative z-[1] mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--lime)]"><span className="h-2 w-2 rounded-full bg-[var(--lime)]" aria-hidden="true" /> Agyl Agro</div></div><div className="mt-8 text-center"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--lime)]">{phase === "ready" ? "✓ Recomendación lista" : "Procesando demostración"}</p><h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">{phase === "ready" ? "Recomendación lista" : "Calculando tu recomendación..."}</h1><p className="mt-4 text-base text-[var(--ink-soft)]">{phase === "ready" ? "Terminamos. Aquí está lo importante." : "Organizando los datos para mostrarte el resultado."}</p></div></div>}
  </main></div>;
}