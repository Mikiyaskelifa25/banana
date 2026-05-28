"use client";

import VideoPlayer from "./VideoPlayer";

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-parchment-card scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-ochre font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
            Our Purpose & Contact
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-dark">
            Direct Local Impact
          </h2>
          <div className="w-16 h-1 bg-ochre mx-auto mt-4 rounded-full" />
        </div>

        {/* Video Player & Job Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Custom Video Players Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-1 rounded-[26px] bg-white border border-[#EAE3D4]/60 shadow-lg">
              <VideoPlayer src="/video.mp4" />
            </div>
            <div className="p-1 rounded-[26px] bg-white border border-[#EAE3D4]/60 shadow-lg">
              <VideoPlayer src="/video1.mp4" />
            </div>
          </div>

          {/* Social Impact Stats Column */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Statistics Cards */}
            <div className="bg-white rounded-3xl border border-[#EAE3D4]/60 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark mb-2">
                We Create Jobs That Matter
              </h3>
              <div className="w-12 h-1 bg-ochre rounded-full mb-8" />
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-parchment/50">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center shrink-0 mt-0.5 border border-forest/5">
                    <i className="fas fa-users text-forest text-base" />
                  </div>
                  <div>
                    <span className="font-bold text-forest text-base sm:text-lg block">5 direct employees</span>
                    <span className="text-gray-500 text-sm font-light">driving green innovation daily in our Arba Minch workshop</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-parchment/50">
                  <div className="w-10 h-10 rounded-xl bg-ochre/10 flex items-center justify-center shrink-0 mt-0.5 border border-ochre/5">
                    <i className="fas fa-seedling text-ochre text-base" />
                  </div>
                  <div>
                    <span className="font-bold text-forest text-base sm:text-lg block">25 female farmers</span>
                    <span className="text-gray-500 text-sm font-light">growing and harvesting our raw materials with care</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-parchment/50">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center shrink-0 mt-0.5 border border-forest/5">
                    <i className="fas fa-home text-forest text-base" />
                  </div>
                  <div>
                    <span className="font-bold text-forest text-base sm:text-lg block">30 families</span>
                    <span className="text-gray-500 text-sm font-light">lifted through fair, stable, and empowering work</span>
                  </div>
                </div>
              </div>
              
              <p className="font-serif italic text-lg text-forest-dark border-l-4 border-ochre pl-4 py-1.5 bg-parchment/30 rounded-r-xl">
                Sewasew: Good for the planet. Great for people.
              </p>
            </div>

            {/* Scaling Impact & 2027 Goals Cards */}
            <div className="bg-white rounded-3xl border border-[#EAE3D4]/60 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark mb-2">
                Looking Ahead: Scaling Jobs, Scaling Impact
              </h3>
              <div className="w-12 h-1 bg-ochre rounded-full mb-8" />
              <p className="text-forest font-semibold text-sm tracking-wide uppercase mb-5">By 2027, Sewasew aims to:</p>
              
              <ul className="space-y-4">
                {[
                  "Grow direct employment to 15 team members",
                  "Expand female farmer network to 100+ women",
                  "Launch a Young Farmer Training Program for 20 youth annually",
                  "Introduce profit-sharing dividends for long-term farming partners",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ochre/15 flex items-center justify-center shrink-0 mt-0.5 border border-ochre/5">
                      <i className="fas fa-check text-ochre text-[10px]" />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#EAE3D4]/60">
                <p className="text-forest-dark font-serif font-medium italic text-base">
                  We don't just make paper. We build a regenerative economy—one job at a time.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-24 max-w-4xl mx-auto">
          
          <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-[#EAE3D4]/50 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-ochre/10 flex items-center justify-center text-ochre shrink-0 border border-ochre/5">
              <i className="fas fa-envelope text-lg"></i>
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-forest-dark text-lg">Email Us</h4>
              <p className="text-gray-500 text-sm font-medium tracking-wide">info@sewasewpaper.com</p>
              <p className="text-gray-500 text-sm font-medium tracking-wide">orders@sewasewpaper.com</p>
            </div>
          </div>

          <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-[#EAE3D4]/50 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-ochre/10 flex items-center justify-center text-ochre shrink-0 border border-ochre/5">
              <i className="fas fa-map-marker-alt text-lg"></i>
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-forest-dark text-lg">Location</h4>
              <p className="text-gray-500 text-sm font-light">Arba Minch, Ethiopia</p>
              <p className="text-gray-500 text-sm font-light">Addis Abeba, Ethiopia</p>
              <p className="text-gray-500 text-xs font-bold text-forest uppercase tracking-widest pt-1">East Africa</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

