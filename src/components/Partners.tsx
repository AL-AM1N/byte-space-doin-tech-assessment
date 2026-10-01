function Logo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[#5A6474] hover:text-gray-900 transition-colors">
      <svg
        aria-hidden="true"
        focusable="false"
        className="w-8 h-8 fill-current"
        viewBox="0 0 32 32"
      >
        {children}
      </svg>
      <span className="font-bold text-xl tracking-tight">Logoipsum</span>
    </div>
  );
}

export default function Partners() {
  return (
    <section aria-label="Partner logos" className="bg-[#F5F5F6] border-b border-gray-100 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">

          {/* Waves */}
          <Logo>
            <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm-7 8c2.5-2 7.5-2 10 0s3 5 0 7-7.5 2-10 0 0-7 0-7zm4 4c1-1 3-1 4 0s1 2 0 3-3 1-4 0 0-3 0-3z" />
          </Logo>

          {/* Sun / Burst */}
          <Logo>
            <circle cx="16" cy="16" r="5" />
            <rect x="14" y="2" width="4" height="6" rx="2" />
            <rect x="14" y="24" width="4" height="6" rx="2" />
            <rect x="2" y="14" width="6" height="4" rx="2" />
            <rect x="24" y="14" width="6" height="4" rx="2" />
            <rect x="6.5" y="6.5" width="4" height="6" rx="2" transform="rotate(-45 8.5 9.5)" />
            <rect x="21.5" y="21.5" width="4" height="6" rx="2" transform="rotate(-45 23.5 24.5)" />
            <rect x="21.5" y="6.5" width="4" height="6" rx="2" transform="rotate(45 23.5 9.5)" />
            <rect x="6.5" y="21.5" width="4" height="6" rx="2" transform="rotate(45 8.5 24.5)" />
          </Logo>

          {/* Lightning Bolt Circle */}
          <Logo>
            <circle cx="16" cy="16" r="14" />
            <path d="M17 7L10 17h6l-2 8 8-11h-6l1-7z" fill="white" />
          </Logo>

          {/* Clover / Cross Dots */}
          <Logo>
            <circle cx="16" cy="16" r="4" />
            <circle cx="16" cy="6" r="3.5" />
            <circle cx="16" cy="26" r="3.5" />
            <circle cx="6" cy="16" r="3.5" />
            <circle cx="26" cy="16" r="3.5" />
          </Logo>

          {/* Spiral / Orbit */}
          <Logo>
            <path d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm0 4a10 10 0 11-10 10A10 10 0 0116 6zm0 4a6 6 0 106 6 6 6 0 00-6-6z" />
          </Logo>

        </div>
      </div>
    </section>
  );
}