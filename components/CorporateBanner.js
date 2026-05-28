export default function CorporateBanner() {
  return (
    <section className="py-20 bg-forest-dark border-t border-[#EAE3D4]/20 relative overflow-hidden">
      {/* Background Graphic Decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-forest-light/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-ochre/5 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="bg-[#FDFBF7]/5 backdrop-blur-md rounded-[36px] p-10 md:p-16 border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/15">
          
          <span className="text-ochre-light font-bold text-xs uppercase tracking-[0.25em] block mb-4">
            Sustainability Partners
          </span>
          
          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-parchment leading-tight max-w-2xl mx-auto">
            Ready to Replace Virgin Plastics &amp; Tree-Based Paper?
          </h3>
          
          <p className="text-gray-300 text-sm sm:text-base mt-5 max-w-xl mx-auto font-light leading-relaxed">
            Join leading eco-boutiques and hotels across Africa and Europe using
            Sewasew&apos;s circular banana fiber packaging.
          </p>
          
          <a
            href="#contact"
            className="glow-btn inline-flex items-center justify-center bg-ochre hover:bg-ochre-dark text-white font-semibold px-10 py-4 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-ochre/20 mt-8 text-sm sm:text-base gap-2"
          >
            <i className="fas fa-envelope text-xs"></i> Get In Touch / Contact Us
          </a>

        </div>
      </div>
    </section>
  );
}

