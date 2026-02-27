import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check,  Shield, Globe, Zap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Freezone() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "100% Foreign Ownership",
      desc: "Retain complete control of your business without the need for a local Emirati partner or sponsor.",
      icon: <Shield className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Full Capital Repatriation",
      desc: "Transfer 100% of your profits and capital back to your home country without any restrictions.",
      icon: <Globe className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Strategic Market Entry",
      desc: "Strong competitive advantages and rapid market entry through streamlined digital licensing.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    }
  ];

  const faqs = [
    {
      q: "What is a Freezone company in the UAE?",
      a: "A UAE Freezone company is a business entity incorporated within a specific economic jurisdiction that allows 100% foreign ownership, full profit repatriation, and tax exemptions. It is one of the fastest and most cost-efficient business setup options."
    },
    {
      q: "Can I do business within UAE mainland with a Freezone company?",
      a: "Directly, no. Freezone companies are intended to trade within the Freezone or internationally. To trade on the mainland, you can work through a distributor, establish a branch, or clear goods through a mainland agent."
    },
    {
      q: "What documents are required to set up a Freezone company?",
      a: "Generally, you need passport copies of shareholders, a brief business plan, proof of address, and a No Objection Certificate (NOC) if you are currently employed in the UAE."
    },
    {
      q: "How long does it take to set up a Freezone company?",
      a: "Most Freezone licenses are issued within 3 to 7 working days, depending on the specific jurisdiction and the complexity of the business activity."
    },
    {
      q: "Do I need a physical office to open a Freezone company?",
      a: "Not necessarily. Many Freezones offer 'Flexi-desk' or 'Virtual Office' packages that fulfill the legal requirement for a business address without the cost of a full physical office."
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER SECTION ================= */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">

          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <nav className="flex items-center gap-2 text-[#2b9cb3] font-black tracking-widest uppercase text-xs mb-4">
              <span className="w-8 h-[2px] bg-[#2b9cb3]"></span>
              Service Details
            </nav>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              Expert <span className="text-[#2b9cb3]">Freezone Business</span> Setup in Dubai
            </h1>

            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                Setting up a business in a UAE Freezone is one of the most
                efficient and investor-friendly ways to establish your presence
                in the region. Freezones offer 100% foreign ownership, full
                repatriation of profits, tax exemptions, and simplified licensing
                procedures.
              </p>
              <p>
                Whether you're a startup, entrepreneur, or international company
                expanding to Dubai, Freezone company formation provides a
                strategic advantage through modern infrastructure, streamlined
                processes, and strong government support.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-[30px] p-8 shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Get Started</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">
              Ready to launch your Freezone venture? Our specialists handle the paperwork while you focus on your vision.
            </p>

            <ul className="space-y-4 mb-8 relative z-10">
              {["Fast Turnaround", "Digital Processing", "Banking Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <div className="bg-[#2b9cb3] p-1 rounded-full"><Check size={12} /></div>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#23879b] transition-all active:scale-95 relative z-10"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12 text-center md:text-left">
            Jurisdiction Advantages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[30px] shadow-lg shadow-slate-200/50 border border-slate-50 transition-all group"
              >
                <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-bold transition-colors ${openIndex === index ? 'text-[#2b9cb3]' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full transition-all ${openIndex === index ? 'bg-[#2b9cb3] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
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