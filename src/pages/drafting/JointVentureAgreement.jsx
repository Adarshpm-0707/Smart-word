import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Handshake, 
  Scale, 
  Users, 
  ShieldCheck, 
  Briefcase, 
  HelpCircle,
  FileText,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function JointVentureAgreement() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a Joint Venture Agreement?",
      a: "A joint venture agreement is a legal contract between two or more parties collaborating on a specific business project while remaining independent legal entities. It outlines how they will share resources, profits, and risks."
    },
    {
      q: "Is a joint venture the same as a partnership?",
      a: "Not exactly. A partnership is usually an ongoing business relationship, whereas a Joint Venture (JV) is often formed for a specific project or a limited timeframe, though it can lead to a long-term partnership."
    },
    {
      q: "Do I need a local partner for a joint venture in the UAE?",
      a: "This depends on the activity and whether the JV is located in a Free Zone or Onshore. With recent FDI law changes, many activities allow 100% foreign ownership, but many strategic sectors still benefit from a local partner."
    },
    {
      q: "Can Smart Word help draft the entire agreement?",
      a: "Yes. Our legal experts provide end-to-end support, including structuring the JV, drafting the agreement, ensuring compliance with UAE Civil Law, and coordinating notarization."
    },
    {
      q: "How long does it take to finalize a joint venture agreement?",
      a: "Drafting typically takes 3-5 business days. The finalization depends on the complexity of the negotiations between parties and the time required for government registration if applicable."
    }
  ];

  const features = [
    {
      title: "UAE Law Compliance",
      text: "Legal expertise ensuring compliance with UAE Commercial and Civil Law, including FDI regulations.",
      icon: <Scale size={26} />
    },
    {
      title: "Custom Solutions",
      text: "Agreements tailored to your specific industry, business goals, and partner expectations.",
      icon: <Briefcase size={26} />
    },
    {
      title: "Risk Mitigation",
      text: "Strong financial and operational protection clauses to safeguard all stakeholders.",
      icon: <ShieldCheck size={26} />
    },
    {
      title: "Secure Handling",
      text: "Confidential and secure management of sensitive business and financial information.",
      icon: <Users size={26} />
    },
    {
      title: "End-to-End Support",
      text: "Full service from initial consultation and drafting to final notarization and registration.",
      icon: <FileText size={26} />
    },
    {
      title: "Strategic Growth",
      text: "Structured to facilitate resource sharing and market access for foreign and local investors.",
      icon: <TrendingUp size={26} />
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
              <Handshake size={14} className="animate-pulse" />
              Strategic Business Partnerships
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Expert <span className="text-[#2b9cb3]">Joint Venture</span> Agreement Services UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A Joint Venture Agreement is a strategic business arrangement 
                between two or more parties. In the UAE, these are commonly 
                used by foreign investors partnering with local companies to 
                <strong> share resources, expertise, and market access</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Our legal experts ensure your agreement is customized, 
                  compliant with UAE regulations, and structured to protect all 
                  stakeholders involved in the venture."
                </p>
              </div>

              <p>
                This agreement outlines key aspects such as capital contributions, 
                profit-sharing ratios, management structure, and dispute resolution 
                methods, providing a solid legal foundation for your collaboration.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Protect Your Venture</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ready to structure your Joint Venture in the UAE? Consult with our legal drafting experts.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  UAE Commercial Law Compliant
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Custom Profit-Sharing Clauses
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Dispute Resolution Framework
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Joint Venture FAQ</h2>
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