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
  FileText,
  Scale,
  Languages,

} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HusbandSponsorshipNOC() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a Husband Sponsorship NOC?",
      a: "A Husband Sponsorship NOC is a legal document signed by a husband granting permission to his wife for employment, study, sponsorship, or other specific activities in the UAE while she remains under his visa sponsorship.",
    },
    {
      q: "Is notarization required for the NOC to be valid?",
      a: "Yes, in most cases. For the NOC to be accepted by government entities like the MOHRE (Ministry of Human Resources) or DED (Department of Economy), it must be signed in front of a UAE Public Notary to verify the husband's signature.",
    },
    {
      q: "What documents are required for notarization?",
      a: "Typically, the husband's original Emirates ID and passport copy are required. The wife's passport copy and a copy of the marriage certificate (attested) may also be requested to prove the relationship.",
    },
    {
      q: "Is Arabic translation necessary?",
      a: "Yes. For notarization in the UAE, the document must be in Arabic or a bilingual English-Arabic format. We provide certified legal translation as part of our NOC service package.",
    },
    {
      q: "How quickly can the NOC be notarized?",
      a: "With our assistance, the drafting and notarization can often be completed on the same day or within 24 hours, depending on the notary public's availability.",
    },
  ];

  const features = [
    {
      title: "Legally Valid Drafting",
      text: "Customized NOC statements for employment, study, or business licensing that meet all UAE legal standards.",
      icon: <FileText className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Arabic Translation",
      text: "Mandatory bilingual formatting prepared by legal translators to meet UAE Notary Public requirements.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Fast & Hassle-Free",
      text: "Same-day or next-day turnaround including drafting, translation, and notary coordination.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Secure & Confidential",
      text: "Your personal and family information is handled with complete discretion and professional care.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Authority Approved",
      text: "Notarized NOCs accepted by MOHRE, DED, Immigration, courts, and educational institutions.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Expert Guidance",
      text: "Support from experienced consultants to ensure the correct phrasing for your specific requirements.",
      icon: <UserCheck className="text-[#2b9cb3]" size={24} />
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
              Family Sponsorship Support
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Husband <span className="text-[#2b9cb3]">Sponsorship NOC</span> Services in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A Husband Sponsorship NOC is a vital legal document for wives residing 
                in the UAE under their husband's visa. It grants permission to 
                work, study, or start a business, ensuring full compliance with local laws.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we simplify the NOC process—from professional drafting 
                  and certified Arabic translation to final notarization—so your 
                  wife’s career or academic journey starts without legal hurdles."
                </p>
              </div>

              <p>
                Our legal team ensures that the wording is precise and accepted 
                by government departments, employers, and visa centers across 
                Dubai and the wider UAE.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Your NOC Notarized</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need an NOC for a new job or business license? Let our legal experts handle the drafting and notarization today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  UAE Public Notary Sync
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Certified Bilingual Format
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Immediate Document Pick-up
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Husband NOC FAQ</h2>
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
          className="mt-20 mb-14 bg-[#2b9cb3] rounded-[2rem] text-center p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Need Reliable Legal Documentation?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Our legal specialists ensure your NOC is authenticated correctly 
              so your wife’s application can proceed without delays.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
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