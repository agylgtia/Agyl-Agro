"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [{ href: "/", label: "Inicio", icon: "home" }, { href: "/calculos", label: "Mis cálculos", icon: "list" }, { href: "/perfil", label: "Perfil", icon: "user" }];

export default function BottomNavigation() {
  const pathname = usePathname();
  return <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-10 border-t border-[var(--line)] bg-[rgba(5,7,6,0.94)] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur" aria-label="Navegación principal"><div className="pointer-events-auto mx-auto grid max-w-2xl grid-cols-3 gap-2">{items.map((item) => { const active = pathname === item.href; return <Link key={item.href} href={item.href} className={`relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-semibold transition active:translate-y-px ${active ? "bg-[var(--lime-soft)] text-[var(--lime)]" : "text-[var(--ink-soft)] hover:bg-[var(--surface-raised)] hover:text-[var(--ink)]"}`} aria-current={active ? "page" : undefined}><NavIcon name={item.icon} />{item.label}{active && <span className="nav-active-indicator absolute bottom-1 h-1 w-5 rounded-full bg-[var(--lime)]" aria-hidden="true" />}</Link>; })}</div></nav>;
}

function NavIcon({ name }: { name: string }) {
  if (name === "home") return <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></svg>;
  if (name === "list") return <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" /></svg>;
  return <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
}
