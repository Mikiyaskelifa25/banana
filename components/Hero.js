export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 pb-24 md:pb-36 bg-forest-dark">
      {/* Background Image with Deep Organic Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-out scale-105"
        style={{
          backgroundImage: "url('/back.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/75 via-forest-dark/65 to-forest-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        {/* Organic Premium Pulsing Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#F6F3EB]/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-ochre-light border border-white/10 shadow-lg badge-pulse mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-ochre animate-pulse" />
          100% Tree-Free | Handcrafted in Ethiopia
        </div>

        {/* High-End Serif Title */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl mx-auto drop-shadow-xl">
          Crafted by Nature.<br />
          <span className="italic text-ochre-light font-normal">Perfected</span> by Hand.
        </h1>

        {/* Descriptive Statement */}
        <p className="text-base sm:text-lg lg:text-xl text-parchment-dark/85 max-w-2xl mx-auto mt-8 leading-relaxed font-light">
          Transforming agricultural waste into premium, 100% biodegradable banana
          fiber packaging. Elegant, durable solutions sourced directly from the agricultural paradise of
          Arba Minch.
        </p>

        {/* Grid of 3 Premium Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-16 border-t border-white/15 max-w-4xl mx-auto">
          <div className="bg-[#F6F3EB]/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-[#F6F3EB]/10 hover:border-ochre/30 hover:-translate-y-1">
            <h3 className="font-serif text-4xl sm:text-5xl font-extrabold text-ochre drop-shadow-sm mb-2">100%</h3>
            <p className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest">
              Biodegradable
            </p>
          </div>

          <div className="bg-[#F6F3EB]/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-[#F6F3EB]/10 hover:border-ochre/30 hover:-translate-y-1">
            <h3 className="font-serif text-4xl sm:text-5xl font-extrabold text-ochre drop-shadow-sm mb-2">30+</h3>
            <p className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest">
              Local Jobs Sustained
            </p>
          </div>

          <div className="bg-[#F6F3EB]/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-[#F6F3EB]/10 hover:border-ochre/30 hover:-translate-y-1">
            <h3 className="font-serif text-4xl sm:text-5xl font-extrabold text-ochre drop-shadow-sm mb-2">200</h3>
            <p className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest">
              Minimum Order (MOQ)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

