export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Large Aesthetic Editorial Statement */}
        <div className="text-center w-full mb-20 max-w-4xl mx-auto">
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-forest-dark leading-tight">
            Sewasew biodegradable paper and paper products.
          </h2>
          
          <span className="text-ochre font-semibold text-xs tracking-[0.2em] uppercase block my-12 relative">
            <span className="inline-block px-4 bg-white z-10 relative">Our Roots & Craft</span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#EAE3D4] -z-0" />
          </span>
          
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-forest-dark mt-4">
            Sustaining Lands, Empowering Communities
          </h3>
          <div className="w-20 h-1.5 bg-ochre mx-auto mt-6 rounded-full" />
        </div>

        {/* Story details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-2xl sm:text-3xl font-semibold text-forest font-serif leading-snug">
              A Circular Story Built in Arba Minch
            </h4>
            
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
              Based in the vibrant agricultural paradise of Arba Minch, Ethiopia,{" "}
              <strong className="font-semibold text-forest-dark">Sewasew</strong> bridges the beautiful gap between historic
              manual craftsmanship and global environmental stewardship.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
              We collect natural banana pseudostem fibers—an abundant agricultural
              byproduct usually burned or left to waste after harvests—and convert
              them into extremely tough, versatile, natural packaging sheets and
              bags.
            </p>
            
            {/* Editorial Quote Panel */}
            <div className="bg-parchment-card p-8 rounded-3xl border-l-4 border-ochre shadow-[0_10px_30px_rgba(30,62,52,0.02)] transition-transform duration-300 hover:scale-[1.01]">
              <p className="font-serif italic text-forest text-lg sm:text-xl leading-relaxed">
                &ldquo;Our name, Sewasew, embodies the perfect connection and ladder
                of progress between community development, ethical employment, and
                natural cycles.&rdquo;
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
              Our chemical-free formulation ensures that our paper returns safely
              back to the earth, composting completely within a matter of weeks and
              replenishing local soil ecosystems without microplastics or synthetic
              toxins.
            </p>
          </div>

          {/* Premium Framed Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-parchment-card border border-[#EAE3D4]/80 p-3 premium-card">
              <img
                src="/madeyourpaper.png"
                alt="How Sewasew paper is made"
                className="w-full h-auto object-cover rounded-2xl shadow-inner"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/20 to-transparent pointer-events-none rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

