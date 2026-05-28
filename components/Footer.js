export default function Footer() {
  return (
    <footer className="bg-parchment-card border-t border-[#EAE3D4] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Foot Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Logo & Bio Column */}
          <div className="space-y-6">
            <img 
              src="/logo.png" 
              alt="Sewasew" 
              className="h-28 w-auto mb-2 drop-shadow-sm transition-transform duration-300 hover:scale-102" 
            />
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Turning agricultural waste into premium, 100% biodegradable banana fiber
              packaging. Handcrafted with care in Arba Minch, Ethiopia.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif font-bold text-forest-dark text-base tracking-wide mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-ochre translate-y-2 rounded-full" />
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              {["Home", "Our Story", "Products", "Gallery"].map((label) => (
                <li key={label}>
                  <a
                    href={label === "Home" ? "#" : `#${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-500 hover:text-ochre transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <i className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links Column */}
          <div>
            <h4 className="font-serif font-bold text-forest-dark text-base tracking-wide mb-6 relative">
              Products
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-ochre translate-y-2 rounded-full" />
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              <li>
                <a href="#products" className="text-gray-500 hover:text-ochre transition-colors duration-300 flex items-center gap-1.5 group">
                  <i className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  Shopping Bags
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-500 hover:text-ochre transition-colors duration-300 flex items-center gap-1.5 group">
                  <i className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  Custom Boxes
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-500 hover:text-ochre transition-colors duration-300 flex items-center gap-1.5 group">
                  <i className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  Fine Stationery
                </a>
              </li>
              <li>
                <a href="#wholesale" className="text-gray-500 hover:text-ochre transition-colors duration-300 flex items-center gap-1.5 group font-medium">
                  <i className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  Wholesale Orders (200 MOQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-serif font-bold text-forest-dark text-base tracking-wide mb-6 relative">
              Contact Hub
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-ochre translate-y-2 rounded-full" />
            </h4>
            
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed font-light">
              <div className="flex items-start gap-2.5">
                <i className="fas fa-envelope text-ochre mt-1"></i>
                <div className="break-all">
                  <p>sewasewbiodegradable@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <i className="fas fa-phone text-ochre mt-1"></i>
                <div>
                  <p>+251 984 711 844</p>
                  <p>+251 911 603 027</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <i className="fas fa-map-marker-alt text-ochre mt-1"></i>
                <p>Arba Minch, Ethiopia</p>
              </div>
            </div>

            {/* Social Icons Hub */}
            <div className="flex gap-3.5 mt-6">
              {["instagram", "linkedin", "whatsapp"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white border border-[#EAE3D4] flex items-center justify-center text-forest-light hover:text-white hover:bg-ochre hover:border-ochre hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  aria-label={social}
                >
                  <i className={`fab fa-${social} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Lower Copyright Row */}
        <div className="border-t border-[#E2D9CA]/75 pt-10 mt-16 text-center text-xs text-gray-400 font-light">
          <p className="font-serif leading-loose">
            &copy; {new Date().getFullYear()} Sewasew Biodegradable Paper Products. Handcrafted with pride in
            Ethiopia — returning to the earth, naturally.
          </p>
        </div>

      </div>
    </footer>
  );
}
