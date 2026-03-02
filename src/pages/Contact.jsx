import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

/* ================= X (TWITTER) LOGO ================= */
function XLogo({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2H21.5l-7.19 8.21L22 22h-6.828l-5.34-6.99L3.5 22H.244l7.69-8.79L2 2h6.828l4.83 6.37L18.244 2Zm-2.39 18h1.89L7.02 3.89H5.02L15.854 20Z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="relative bg-[#f0f4f8] py-12 px-4 sm:px-6 overflow-hidden mt-16">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#2b9cb3]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2b9cb3]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ========= LEFT INFO ========= */}
          <div className="lg:col-span-5 space-y-6">

            <div className="space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-[#2b9cb3]/10 text-[#2b9cb3] text-xs font-bold uppercase">
                Get In Touch
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Let’s start a{" "}
                <span className="text-[#2b9cb3]">conversation.</span>
              </h2>

              <p className="text-sm text-slate-600">
                Our expert team is ready to help you with translation and
                documentation services.
              </p>
            </div>

            {/* CONTACT ITEMS */}
            <div className="space-y-3">
              <ContactLink
                icon={<MapPin size={20} />}
                title="Location"
                detail="Dubai, UAE"
              />

              <ContactLink
                icon={<Mail size={20} />}
                title="Email"
                detail="info@smartword.ae"
              />

              <ContactLink
                icon={<Phone size={20} />}
                title="Phone"
                detail="+971 52 240 2909"
              />

              <ContactLink
                icon={<Clock size={20} />}
                title="Operation Hours"
                detail={
                  <>
                    Mon–Fri: 8:30am–5:00pm <br />
                    Sat: 9:30am–1:00pm <br />
                    Sun: Closed
                  </>
                }
              />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-3 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<XLogo size={18} />} />
            </div>

          </div>

          {/* ========= FORM ========= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg border p-5 sm:p-7">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Full Name" placeholder="John Doe" />
                  <Input label="Email" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Phone" placeholder="+971 -- --- ----" />

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-[#2b9cb3]/40">
                      <option>General Inquiry</option>
                      <option>Business Proposal</option>
                      <option>Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-[#2b9cb3]/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2b9cb3] text-white font-semibold py-3 rounded-xl hover:bg-[#23879c] transition flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ========= GOOGLE MAP SECTION ========= */}
        <div className="mt-16 mb-8 ">
          <div className="text-center mb-8 ">
             <span className="px-3 py-1 rounded-full bg-[#2b9cb3]/10 text-[#2b9cb3] text-xs font-bold uppercase">
                Find Us
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                Visit Our Office
              </h2>
          </div>
          
          <div className="w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg border bg-white p-2 mb-14">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230913.35472403627!2d55.2281898!3d25.2695191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e508d59a0ff!2sDubai!5e0!3m2!1sen!2sae!4v1709380000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ========= INPUT ========= */
function Input({ label, placeholder }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-slate-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-[#2b9cb3]/40"
      />
    </div>
  );
}

/* ========= CONTACT CARD ========= */
function ContactLink({ icon, title, detail }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow text-[#2b9cb3]">
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-bold text-[#2b9cb3] uppercase">
          {title}
        </p>
        <p className="text-sm font-semibold text-slate-800 leading-snug">
          {detail}
        </p>
      </div>
    </div>
  );
}

/* ========= SOCIAL ICON ========= */
function SocialIcon({ icon }) {
  return (
    <button
      type="button"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow text-[#2b9cb3] hover:bg-[#2b9cb3] hover:text-white transition"
    >
      {icon}
    </button>
  );
}