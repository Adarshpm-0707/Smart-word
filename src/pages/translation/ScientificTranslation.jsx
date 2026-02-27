import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Beaker, 
  Microscope, 
 
  ShieldCheck, 
  Globe, 
  HelpCircle,
  FileText,
  FlaskConical,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScientificTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of scientific documents do you translate?",
      a: "We translate research papers, lab reports, clinical trial documents, dissertations, academic journals, pharmaceutical guidelines, patents, and environmental reports."
    },
    {
      q: "Do you provide certified translations for journal submissions?",
      a: "Yes. Our translations are certified and formatted to meet the specific requirements of international publishers and peer-reviewed journals."
    },
    {
      q: "Are your scientific translators field specialists?",
      a: "Absolutely. We assign your project to linguists who hold advanced degrees in fields like Chemistry, Biology, Physics, or Bio-medicine to ensure technical accuracy."
    },
    {
      q: "How do you ensure terminology accuracy?",
      a: "We use standardized scientific glossaries and a multi-step quality control process where a second subject-matter expert reviews the translation for technical precision."
    },
    {
      q: "Can you translate scientific content into multiple languages?",
      a: "Yes, we support over 50+ languages, facilitating global collaboration for research teams and pharmaceutical companies worldwide."
    }
  ];

  const features = [
    {
      title: "Subject-Matter Experts",
      text: "Linguists with academic backgrounds in medicine, chemistry, and biology.",
      icon: <Beaker className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "International Standards",
      text: "Formatting and terminology aligned with global scientific and academic publishing.",
      icon: <FlaskConical className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Secure & Compliant",
      text: "Confidential handling of sensitive laboratory data and technical patents.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Multilingual Reach",
      text: "Facilitating global collaboration through accurate 50+ language support.",
      icon: <Globe className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Reference Accuracy",
      text: "High consistency aligned with referencing formats (APA, MLA, Vancouver, etc).",
      icon: <FileText className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Rapid Turnaround",
      text: "Efficient delivery systems for time-sensitive research and clinical trials.",
      icon: <Zap className="text-[#2b9cb3]" size={26} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-100">
              <Microscope size={14} className="animate-pulse" />
              Technical & Research Expertise
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Professional <span className="text-[#2b9cb3]">Scientific Translation</span> Services in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Scientific translation facilitates global collaboration and research 
                innovation. Dubai’s growing research institutions and healthcare 
                sectors require accuracy that maintains <strong>technical precision</strong> 
                and subject integrity.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Our translators preserve domain-specific terminology and 
                  contextual meaning to meet the highest international academic 
                  and professional standards."
                </p>
              </div>

              <p>
                Whether it is academic journals, clinical studies, or pharmaceutical 
                materials, we ensure your findings are communicated clearly across 
                linguistic borders without losing scientific value.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Sticky on Laptop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[380px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get a Free Consultation</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ensure the precision of your scientific data with our specialized linguists.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Subject-Matter Field Specialists
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Journal-Ready Formatting
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  ISO-Certified Quality Checks
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES SECTION ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12"
          >
             Why Trust Our Scientific Expertise?
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Scientific Translation FAQ</h2>
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

      </div>
    </div>
  );
}