import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Languages,
  ShieldCheck,
  PenTool,
  ArrowRight,
  Star,
  Check
} from "lucide-react";

/* ================= ASSET ================= */
import cityImg from "../assets/city.jpg";

/* ================= COUNTER ================= */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      let start = 0;
      const duration = 2000;
      const frames = 60;
      const increment = end / frames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, duration / frames);
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ================= MARQUEE ================= */
const Marquee = () => (
  <div className="overflow-hidden bg-[#2c9cb0] py-4 text-white">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center mx-8">
          <Star size={16} className="mr-4 fill-white" />
          <span className="font-bold uppercase tracking-widest">
            Certified Translation • Legal Attestation • Global Notarization •
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

/* ================= LANGUAGE SHOWCASE ================= */
const LanguageShowcase = () => {
  const languages = [
    "English → Arabic",
    "Arabic → English",
    "French → Arabic",
    "Hindi → English",
    "Malayalam → Arabic",
    "German → English",
    "Russian → Arabic",
    "Chinese → English",
    "Spanish → Arabic",
    "Italian → English"
  ];

  return (
    <section className="py-16 bg-[#0b0f19] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">
          Translation Across Languages
        </h2>
        <p className="text-slate-400 mt-4">
          Professional translation connecting businesses worldwide.
        </p>
      </div>

      <motion.div
        className="flex whitespace-nowrap gap-6 md:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {[...languages, ...languages].map((lang, i) => (
          <div
            key={i}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full
            bg-white/5 border border-white/10
            text-sm md:text-lg font-semibold"
          >
            {lang}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

/* ================= HOME ================= */
export default function Home() {

  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const services = [
    {
      title: "Translation",
      desc: "Legal, medical, and technical translation.",
      link: "/translation",
      icon: <Languages size={32} />,
    },
    {
      title: "Attestation",
      desc: "MOFA & Embassy legalization support.",
      link: "/attestation",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Notarization",
      desc: "Official drafting and notarization.",
      link: "/notarization",
      icon: <PenTool size={32} />,
    },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Languages" },
    { value: 2500, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Success Rate" },
    { value: 12, suffix: "+", label: "Years Active" },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#0b0f19] text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black">
              Your Words,
              <br />
              <span className="text-[#2c9cb0]">Global Impact</span>
            </h1>

            <p className="text-slate-400 mt-6 max-w-xl">
              Certified legal translation and authentication for international operations.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-4 bg-[#2c9cb0] rounded-full font-bold"
            >
              Get Free Quote
            </Link>
          </div>

          {/* IMAGE + POPUP */}
          <div className="relative">

            <motion.img
              style={{ y: yImage }}
              src={cityImg}
              alt="Hero"
              className="rounded-3xl shadow-2xl w-full"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                absolute
                left-1/1 -translate-x-1/2
                bottom-1
                sm:left-6 sm:translate-x-0 sm:bottom-6
                bg-white text-slate-900
                rounded-xl md:rounded-2xl
                px-4 py-3 md:p-5
                shadow-xl
                w-[45%] sm:w-auto
                max-w-[180px]
              "
            >
              <p className="font-semibold text-xs md:text-sm">
                Trusted by 2500+ clients worldwide
              </p>

              <div className="flex gap-1 mt-2 text-[#2c9cb0]">
                <Check size={14}/>
                <Check size={14}/>
                <Check size={14}/>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Marquee />
      <LanguageShowcase />

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow border"
            >
              <div className="text-[#2c9cb0]">{s.icon}</div>
              <h3 className="text-2xl font-bold mt-6">{s.title}</h3>
              <p className="text-slate-500 mt-3">{s.desc}</p>

              <Link
                to={s.link}
                className="flex items-center gap-2 mt-6 font-bold text-[#2c9cb0]"
              >
                Explore <ArrowRight size={18}/>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-white border-t mb-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl py-10 shadow-sm">
              <div className="text-5xl font-black">
                <Counter end={stat.value} suffix={stat.suffix}/>
              </div>
              <p className="text-[#2c9cb0] font-bold mt-3 text-sm uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}