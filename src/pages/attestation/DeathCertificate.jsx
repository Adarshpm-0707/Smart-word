import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  FileText, 
  ShieldCheck, 
  Zap, 
  Globe, 
  HelpCircle,
  Award,
  ArrowRight,
  Scale,
  HeartHandshake
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeathCertificateAttestation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why do I need to attest a death certificate in the UAE?",
      a: "Death certificate attestation is required for legal formalities in the UAE such as closing bank accounts, transferring property, claiming insurance, or completing visa cancellation procedures for the deceased.",
    },
    {
      q: "What documents are required for death certificate attestation?",
      a: "Generally, you will need the original death certificate and a copy of the deceased person's passport. Depending on the purpose, an Emirates ID copy of the person handling the application may also be required.",
    },
    {
      q: "How long does the death certificate attestation process take?",
      a: "The timeline varies based on the country of issue. Typically, it takes between 7 to 15 working days. We offer express services for urgent legal requirements.",
    },
    {
      q: "Can you attest death certificates issued in any country?",
      a: "Yes. Our global network allows us to handle attestation for documents issued in most countries including the UK, USA, India, European nations, and across the GCC.",
    },
    {
      q: "Is death certificate attestation mandatory for visa cancellation?",
      a: "Yes. For the UAE Ministry of Interior or GDRFA to officially cancel a visa due to death, a legally attested death certificate must be presented as proof.",
    },
  ];

  const features = [
    {
      title: "Global Attestation Support",
      text: "End-to-end attestation services for death certificates issued in any country worldwide.",
      icon: <Globe className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Legal Compliance",
      text: "Fast and accurate processing that strictly adheres to UAE Ministry of Justice and MOFA standards.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Secure Document Handling",
      text: "We provide secure, tracked logistics to ensure the safety and confidentiality of sensitive documents.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Compassionate Support",
      text: "Personalized guidance and empathetic customer service to handle your paperwork during difficult times.",
      icon: <HeartHandshake className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Transparent Pricing",
      text: "Affordable and clear pricing structure with no hidden charges for embassy or MOFA fees.",
      icon: <FileText className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Real-Time Updates",
      text: "Stay informed with automatic status updates throughout the notarization and attestation lifecycle.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
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
              Professional Legalization Service
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Top Official <span className="text-[#2b9cb3]">Death Certificate</span> Attestation in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Death certificate attestation is a crucial legal process that verifies the authenticity 
                of a death certificate issued outside the UAE. This is essential for inheritance 
                claims, insurance settlements, and property transfers.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "Dealing with the loss of a loved one is difficult. At Smart Word, we provide 
                  compassionate support to handle the entire attestation process, ensuring 
                  your documents are legally recognized without complications."
                </p>
              </div>

              <p>
                The process typically involves notarization in the issuing country, embassy 
                attestation, and final authentication by the UAE Ministry of Foreign Affairs (MOFA). 
                We manage every step with precision and care.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Expert Help</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need to finalize inheritance or visa cancellation? Our legal specialists are here to assist you.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  UAE MOFA Approved
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Home Country Verification
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Confidential & Secure Logistics
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES ================= */}
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Attestation FAQ</h2>
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
              Need Reliable Legal Support?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Our empathetic team ensures your documents are authenticated correctly 
              so you can focus on more important matters.
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