import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/SMARTWORD LOGO FOOTER.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-gray-300">
      {/* WAVE SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:h-[100px]"
          fill="#0f172a"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,104.2,125.72,103.11,192.56,87.41,254,73,281.85,63.78,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COMPANY INFO */}
          <div className="space-y-5">
            <img
              src={logo}
              alt="Smart Word Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Professional translation, attestation, and documentation services
              in Dubai, UAE. Your trusted partner for accurate and reliable
              language solutions worldwide.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/translation" className="hover:text-white transition">Translation</Link></li>
              <li><Link to="/attestation" className="hover:text-white transition">Attestation</Link></li>
              <li><Link to="/notarization" className="hover:text-white transition">Notarization</Link></li>
              <li><Link to="/drafting" className="hover:text-white transition">Drafting</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/business-steps" className="hover:text-white transition">Business Steps</Link></li>
              <li><Link to="/emirati-pension" className="hover:text-white transition">Emirati Pension</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#b59a6d]" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#b59a6d]" />
                <span>info@smartword.ae</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#b59a6d]" />
                <span>+971 00 000 0000</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Smart Word. All rights reserved.
        </div>
      </div>
    </footer>
  );
}