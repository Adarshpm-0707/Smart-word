import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Code, 
 
  Monitor, 
  Cpu, 
  ShieldCheck, 
  HelpCircle,
  Layout,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoftwareLocalization() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is software localization?",
      a: "Software localization involves translating and adapting a software product for a specific language, culture, and region. This includes UI text, date/time formats, currencies, and visual elements to ensure a native feel."
    },
    {
      q: "Which file formats do you support?",
      a: "We support all major developer formats including JSON, XML, .strings, .resx, .po, .yml, and many others, allowing for direct integration into your build process."
    },
    {
      q: "Do you provide localization testing?",
      a: "Yes. We perform rigorous linguistic, functional, and UI testing to ensure text fits within buttons, character encoding is correct, and the workflow is logical in the target language."
    },
    {
      q: "Can you localize mobile apps?",
      a: "Absolutely. We specialize in both iOS and Android localization, ensuring that your app meets the cultural and technical requirements of global App Stores."
    },
    {
      q: "How do you maintain translation quality in Agile environments?",
      a: "We use specialized translation memory tools and APIs that integrate with your CI/CD pipeline, ensuring rapid updates without compromising terminology consistency."
    }
  ];

  const features = [
    {
      title: "Localization Engineering",
      text: "Specialized linguists and technologists who understand code structures and variables.",
      icon: <Code size={26} />
    },
    {
      title: "Comprehensive QA",
      text: "Rigorous linguistic, functional, and UI checks to ensure a flawless user experience.",
      icon: <ShieldCheck size={26} />
    },
    {
      title: "Multi-Platform Support",
      text: "Native support for iOS, Android, Desktop, and Web applications without code disruption.",
      icon: <Monitor size={26} />
    },
    {
      title: "UI/UX Adaptation",
      text: "Adjusting layouts for right-to-left (RTL) languages like Arabic to ensure visual balance.",
      icon: <Layout size={26} />
    },
    {
      title: "Global Reach",
      text: "Transforming digital products to thrive in international markets with native resonance.",
      icon: <Globe size={26} />
    },
    {
      title: "Agile Ready",
      text: "Workflows designed for modern development cycles and continuous localization.",
      icon: <Cpu size={26} />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-100">
              <Code size={14} className="animate-pulse" />
              Software & App Localization
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Top Software <span className="text-[#2b9cb3]">Localization</span> Services in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Software localization is a specialized service that goes beyond 
                simple translation. It involves adapting your product’s 
                <strong> interface, functionality, and user experience</strong> for 
                specific global cultures.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "At Smart Word, we ensure your software is not only translated 
                  but transformed for global success, making applications feel 
                  natural to users worldwide."
                </p>
              </div>

              <p>
                From UI text and technical documentation to full code-safe 
                localization support, we bridge the gap between technical 
                accuracy and cultural relevance.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Deploy Globally</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ready to localize your software for the Middle East and beyond? Contact our tech specialists.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Code-Safe Translation
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Linguistic & Functional QA
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  RTL Interface Expertise
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
             Localization Excellence
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
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300 text-[#2b9cb3]">
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Localization FAQ</h2>
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