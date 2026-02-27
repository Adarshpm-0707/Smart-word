import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Globe, 
  Search, 
  Monitor, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Layout,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DigitalContentTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of digital content do you translate?",
      a: "We translate websites, landing pages, blogs, product descriptions, mobile applications, email marketing campaigns, newsletters, social media posts, and digital advertisements."
    },
    {
      q: "Can you help with multilingual SEO?",
      a: "Yes. We don't just translate words; we localize your metadata, image alt-tags, and keywords to ensure your website ranks highly in local search engines like Google Arabic."
    },
    {
      q: "Will my site layout be affected by translation?",
      a: "Our linguists are trained in 'Desktop Publishing' (DTP) awareness. We ensure that translated text (which can be longer in languages like Arabic or French) fits your design perfectly."
    },
    {
      q: "Do you support e-commerce platforms?",
      a: "Absolutely. We have extensive experience with Shopify, Magento, WooCommerce, and Amazon product listing translations."
    },
    {
      q: "How often can I update content?",
      a: "We offer ongoing support packages for blogs and news sites, allowing you to send weekly or even daily updates for rapid translation."
    }
  ];

  const features = [
    {
      title: "SEO Optimization",
      text: "Localized SEO keywords, metadata, and translated content to boost global rankings.",
      icon: <Search size={26} />
    },
    {
      title: "Brand Consistency",
      text: "Maintaining your unique brand voice, tone, and identity across all digital platforms.",
      icon: <ShieldCheck size={26} />
    },
    {
      title: "CMS Compatibility",
      text: "Seamless support for WordPress, Shopify, Wix, and other custom CMS platforms.",
      icon: <Layout size={26} />
    },
    {
      title: "Global Reach",
      text: "Localized content that resonates with specific cultural nuances and buyer personas.",
      icon: <Globe size={26} />
    },
    {
      title: "Mobile App Ready",
      text: "Specialized strings translation for iOS and Android app localization.",
      icon: <Monitor size={26} />
    },
    {
      title: "High Performance",
      text: "Fast delivery to keep up with the speed of social media and digital marketing trends.",
      icon: <Zap size={26} />
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
              <Cpu size={14} className="animate-pulse" />
              Next-Gen Digital Localization
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Top Digital <span className="text-[#2b9cb3]">Content Translation</span> in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                In today’s digital-first world, your website is often the first
                impression customers have of your brand. We help businesses 
                reach global audiences through <strong>professionally localized</strong> 
                digital content.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Our services ensure your message remains culturally relevant, 
                  search-optimized, and perfectly aligned with your brand voice 
                  across all online platforms."
                </p>
              </div>

              <p>
                Whether you run an e-commerce store or a corporate platform, 
                we ensure you communicate clearly in the right language to reach 
                the right audience worldwide.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Go Global</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ready to translate your digital presence for the UAE and international markets?
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  SEO-Friendly Translation
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Native Creative Linguists
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  API & CMS Integration Support
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
             Digital Service Excellence
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Digital Translation FAQ</h2>
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