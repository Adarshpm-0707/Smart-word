import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  UserCheck, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  
  Scale,
  Building2,
  Handshake
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LocalServiceAgentAgreement() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a Local Service Agent (LSA)?",
      a: "A Local Service Agent is a UAE national or UAE-owned company appointed as a legal representative when setting up a professional or branch license in the UAE. The agent does not own shares in the business and has no financial liability.",
    },
    {
      q: "Is a Local Service Agent required for every business in the UAE?",
      a: "No. LSAs are typically required for professional licenses (e.g., consultants, doctors, artisans) and branches of foreign or free zone companies. Recent changes in UAE law now allow 100% foreign ownership for many commercial and industrial activities without a local partner or LSA.",
    },
    {
      q: "What are the responsibilities of a Local Service Agent?",
      a: "The primary role of an LSA is to act as a liaison with government departments, such as the Ministry of Labour and Immigration, to facilitate visa processing, license renewals, and other administrative approvals.",
    },
    {
      q: "Will the Local Service Agent have access to my business or bank account?",
      a: "No. The LSA agreement specifically states that the agent has no authority over business operations, financial management, or bank accounts. You retain 100% operational and financial control.",
    },
    {
      q: "Can I change my Local Service Agent later?",
      a: "Yes. You can change your LSA by mutual consent or through a legal process. This requires a new notarized agreement and updates to your trade license with the relevant Department of Economy.",
    },
  ];

  const features = [
    {
      title: "Reliable Emirati Agents",
      text: "Connection with verified UAE nationals to act as your professional legal representative.",
      icon: <UserCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "100% Foreign Ownership",
      text: "Retain full operational and financial control while the LSA provides legal liaison only.",
      icon: <Building2 className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Tailored Legal Drafting",
      text: "Agreements customized to your specific business activity and corporate structure.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "No Interference Guarantee",
      text: "LSAs do not participate in daily operations or business decision-making processes.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Fast Notarization",
      text: "Quick turnaround for drafting and notarizing agreements with the Dubai Notary Public.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Secure Legal Standing",
      text: "Ensuring your business remains 100% compliant with the latest UAE Commercial Companies Law.",
      icon: <Handshake className="text-[#2b9cb3]" size={24} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & HEADER ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} />
              Business Setup Expert
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Local Service <span className="text-[#2b9cb3]">Agent Agreement</span> in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Setting up a professional or branch license in the UAE often requires 
                appointing a Local Service Agent (LSA). Unlike a partner, an LSA 
                facilitates administrative procedures without owning shares in your company.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "Smart Word offers legally sound, customized LSA agreements 
                  that protect your ownership while ensuring full regulatory compliance 
                  with UAE licensing authorities."
                </p>
              </div>

              <p>
                Our team handles the end-to-end process—from connecting you with 
                reliable agents to the final notarization—allowing you to maintain 
                full operational and financial control of your entity.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[380px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Protect Your Business</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need a reliable LSA for your professional license? Our legal team ensures your rights are protected.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  100% Ownership Protection
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Verified Emirati Agents
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Bilingual Notarized Contract
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES GRID ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center lg:text-left"
          >
            Service Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#2b9cb3]/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="mt-24 max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <HelpCircle className="text-[#2b9cb3]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Agent Agreement FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white shadow-md border-cyan-100' : 'bg-transparent border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className={`font-bold transition-colors ${openIndex === index ? 'text-[#2b9cb3]' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#2b9cb3]' : ''}`} 
                    size={20} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-slate-500 text-sm md:text-base leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#2b9cb3] rounded-3xl text-center p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Appoint Your Local Service Agent?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Our legal experts ensure your business setup is seamless and your ownership 
              rights are fully protected under UAE law.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Contact Our Experts <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}