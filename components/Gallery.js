"use client";

import { useState, useCallback } from "react";

const galleryImages = [
  { src: "/gallary/photo_2026-05-21_14-05-35.jpg", title: "Premium Shopping Bag" },
  { src: "/gallary/photo_2026-05-21_14-05-36 (2).jpg", title: "Harvesting Fiber" },
  { src: "/gallary/photo_2026-05-21_14-05-36.jpg", title: "Artisans at Work" },
  { src: "/gallary/photo_2026-05-21_14-05-38 (2).jpg", title: "Natural Dyeing" },
  { src: "/gallary/photo_2026-05-21_14-05-38 (3).jpg", title: "Arba Minch, Ethiopia" },
  { src: "/gallary/photo_2026-05-21_14-05-38.jpg", title: "Banana Fiber Sheets" },
  { src: "/gallary/photo_2026-05-21_14-05-39 (2).jpg", title: "Handcrafted Process" },
  { src: "/gallary/photo_2026-05-21_14-05-39.jpg", title: "Eco-Friendly Packaging" },
  { src: "/gallary/photo_2026-05-21_14-05-40 (2).jpg", title: "Product Showcase" },
  { src: "/gallary/photo_2026-05-21_14-05-40 (3).jpg", title: "Fiber Preparation" },
  { src: "/gallary/photo_2026-05-21_14-05-40.jpg", title: "Community Impact" },
  { src: "/gallary/photo_2026-05-21_14-05-41.jpg", title: "Quality Control" },
  { src: "/gallary/photo_2026-05-21_14-05-42.jpg", title: "Our Workshop" },
  { src: "/gallary/photo_2026-05-21_14-05-44 (2).jpg", title: "Sustainable Materials" },
  { src: "/gallary/photo_2026-05-21_14-05-44.jpg", title: "Design Process" },
  { src: "/gallary/photo_2026-05-21_14-05-45 (2).jpg", title: "Our Team" },
  { src: "/gallary/photo_2026-05-21_14-05-45 (3).jpg", title: "Raw Materials" },
  { src: "/gallary/photo_2026-05-21_14-05-45 (4).jpg", title: "Finishing Touches" },
  { src: "/gallary/photo_2026-05-21_14-05-45.jpg", title: "Our Products" },
  { src: "/gallary/photo_2026-05-21_14-05-46.jpg", title: "Final Product" },
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [animIn, setAnimIn] = useState(false);

  const displayed = showAll ? galleryImages : galleryImages.slice(0, 6);
  const hasMore = galleryImages.length > 6;

  const openLightbox = useCallback((item) => {
    setLightbox(item);
    requestAnimationFrame(() => setAnimIn(true));
  }, []);

  const closeLightbox = useCallback(() => {
    setAnimIn(false);
    setTimeout(() => setLightbox(null), 250);
  }, []);

  return (
    <>
      <section id="gallery" className="py-24 sm:py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ochre font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
              Our Craft
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-dark">
              Visual Journey
            </h2>
            <div className="w-16 h-1 bg-ochre mx-auto mt-4 rounded-full" />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayed.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl bg-parchment-card border border-[#EAE3D4]/50 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                onClick={() => openLightbox(item)}
              >
                {/* Photo Zoom Container */}
                <div className="overflow-hidden aspect-[4/3] w-full">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Glowing Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <span className="text-[10px] font-bold text-ochre-light uppercase tracking-widest block mb-1">Sewasew Craft</span>
                    <h4 className="text-white font-serif text-lg sm:text-xl font-medium tracking-wide">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Trigger Button */}
          {hasMore && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShowAll(!showAll)}
                className="glow-btn bg-ochre hover:bg-ochre-dark text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-ochre/25 hover:shadow-xl hover:shadow-ochre/35 hover:-translate-y-0.5 text-sm sm:text-base flex items-center gap-2"
              >
                <i className={`fas ${showAll ? "fa-minus" : "fa-plus"} text-xs`} />
                {showAll ? "Show Less" : "Explore More Journey"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox fullscreen Modal */}
      {lightbox && (
        <div
          className={`fixed inset-0 z-[110] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-300 ${
            animIn ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeLightbox}
        >
          {/* Close trigger button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl transition-colors z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          
          <div
            className={`max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 bg-black/40 border border-white/10 ${
              animIn ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image viewer container */}
            <div className="relative flex justify-center bg-black/60">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-auto max-h-[70vh] object-contain"
              />
            </div>
            
            {/* Title display */}
            <div className="bg-parchment p-6 text-center border-t border-[#EAE3D4]">
              <span className="text-[10px] font-bold text-ochre uppercase tracking-widest block mb-1">Sewasew Ethiopia</span>
              <h4 className="font-serif text-xl font-bold text-forest-dark">{lightbox.title}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

