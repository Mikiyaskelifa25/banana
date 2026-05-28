"use client";

import { useState } from "react";
import { productData } from "@/lib/productData";

const featureIcons = {
  "Ideal for": "fa-bullseye",
  "Standard Dimensions": "fa-ruler",
  "Tailoring": "fa-cut",
  "Eco Status": "fa-leaf",
  "Weights": "fa-weight",
  "Artisan Quality": "fa-gem",
};

// Map product images to high-quality local pictures that fit beautifully
const productImages = {
  bags: "/gallary/photo_2026-05-21_14-05-35.jpg",
  packaging: "/gallary/photo_2026-05-21_14-05-39.jpg",
  stationery: "/gallary/photo_2026-05-21_14-05-38.jpg",
};

function getFeatureIcon(text) {
  for (const key of Object.keys(featureIcons)) {
    if (text.startsWith(key)) return featureIcons[key];
  }
  return "fa-check";
}

function parseBullet(text) {
  const match = text.match(/^<strong>(.+?):<\/strong>\s*(.+)/);
  if (match) return { label: match[1], value: match[2] };
  return { label: null, value: text };
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("bags");
  const info = productData[activeTab];

  return (
    <section id="products" className="py-24 sm:py-32 bg-parchment-card border-y border-[#EAE3D4] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ochre font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
            Our Innovations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-dark">
            Made to Disappear
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Explore handcrafted products designed to fulfill commercial packaging
            needs with absolute organic authenticity.
          </p>
        </div>

        {/* Premium Tab Bar Selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#EAE3D4]/50 border border-[#EAE3D4]/80 shadow-inner w-full max-w-2xl">
            {Object.keys(productData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === key
                    ? "bg-white text-forest shadow-md"
                    : "text-forest-dark/70 hover:text-forest hover:bg-white/40"
                }`}
              >
                {productData[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Panel with Animating Content */}
        <div 
          key={activeTab} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-[fadeIn_0.5s_ease-out]"
        >
          {/* Dynamic Image Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#EAE3D4]/80 p-2 premium-card">
              <img
                src={productImages[activeTab] || info.image}
                alt={info.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/20 to-transparent pointer-events-none rounded-3xl" />
            </div>

            {/* Eco Badge Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {info.bullets
                .filter((b) => b.includes("Eco Status") || b.includes("Artisan Quality"))
                .map((b, i) => {
                  const match = b.match(/^<strong>(.+?):<\/strong>\s*(.+)/);
                  const value = match ? match[2] : b;
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-forest/10 text-forest-dark text-xs font-semibold shadow-sm"
                    >
                      <i className="fas fa-leaf text-ochre text-[10px]" />
                      {value}
                    </span>
                  );
                })}
            </div>
          </div>

          {/* Product Details & Specifications Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                {info.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light mb-8">
                {info.description}
              </p>

              {/* Dynamic Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {info.bullets
                  .filter((b) => !b.includes("Eco Status") && !b.includes("Artisan Quality"))
                  .map((b, i) => {
                    const { label, value } = parseBullet(b);
                    const icon = label ? getFeatureIcon(b) : "fa-check";
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#EAE3D4]/50 shadow-sm hover:shadow-md hover:border-ochre/30 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-ochre/10 flex items-center justify-center shrink-0 group-hover:bg-ochre/20 transition-colors">
                          <i className={`fas ${icon} text-ochre text-base`} />
                        </div>
                        <div className="min-w-0">
                          {label && (
                            <span className="block text-[10px] font-bold text-forest-dark/80 uppercase tracking-widest mb-1">
                              {label}
                            </span>
                          )}
                          <span
                            className="text-sm sm:text-base text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: value }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

