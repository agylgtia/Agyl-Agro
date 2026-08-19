"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Screen = "home" | "form" | "result" | "calculations" | "profile";

type Calculation = {
  crop: string;
  stage: string;
  area: string;
  unit: string;
};

const initialCalculation: Calculation = {
  crop: "Maíz",
  stage: "Desarrollo",
  area: "",
  unit: "Cuerda",
};

const sampleCalculations: Calculation[] = [
  { crop: "Maíz", stage: "Desarrollo", area: "2", unit: "Cuerdas" },
  { crop: "Café", stage: "Floración", area: "1", unit: "Manzana" },
  { crop: "Frijol", stage: "Siembra", area: "3", unit: "Cuerdas" },
];

const navItems: { id: Screen; label: string; icon: string }[] = [
  { id: "home", label: "Inicio", icon: "⌂" },
  { id: "calculations", label: "Mis cálculos", icon: "▣" },
  { id: "profile", label: "Perfil", icon: "○" },
];

export default function Home() {
  const router = useRouter();
  const [screen, setScreen] = useState<Screen>("home");
  const [calculation, setCalculation] = useState(initialCalculation);

  function openForm() {
    router.push("/formulario");
  }

  function calculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setScreen("result");
  }

  return (
    <div className="relative min-h-screen bg-[#f5eee0] text-[#1f3b2a] font-sans">
      {screen === "home" ? (
        <HomeScreen onStart={openForm} />
      ) : (
        <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col px-5 pb-24 pt-8 sm:px-6">
          {screen === "form" && (
            <CalculationForm
              calculation={calculation}
              onChange={setCalculation}
              onSubmit={calculate}
              onBack={() => setScreen("home")}
            />
          )}
          {screen === "result" && (
            <ResultScreen
              calculation={calculation}
              onNewCalculation={openForm}
              onCalculations={() => setScreen("calculations")}
            />
          )}
          {screen === "calculations" && <CalculationsScreen />}
          {screen === "profile" && <ProfileScreen />}
        </div>
      )}

      {screen !== "home" && (
        <BottomNavigation activeScreen={screen} onNavigate={setScreen} />
      )}
    </div>
  );
}

function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-lg flex-col justify-between px-6 py-8">
      <div className="flex flex-col items-center gap-6 pt-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#38573f]">
          AGYL AGRO
        </p>
        <h1 className="max-w-[18rem] text-5xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#163826] sm:text-6xl">
          FERTILIZACIÓN
        </h1>
        <p className="max-w-[22rem] text-sm leading-6 text-[#4f5b48]">
          Calcula qué fertilizante necesitas y cuánto aplicar según tu cultivo.
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-4 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#17492d] px-6 py-4 text-base font-semibold text-white shadow-[0_16px_40px_-20px_rgba(23,73,45,0.9)] transition hover:bg-[#133d27]"
        >
          COMENZAR
        </button>
      </div>

      <div className="mt-10 h-40 w-full overflow-hidden">
        <svg
          className="pointer-events-none absolute bottom-0 left-0 h-full w-full"
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,200 C240,180 420,240 680,210 C900,185 1060,180 1200,200 L1200,320 L0,320 Z" fill="#e6eed8" />
          <path d="M0,230 C240,210 420,270 680,240 C900,215 1060,210 1200,230 L1200,320 L0,320 Z" fill="#dbe6cf" />
          <path d="M0,255 C220,240 470,290 720,260 C930,240 1080,230 1200,250 L1200,320 L0,320 Z" fill="#bad09d" />
          <path d="M0,280 C260,260 520,310 760,280 C960,255 1060,250 1200,270 L1200,320 L0,320 Z" fill="#154b28" />
        </svg>
      </div>

      <footer className="relative py-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#5a6654]">
        Propiedad intelectual de AGYL GT.IA
      </footer>
    </main>
  );
}

function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="mb-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#527256]">{eyebrow}</p>
      <h1 className="text-3xl font-extrabold uppercase leading-tight text-[#163826]">{title}</h1>
    </header>
  );
}

function CalculationForm({
  calculation,
  onChange,
  onSubmit,
  onBack,
}: {
  calculation: Calculation;
  onChange: (value: Calculation) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}) {
  return (
    <>
      <button type="button" onClick={onBack} className="mb-7 self-start text-sm font-semibold text-[#38573f]">← Volver</button>
      <PageHeader eyebrow="Agyl Agro / Fertilización" title="Nuevo cálculo" />
      <form onSubmit={onSubmit} className="space-y-5">
        <Field label="Cultivo">
          <select value={calculation.crop} onChange={(event) => onChange({ ...calculation, crop: event.target.value })} className="form-control" required>
            {['Maíz', 'Frijol', 'Café', 'Tomate'].map((crop) => <option key={crop}>{crop}</option>)}
          </select>
        </Field>
        <Field label="Etapa del cultivo">
          <select value={calculation.stage} onChange={(event) => onChange({ ...calculation, stage: event.target.value })} className="form-control" required>
            {['Siembra', 'Desarrollo', 'Floración', 'Fructificación'].map((stage) => <option key={stage}>{stage}</option>)}
          </select>
        </Field>
        <div className="grid grid-cols-[1fr_1.25fr] gap-3">
          <Field label="Área sembrada">
            <input type="number" min="0.1" step="any" inputMode="decimal" value={calculation.area} onChange={(event) => onChange({ ...calculation, area: event.target.value })} className="form-control" placeholder="Ej. 2" required />
          </Field>
          <Field label="Unidad">
            <select value={calculation.unit} onChange={(event) => onChange({ ...calculation, unit: event.target.value })} className="form-control" required>
              {['Cuerda', 'Manzana', 'Hectárea'].map((unit) => <option key={unit}>{unit}</option>)}
            </select>
          </Field>
        </div>
        <button type="submit" className="mt-4 w-full rounded-full bg-[#17492d] px-6 py-4 text-base font-bold text-white shadow-[0_16px_40px_-20px_rgba(23,73,45,0.9)] transition hover:bg-[#133d27]">CALCULAR</button>
      </form>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-[#38573f]"><span className="mb-2 block">{label}</span>{children}</label>;
}

function ResultScreen({ calculation, onNewCalculation, onCalculations }: { calculation: Calculation; onNewCalculation: () => void; onCalculations: () => void }) {
  return (
    <>
      <PageHeader eyebrow="Resultado" title="Recomendación" />
      <div className="mb-5 rounded-2xl border border-[#c7d8b8] bg-[#eaf1df] px-4 py-3 text-sm font-medium text-[#38573f]">Resultado simulado para este prototipo.</div>
      <section className="rounded-2xl bg-white/70 p-5 shadow-[0_12px_35px_-28px_rgba(31,59,42,0.8)]">
        <dl className="space-y-4 text-sm">
          <SummaryRow label="Cultivo" value={calculation.crop} />
          <SummaryRow label="Etapa" value={calculation.stage} />
          <SummaryRow label="Área" value={`${calculation.area} ${calculation.unit.toLowerCase()}${calculation.area === '1' ? '' : 's'}`} />
          <SummaryRow label="Fertilizante recomendado" value="Fertilizante de demostración" />
          <SummaryRow label="Cantidad" value="XX unidades" emphasis />
        </dl>
      </section>
      <div className="mt-7 space-y-3">
        <button type="button" onClick={onNewCalculation} className="w-full rounded-full bg-[#17492d] px-6 py-4 text-base font-bold text-white transition hover:bg-[#133d27]">NUEVO CÁLCULO</button>
        <button type="button" onClick={onCalculations} className="w-full rounded-full border-2 border-[#17492d] px-6 py-3.5 text-sm font-bold text-[#17492d] transition hover:bg-[#e6eed8]">MIS CÁLCULOS</button>
      </div>
    </>
  );
}

function SummaryRow({ label, value, emphasis = false }: { label: string; value: string; emphasis?: boolean }) {
  return <div className="flex items-start justify-between gap-5 border-b border-[#dbe6cf] pb-3 last:border-0 last:pb-0"><dt className="text-[#687561]">{label}</dt><dd className={`text-right font-semibold ${emphasis ? 'text-lg text-[#17492d]' : 'text-[#1f3b2a]'}`}>{value}</dd></div>;
}

function CalculationsScreen() {
  return (
    <>
      <PageHeader eyebrow="Agyl Agro" title="Mis cálculos" />
      <div className="space-y-3">
        {sampleCalculations.map((item) => (
          <article key={`${item.crop}-${item.stage}`} className="rounded-2xl bg-white/70 px-5 py-4 shadow-[0_12px_35px_-28px_rgba(31,59,42,0.8)]">
            <div className="flex items-center justify-between gap-4"><h2 className="text-lg font-bold text-[#17492d]">{item.crop}</h2><span className="rounded-full bg-[#e6eed8] px-3 py-1 text-xs font-semibold text-[#527256]">Simulado</span></div>
            <p className="mt-2 text-sm text-[#687561]">{item.stage} · {item.area} {item.unit.toLowerCase()}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function ProfileScreen() {
  const profile = [['Nombre', 'Productor de demostración'], ['Teléfono', '0000-0000'], ['Municipio', 'Cuilco'], ['Comunidad', 'Comunidad de demostración']];
  return (
    <>
      <PageHeader eyebrow="Agyl Agro" title="Mi perfil" />
      <div className="space-y-1 rounded-2xl bg-white/70 p-5 shadow-[0_12px_35px_-28px_rgba(31,59,42,0.8)]">
        {profile.map(([label, value]) => <div key={label} className="border-b border-[#dbe6cf] py-4 first:pt-0 last:border-0 last:pb-0"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#687561]">{label}</p><p className="mt-1 text-base font-semibold text-[#1f3b2a]">{value}</p></div>)}
      </div>
    </>
  );
}

function BottomNavigation({ activeScreen, onNavigate }: { activeScreen: Screen; onNavigate: (screen: Screen) => void }) {
  return <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-[#dbe6cf] bg-[#f5eee0]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur" aria-label="Navegación principal"><div className="mx-auto flex max-w-lg justify-around">{navItems.map((item) => <button key={item.id} type="button" onClick={() => onNavigate(item.id)} className={`flex min-w-20 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-semibold ${activeScreen === item.id ? 'text-[#17492d]' : 'text-[#687561]'}`} aria-current={activeScreen === item.id ? 'page' : undefined}><span className="text-xl leading-none" aria-hidden="true">{item.icon}</span>{item.label}</button>)}</div></nav>;
}
