"use client";

import { useState } from "react";

export default function Wholesale() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowModal(true);
  };

  return (
    <>
      <section id="wholesale" className="py-24 sm:py-32 bg-parchment-card border-t border-[#EAE3D4] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-ochre font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
              Bulk Orders
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-dark">
              Ready to Secure Your Order?
            </h2>
            <p className="text-gray-500 mt-4 text-base sm:text-lg font-light">
              Get customized sizing, detailed ocean/air freight estimates, and order
              tracking directly to your boutique or warehouse.
            </p>
          </div>

          {/* Form Wrapper Card */}
          <div className="bg-white border border-[#EAE3D4]/80 rounded-[32px] p-8 sm:p-14 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Business Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-semibold text-forest-dark text-sm tracking-wide">
                    Name / Business Name
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                      <i className="far fa-user text-sm"></i>
                    </span>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full pl-11 pr-4 py-3.5 bg-parchment border border-[#EAE3D4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ochre/20 focus:border-ochre transition-all duration-300 font-light" 
                      placeholder="e.g., Arba Minch Eco-Lodge" 
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-semibold text-forest-dark text-sm tracking-wide">
                    Email Address
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                      <i className="far fa-envelope text-sm"></i>
                    </span>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full pl-11 pr-4 py-3.5 bg-parchment border border-[#EAE3D4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ochre/20 focus:border-ochre transition-all duration-300 font-light" 
                      placeholder="contact@lodge.com" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Product of Interest */}
                <div className="space-y-2">
                  <label htmlFor="form-product" className="block font-semibold text-forest-dark text-sm tracking-wide">
                    Product of Interest
                  </label>
                  <select 
                    id="form-product" 
                    className="w-full p-3.5 bg-parchment border border-[#EAE3D4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ochre/20 focus:border-ochre transition-all duration-300 font-light text-gray-600 cursor-pointer"
                  >
                    <option value="Premium Shopping Bags">Premium Shopping Bags</option>
                    <option value="Custom Packaging Boxes">Custom Packaging Boxes</option>
                    <option value="Artisanal Stationery Sheets">Artisanal Stationery Sheets</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <label htmlFor="form-quantity" className="block font-semibold text-forest-dark text-sm tracking-wide">
                    Quantity (Min. 200)
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                      <i className="fas fa-boxes-stacked text-sm"></i>
                    </span>
                    <input 
                      type="number" 
                      id="form-quantity" 
                      min="200" 
                      defaultValue={200} 
                      required 
                      className="w-full pl-11 pr-4 py-3.5 bg-parchment border border-[#EAE3D4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ochre/20 focus:border-ochre transition-all duration-300 font-light text-gray-600" 
                    />
                  </div>
                </div>
              </div>

              {/* Branding details */}
              <div className="space-y-2">
                <label htmlFor="form-branding" className="block font-semibold text-forest-dark text-sm tracking-wide">
                  Custom Logo Branding?
                </label>
                <select 
                  id="form-branding" 
                  className="w-full p-3.5 bg-parchment border border-[#EAE3D4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ochre/20 focus:border-ochre transition-all duration-300 font-light text-gray-600 cursor-pointer"
                >
                  <option value="no">No, standard natural texture</option>
                  <option value="yes">Yes, custom ink branding requested</option>
                </select>
              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-semibold text-forest-dark text-sm tracking-wide">
                  Additional Details
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-4 bg-parchment border border-[#EAE3D4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ochre/20 focus:border-ochre transition-all duration-300 font-light text-gray-600 placeholder-gray-400" 
                  placeholder="Specific dimensions, custom packaging ideas, timelines..."
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="glow-btn w-full bg-ochre hover:bg-ochre-dark text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-ochre/20 hover:shadow-xl hover:shadow-ochre/30 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <i className="fas fa-paper-plane text-xs"></i> Submit Custom Inquiry
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Modern Dialog Success Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-[fadeIn_0.25s_ease-out]"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-[32px] p-8 sm:p-12 max-w-md w-full text-center shadow-2xl border border-gray-100/10 transform transition-all duration-300 animate-[scaleIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pulsing Paper plane Circle */}
            <div className="w-16 h-16 bg-forest/10 text-forest rounded-full flex items-center justify-center mx-auto mb-6 text-xl border border-forest/10 badge-pulse">
              <i className="fas fa-paper-plane"></i>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark mb-3">
              Quote Request Received!
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
              Thank you for choosing circular biodegradable products. The Sewasew team
              in Arba Minch will craft your custom shipping and design estimate and
              reach out in less than 24 hours.
            </p>
            
            <button 
              onClick={() => setShowModal(false)} 
              className="w-full bg-forest hover:bg-forest-hover text-white font-semibold py-3.5 rounded-xl transition-colors text-sm sm:text-base cursor-pointer shadow-md"
            >
              Awesome, Thank You!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

