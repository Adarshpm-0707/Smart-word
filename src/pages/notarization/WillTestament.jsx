import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 

  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  Scale,
  Languages,
 
  Lock,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WillTestamentServices() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why should I notarize my Will in Dubai?",
      a: "Notarizing your Will makes it legally binding and ensures your estate is distributed according to your wishes while minimizing disputes, legal delays, and ensuring the UAE authorities recognize your chosen executors and guardians.",
    },
    {
      q: "Can expatriates create a non-Sharia Will in the UAE?",
      a: "Yes. Expatriates can opt for a non-Sharia Will through the DIFC Wills Service Centre or the Dubai Courts. This allows them to apply the laws of their home country to the distribution of their UAE-based assets.",
    },
    {
      q: "What documents are required for Will notarization?",
      a: "Typically, you need your original Emirates ID, Passport copy, a list of assets (property titles, bank details), and the identification documents of your chosen beneficiaries and guardians.",
    },
    {
      q: "Is Arabic translation mandatory for Will notarization?",
      a: "Yes. For a Will to be notarized by the Dubai Notary Public, it must be in Arabic or a bilingual English-Arabic format prepared by a certified legal translator authorized by the Ministry of Justice.",
    },
    {
      q: "How long does the notarization process take?",
      a: "Drafting and translation usually take 2-3 working days. The notarization appointment itself is typically completed within 24-48 hours once the final draft is approved by the client and the notary.",
    },
  ];

  const features = [
    {
      title: "Legally Compliant Drafting",
      text: "Personalized wills outlining beneficiaries and executors in full compliance with UAE regulations.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Translation",
      text: "Mandatory Arabic or bilingual formatting accepted by UAE notary offices and local courts.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Complete Privacy",
      text: "Personal matters handled with strict confidentiality, ensuring sensitive information remains secure.",
      icon: <Lock className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Efficient Notarization",
      text: "Full management of document preparation, appointment booking, and final signing sessions.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Authority Approved",
      text: "Wills recognized by Dubai Courts, DIFC, embassies, and all relevant UAE legal bodies.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Guardianship Planning",
      text: "Expert inclusion of guardianship clauses to ensure the safety and future of your minor children.",
      icon: <Users className="text-[#2b9cb3]" size={24} />
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
              Estate Planning Specialist
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Securing Your Future: <span className="text-[#2b9cb3]">Will & Testament</span> Services
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Creating a Will and Testament is an essential step in securing your assets and protecting 
                your loved ones. In the UAE, residents can draft legally binding wills to specify 
                asset distribution and guardianship of minors.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we ensure your Will is drafted with absolute precision, 
                  translated by judicial experts, and notarized to meet the specific 
                  legal frameworks of Dubai Courts and the DIFC."
                </p>
              </div>

              <p>
                Whether you are an expatriate seeking a non-Sharia will or a resident 
                looking to formalize your estate plan, our team manages the entire 
                legal cycle with sensitivity and professional discretion.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Protect Your Assets</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ensure your family's future is secure. Get your Will drafted and notarized by licensed professionals today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  DIFC & Dubai Courts Compliant
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Non-Sharia Options for Expats
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Guardianship Clause Inclusion
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Will & Testament FAQ</h2>
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
          className="mt-20 mb-14 bg-[#2b9cb3] rounded-3xl text-center p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Secure Your Legacy Today
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Don't leave your family's future to chance. Our legal team ensures 
              your Will is legally recognized and your wishes are protected.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Contact Our Legal Experts <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}