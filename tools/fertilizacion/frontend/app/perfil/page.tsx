"use client";

import { useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

const profile = [
  ["Nombre", "Productor de demostración"],
  ["Teléfono", "0000-0000"],
  ["Municipio", "Cuilco"],
  ["Comunidad", "Comunidad de demostración"],
];

export default function ProfilePage() {
  const router = useRouter();

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
            Agyl Agro
          </p>
          <h1 className="text-3xl font-extrabold uppercase leading-tight text-[#163826]">
            MI PERFIL
          </h1>
        </header>

        <section className="space-y-1 rounded-2xl bg-white/70 p-5 shadow-[0_12px_35px_-28px_rgba(31,59,42,0.8)]">
          {profile.map(([label, value]) => (
            <div key={label} className="border-b border-[#dbe6cf] py-4 first:pt-0 last:border-0 last:pb-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#687561]">{label}</p>
              <p className="mt-1 text-base font-semibold text-[#1f3b2a]">{value}</p>
            </div>
          ))}
        </section>
      </main>
      <BottomNavigation />
    </>
  );
}
