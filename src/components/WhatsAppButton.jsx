import React from "react";
import { motion } from "framer-motion";

/* WhatsApp SVG (original style icon) */
export default function WhatsAppButton() {

  // WhatsApp number (no spaces or + sign)
  const phoneNumber = "971522402909";

  const message = encodeURIComponent(
    "Hello, I would like to enquire about your services."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed
        bottom-5
        right-5
        md:bottom-6
        md:right-6
        z-[9999]
        w-14 h-14
        md:w-16 md:h-16
        rounded-full
        bg-[#25D366]
        shadow-2xl
        flex
        items-center
        justify-center
      "
    >
      {/* ORIGINAL WHATSAPP ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.5c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-6.9 15.6-15.5S24.6.4 16 .4zm0 28.3c-2.4 0-4.8-.6-6.9-1.8l-.5-.3-5 .1 1.6-4.9-.3-.5c-1.3-2.1-2-4.5-2-6.9C2.9 8.3 8.4 2.9 16 2.9s13.1 5.4 13.1 12.5S23.6 28.7 16 28.7zm7.2-9.4c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2 0 1.9 1.4 3.7 1.6 4 .2.3 2.8 4.3 6.8 6 .9.4 1.7.6 2.3.8 1 .3 1.9.2 2.6.1.8-.1 2.3-1 2.6-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5z"/>
      </svg>
    </motion.a>
  );
}