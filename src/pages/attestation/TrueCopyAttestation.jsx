import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Copy, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  DollarSign,
  UserCheck,
  Truck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrueCopyAttestation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is True Copy Attestation?",
      a: "True Copy Attestation is the process of certifying a photocopy of an original document as a true and accurate copy, usually by a notary public or licensed lawyer.",
    },
    {
      q: "When do I need True Copy Attestation?",
      a: "You typically need it when government authorities, banks, universities, or embassies require a copy of your document but you need to retain the original. It is common for visa applications, university admissions, and opening bank accounts.",
    },
    {
      q: "Which documents can be attested as true copies?",
      a: "Common documents include Passports, Emirates IDs, utility bills, tenancy contracts, academic degrees, and professional certifications.",
    },
    {
      q: "How long does the True Copy Attestation process take?",
      a: "The process is very quick. With Smart Word, most true copy certifications can be completed within the same day or 24 hours depending on the volume of documents.",
    },
    {
      q: "Do I need to bring the original document for attestation?",
      a: "Yes. A licensed lawyer or notary public must physically inspect the original document to verify that the photocopy is a 100% accurate and genuine representation.",
    },
  ];

  const features = [
    {
      title: "Legal Expertise",
      text: "Attestation carried out by licensed professionals and certified UAE notaries.",
      icon: <UserCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Quick Turnaround",
      text: "Fast certification services without compromising on accuracy or legal compliance.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Confidential & Secure",
      text: "Original documents are handled with the utmost care and strict data confidentiality.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Affordable Pricing",
      text: "Competitive and transparent pricing with no hidden fees for multi-document sets.",
      icon: <DollarSign className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Collection & Delivery",
      text: "Convenient service options including courier pick-up and drop-off at your location.",
      icon: <Truck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Representation",
      text: "Ensuring your photocopies are legally recognized by UAE banks and government bodies.",
      icon: <Copy className="text-[#2b9cb3]" size={24} />
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
              Licensed Notary Support
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Quick Licensed <span className="text-[#2b9cb3]">True Copy Attestation</span> in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                True Copy Attestation is an official process that certifies a 
                photocopy of an original document as a genuine and accurate 
                representation. This is essential when the original document 
                cannot be submitted or needs to be preserved.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "Our licensed lawyers and notaries verify your document against 
                  the original, certifying it with a legal seal and signature 
                  for immediate official use across the UAE."
                </p>
              </div>

              <p>
                Whether you need certified true copies for visa applications, 
                university admissions, or bank procedures, we handle your 
                documents with professional care, confidentiality, and full 
                compliance.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Certify Your Copies</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Protect your original documents while providing legally verified copies to the authorities.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official Notary Stamp
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Licensed Lawyer Verification
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Same-Day Service Available
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Get Started Now
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
            Why Choose Our Certification?
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">True Copy FAQ</h2>
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
              Need Reliable True Copy Services?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Get your photocopies legally certified by professional notaries for 
              bank, embassy, and government use.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}