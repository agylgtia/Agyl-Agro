export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f5eee0] text-[#1f3b2a] font-sans">
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
            className="mt-4 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#17492d] px-6 py-4 text-base font-semibold text-white shadow-[0_16px_40px_-20px_rgba(23,73,45,0.9)] transition hover:bg-[#133d27]"
          >
            COMENZAR
          </button>
        </div>

        <div className="mt-10 h-40 w-full overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 h-full w-full"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,200 C240,180 420,240 680,210 C900,185 1060,180 1200,200 L1200,320 L0,320 Z"
              fill="#e6eed8"
            />
            <path
              d="M0,230 C240,210 420,270 680,240 C900,215 1060,210 1200,230 L1200,320 L0,320 Z"
              fill="#dbe6cf"
            />
            <path
              d="M0,255 C220,240 470,290 720,260 C930,240 1080,230 1200,250 L1200,320 L0,320 Z"
              fill="#bad09d"
            />
            <path
              d="M0,280 C260,260 520,310 760,280 C960,255 1060,250 1200,270 L1200,320 L0,320 Z"
              fill="#154b28"
            />
          </svg>
        </div>

        <footer className="relative py-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#5a6654]">
          Propiedad intelectual de AGYL GT.IA
        </footer>
      </main>
    </div>
  );
}
