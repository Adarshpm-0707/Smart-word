import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  PlayCircle, 
  Captions, 
  Globe, 
 
  Settings,
  HelpCircle,
  Video
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubtitlingTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of videos do you subtitle?",
      a: "We subtitle corporate videos, social media ads, documentaries, e-learning modules, YouTube content, webinars, and feature films."
    },
    {
      q: "Which languages do you support for subtitling?",
      a: "We support over 50+ languages, including Arabic, English, French, Spanish, Russian, Chinese, Hindi, and Urdu, with native-level accuracy."
    },
    {
      q: "Do you provide time-coded subtitles?",
      a: "Yes, every subtitle we produce is perfectly time-synchronized with the audio using professional time-coding software."
    },
    {
      q: "Can you embed subtitles into the video?",
      a: "Absolutely. We can provide 'sidecar' files (like .SRT or .VTT) or 'burn-in' the subtitles directly into the video file (hard-coded)."
    },
    {
      q: "How do you ensure subtitle accuracy?",
      a: "Our process includes a three-step review: translation by native linguists, time-syncing by technical editors, and a final QC (Quality Control) check for readability."
    }
  ];

  const features = [
    {
      title: "Native Linguists",
      text: "Professional editors ensuring accurate translations with native-level language understanding.",
      icon: <Globe size={26} />
    },
    {
      title: "All Formats Supported",
      text: "Compatibility with SRT, VTT, ASS, and STL for YouTube, TV, and OTT platforms.",
      icon: <Video size={26} />
    },
    {
      title: "Cultural Adaptation",
      text: "We localize meaning, idioms, and narrative impact rather than just word-for-word translation.",
      icon: <Captions size={26} />
    },
    {
      title: "Accessibility Standards",
      text: "Subtitles meet international media guidelines and accessibility requirements.",
      icon: <Settings size={26} />
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
              <PlayCircle size={14} className="animate-pulse" />
              Professional Media Services
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Expert Multilingual <span className="text-[#2b9cb3]">Subtitling Services</span> in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Subtitling is a powerful tool that connects visual content to 
                global audiences. At Smart Word, we ensure your message is 
                understood clearly — no matter the language or region.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "We go beyond literal translation by localizing meaning, tone, 
                  and expression while maintaining the narrative integrity of 
                  your visual content."
                </p>
              </div>

              <p>
                Whether it’s corporate training, promotional content, or e-learning 
                modules, our team provides culturally appropriate and perfectly 
                time-coded subtitles that enhance viewer engagement.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Your Project</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Reach a wider audience with perfectly synchronized subtitles. Get a free consultation today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Perfect Time-Syncing
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  50+ Languages Supported
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  SRT, VTT & Burn-in Options
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
             Why Choose Our Subtitling Expertise?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#2b9cb3]/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group flex gap-6"
              >
                <div className="w-16 h-16 bg-cyan-50 rounded-xl flex-shrink-0 flex items-center justify-center text-[#2b9cb3] group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Subtitling Services FAQ</h2>
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