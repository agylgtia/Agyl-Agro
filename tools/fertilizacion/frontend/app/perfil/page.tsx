"use client";

import { useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

const profile = [["Nombre", "Productor de demostración"], ["Teléfono", "0000-0000"], ["Municipio", "Cuilco"], ["Comunidad", "Comunidad de demostración"]];

export default function ProfilePage() {
  const router = useRouter();
  return <div className="app-shell page-enter min-h-screen text-[var(--ink)]"><main className="screen-main mx-auto min-h-screen w-full max-w-2xl px-5 pb-36 pt-6 sm:px-8 sm:pt-8">
    <button type="button" onClick={() => router.push("/")} className="flex min-h-12 items-center gap-2 text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--lime)]"><span className="text-xl" aria-hidden="true">←</span> Inicio</button>
    <header className="screen-header mt-7"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--lime)]">Agyl Agro</p><h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Mi perfil</h1></header>
    <section className="profile-panel surface-panel mt-8 overflow-hidden"><div className="flex items-center gap-4 border-b border-[var(--line)] bg-[var(--forest)] p-5 sm:p-6"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--lime)] text-lg font-bold text-[#091007]">PD</div><div><h2 className="font-bold text-white">Productor de demostración</h2><p className="mt-1 text-sm text-[#c9d8cd]">Perfil de prueba</p></div></div><dl className="p-5 sm:p-6">{profile.map(([label, value]) => <div key={label} className="border-b border-[var(--line)] py-4 first:pt-0 last:border-0 last:pb-0"><dt className="text-sm text-[var(--ink-soft)]">{label}</dt><dd className="mt-1 font-semibold text-[var(--ink)]">{value}</dd></div>)}</dl></section>
    <div className="profile-note mt-6 flex items-start gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--ink-soft)]"><span className="font-bold text-[var(--lime)]" aria-hidden="true">i</span><p>Los datos mostrados pertenecen al prototipo y no representan una cuenta real.</p></div>
  </main><BottomNavigation /></div>;
}
