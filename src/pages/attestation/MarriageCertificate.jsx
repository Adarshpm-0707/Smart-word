import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Heart, 
  Globe, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  DollarSign,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MarriageCertificate() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why do I need to attest my marriage certificate in the UAE?",
      a: "Marriage certificate attestation is required for sponsoring a spouse or family, applying for residence visas, and other legal purposes where marital status verification is needed by UAE authorities.",
    },
    {
      q: "What is the process for attesting a marriage certificate?",
      a: "The process typically includes notarization in the home country, home country attestation (MEA/Ministry of Foreign Affairs), UAE Embassy attestation in that country, and final MOFA attestation within the UAE.",
    },
    {
      q: "How long does it take to get a marriage certificate attested?",
      a: "Processing time depends on the issuing country and authority approvals but generally takes several working days to a few weeks. We offer express options for urgent cases.",
    },
    {
      q: "Can I submit a digital copy for attestation?",
      a: "Initial verification can often be done with digital copies, but the physical original document is required for the actual government attestation stamps.",
    },
    {
      q: "Do you offer certified translation services before attestation?",
      a: "Yes, certified legal translation into Arabic is often a mandatory step for UAE government submission, and we provide this as part of our full-service package.",
    },
  ];

  const features = [
    {
      title: "Global Attestation",
      text: "End-to-end attestation for marriage certificates issued in any country across the globe.",
      icon: <Globe className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Real-Time Updates",
      text: "Transparent process with real-time tracking so you always know where your document is.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Competitive Pricing",
      text: "Affordable and transparent pricing with no hidden charges for embassy or MOFA fees.",
      icon: <DollarSign className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Secure Logistics",
      text: "Guaranteed secure handling and complete confidentiality for your personal legal papers.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Expert Support",
      text: "Knowledgeable customer support to guide you through visa and sponsorship requirements.",
      icon: <MessageCircle className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Translation",
      text: "In-house legal translation services to ensure your documents meet UAE judicial standards.",
      icon: <Heart className="text-[#2b9cb3]" size={24} />
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
              Legal Document Specialist
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Expert <span className="text-[#2b9cb3]">Marriage Certificate</span> Attestation in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Marriage certificate attestation is a vital legal process that 
                verifies the authenticity of a marriage document issued outside 
                or within the UAE. This is mandatory for family residency 
                applications and sponsorship.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we manage the entire verification cycle—from notarization 
                  in your home country to final MOFA attestation in Dubai—ensuring 
                  seamless sponsorship for your family."
                </p>
              </div>

              <p>
                Whether you are moving to the UAE or sponsoring a spouse, our 
                specialists ensure your documents follow the strict compliance 
                standards of UAE Ministry guidelines for error-free submission.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Sponsor Your Spouse</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need help with family visa documentation? Get your marriage certificate verified by our experts.
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
                  Arabic Translation Support
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
            Why Choose Our Attestation Service?
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Marriage Certificate FAQ</h2>
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
              Need Reliable Attestation Services?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Ensure your marriage certificate is verified correctly for family visa 
              sponsorship without delays or legal hurdles.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}