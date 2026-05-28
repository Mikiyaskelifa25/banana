"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is banana fiber paper exactly?",
    a: "Banana fiber paper is crafted from the pseudostem of banana plants — an agricultural byproduct usually discarded after harvest. The fibers are extracted, cleaned, sun-dried, and hand-pressed into durable, textured sheets without any tree cutting or chemical bleaching.",
  },
  {
    q: "Are your products truly biodegradable?",
    a: "Yes, 100%! Our products contain zero plastic, wax, or synthetic binders. They are fully home compostable and will biodegrade naturally within 6 to 12 weeks, returning nutrients to the soil without microplastic residue.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white border-t border-[#EAE3D4]/60 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-ochre font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
            Got Questions?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-dark">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-ochre mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-5 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="bg-parchment-card rounded-2xl border border-[#EAE3D4]/50 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-ochre/25"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-forest-dark transition-colors hover:bg-parchment-dark/30 text-base sm:text-lg cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#EAE3D4] text-ochre shrink-0 shadow-sm transition-transform duration-300">
                    <i
                      className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-ochre-dark" : ""
                      }`}
                    ></i>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 border-t border-[#EAE3D4]/30" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-6 text-gray-500 text-sm sm:text-base leading-relaxed font-light bg-white/40">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

