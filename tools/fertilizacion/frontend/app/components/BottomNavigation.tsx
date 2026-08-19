"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "INICIO", icon: "⌂" },
  { href: "/calculos", label: "MIS CÁLCULOS", icon: "▣" },
  { href: "/perfil", label: "PERFIL", icon: "○" },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-10 border-t border-[#dbe6cf] bg-[#f5eee0]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur"
      aria-label="Navegación principal"
    >
      <div className="pointer-events-auto mx-auto flex max-w-lg justify-around">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-20 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-semibold ${active ? "text-[#17492d]" : "text-[#687561]"}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="text-xl leading-none" aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
