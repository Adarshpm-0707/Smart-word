import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Languages,
  ShieldCheck,
  PenTool,
  Briefcase,
  FileText,
  Wallet,
} from "lucide-react";
import logo from "../assets/SMARTWORD LOGO.png";
import GooeyNav from "../animation/GooeyNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const brand = "#2b9cb3";
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServiceOpen(false);
  }, [location.pathname]);

  const services = [
    { name: "Translation", path: "/translation", icon: <Languages size={18}/> },
    { name: "Attestation", path: "/attestation", icon: <ShieldCheck size={18}/> },
    { name: "Notarization", path: "/notarization", icon: <FileText size={18}/> },
    { name: "Drafting", path: "/drafting", icon: <PenTool size={18}/> },
    { name: "Business Steps", path: "/business-steps", icon: <Briefcase size={18}/> },
    // MATCHED PATH: /emirati-pension
    { name: "Emirati Pension", path: "/emirati-pension", icon: <Wallet size={18}/> }, 
  ];

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      onClick: () => setServiceOpen(!serviceOpen),
      icon: (
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`}
        />
      ),
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-3 lg:px-6">
      <nav className={`max-w-screen-xl mx-auto rounded-2xl transition-all duration-300 backdrop-blur-xl ${scrolled ? "bg-white/60 shadow-xl border border-white/40" : "bg-white/30"}`}>
        <div className="px-5 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Smart Word" className="h-6 md:h-9" />
          </Link>

          <div className="hidden lg:flex items-center gap-6 relative">
            <GooeyNav items={mainLinks} activePath={location.pathname} brandColor={brand} />
            <div ref={dropdownRef} className="relative">
              <div className={`absolute right-0 top-full mt-4 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 ${serviceOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-3"}`}>
                {services.map((item) => (
                  <Link key={item.path} to={item.path} className="flex items-center gap-3 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition">
                    <span style={{ color: brand }}>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="pt-24 px-6 space-y-6">
          <GooeyNav items={mainLinks} activePath={location.pathname} isMobile brandColor={brand} />
          <div className={`overflow-hidden transition-all duration-500 ${serviceOpen ? "max-h-[500px]" : "max-h-0"}`}>
            <div className="pl-6 space-y-4 border-l border-gray-200">
              {services.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="flex items-center gap-3 font-semibold text-gray-600">
                  <span style={{ color: brand }}>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}