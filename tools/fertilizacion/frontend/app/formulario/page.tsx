"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

const crops = ["Maíz", "Frijol", "Café", "Tomate"];
const stages = ["Siembra", "Desarrollo", "Floración", "Fructificación"];
const units = ["Cuerda", "Manzana", "Hectárea"];

export default function FertilizationForm() {
  const router = useRouter();
  const [crop, setCrop] = useState(crops[0]);
  const [stage, setStage] = useState(stages[1]);
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState(units[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({ crop, stage, area, unit });
    router.push(`/resultado?${params.toString()}`);
  }

  return (
    <>
      <main className="mx-auto min-h-screen w-full max-w-lg bg-[#f5eee0] px-5 pb-32 pt-8 text-[#1f3b2a] sm:px-6">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="mb-7 text-sm font-semibold text-[#38573f]"
      >
        ← Volver
      </button>

      <header className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#527256]">
          Agyl Agro / Fertilización
        </p>
        <h1 className="text-3xl font-extrabold uppercase leading-tight text-[#163826]">
          Nuevo cálculo
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Cultivo">
          <select value={crop} onChange={(event) => setCrop(event.target.value)} className="form-control" required>
            {crops.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>

        <Field label="Etapa">
          <select value={stage} onChange={(event) => setStage(event.target.value)} className="form-control" required>
            {stages.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>

        <div className="grid grid-cols-[1fr_1.25fr] gap-3">
          <Field label="Área sembrada">
            <input
              type="number"
              min="0.1"
              step="any"
              inputMode="decimal"
              value={area}
              onChange={(event) => setArea(event.target.value)}
              className="form-control"
              placeholder="Ej. 2"
              required
            />
          </Field>

          <Field label="Unidad">
            <select value={unit} onChange={(event) => setUnit(event.target.value)} className="form-control" required>
              {units.map((option) => <option key={option}>{option}</option>)}
            </select>
          </Field>
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-[#17492d] px-6 py-4 text-base font-bold text-white shadow-[0_16px_40px_-20px_rgba(23,73,45,0.9)] transition hover:bg-[#133d27]"
        >
          CALCULAR
        </button>
      </form>
      </main>
      <BottomNavigation />
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-[#38573f]">
      <span className="mb-2 block">{label}</span>
      {children}
    </label>
  );
}
