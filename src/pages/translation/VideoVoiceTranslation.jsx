import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Mic, 
  Video, 
  Gavel, 
  ShieldCheck, 
  Languages, 
  HelpCircle,
  Activity,
  Headphones
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LegalVideoVoiceTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of legal media can you translate?",
      a: "We translate court recordings, legal interviews, depositions, police statements, training videos, corporate legal presentations, and webinars."
    },
    {
      q: "Do you provide subtitles for legal videos?",
      a: "Yes, we provide professionally time-coded subtitles in multiple languages, ensuring they are perfectly synchronized with the legal dialogue."
    },
    {
      q: "Is my legal audio kept confidential?",
      a: "Confidentiality is our highest priority. We use encrypted file transfers and all our linguists sign strict non-disclosure agreements (NDAs)."
    },
    {
      q: "Can you translate multilingual legal recordings?",
      a: "Absolutely. Our team can handle recordings containing multiple languages and dialects, providing a clear and unified translated transcript or voice-over."
    },
    {
      q: "Do you offer urgent legal media translation?",
      a: "Yes, we have an express team dedicated to urgent legal matters, capable of delivering high-quality translations within 12-24 hours for time-sensitive cases."
    }
  ];

  const features = [
    {
      title: "Audio/Visual Precision",
      text: "Accurate translation of legal recordings, interviews, and courtroom materials.",
      icon: <Mic className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Voice-Over & Subtitles",
      text: "Professional localization for legal media ensuring synchronization and clarity.",
      icon: <Video className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Legal Terminology",
      text: "Native linguists experienced in judicial systems and legal compliance.",
      icon: <Gavel className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Secure Handling",
      text: "Confidential protocols for processing sensitive and private legal content.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "50+ Languages",
      text: "Global support for multilingual legal communications and cross-border media.",
      icon: <Languages className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Certified Quality",
      text: "Every project undergoes a rigorous linguistic and legal review for 100% accuracy.",
      icon: <Activity className="text-[#2b9cb3]" size={26} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <Headphones size={14} className="animate-pulse" />
              Specialized Legal Media Solutions
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Professional <span className="text-[#2b9cb3]">Legal Video & Voice</span> Translation
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Audio translation breaks linguistic barriers in an increasingly digital world. 
                Our specialized legal media services ensure that spoken legal content is 
                accurately interpreted and localized while preserving its 
                <strong> strict legal intent</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "We translate interviews, court recordings, and hearings with precision. 
                  Every project undergoes a dual linguistic and legal review to ensure 
                  compliance and clarity."
                </p>
              </div>

              <p>
                From corporate legal media to complex courtroom statements, our experts 
                provide the technical synchronization and terminology accuracy your 
                legal cases require.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Your Translation</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Expert handling of legal voice and video files. Get your quote in minutes.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ministry Approved Translators
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Time-Synced Subtitling
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  ISO-Certified Security
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Contact Us Now
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
             Core Service Features
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Legal Media FAQ</h2>
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