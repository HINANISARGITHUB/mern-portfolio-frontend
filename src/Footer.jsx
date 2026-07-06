import React, { useState } from "react";
import "./App.css";

const Footer = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section className="w-full bg-slate-900 relative">
      {/* Title */}
      <h1 className="text-center text-[32px] md:text-[50px] font-semibold text-white pt-14 lg:pt-20 tracking-wide">
        Let's Start
      </h1>

      {/* Contact */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 mt-12">
        {/* Email */}
        <div
          onClick={() => copyToClipboard("hinanisar7860@gmail.com", "email")}
          className="cursor-pointer flex items-center justify-center w-[90%] max-w-90 min-h-16 px-4 py-4 rounded-xl shadow-[0_8px_30px_rgba(117,195,16,0.9)] transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
        >
          <i className="fa-solid fa-envelope text-white text-2xl"></i>
          <span className="text-white text-lg md:text-xl ml-3 md:ml-6">
            {copied === "email" ? "Copied!" : "hinanisar7860@gmail.com"}
          </span>
        </div>

        {/* Phone */}
        <div
          onClick={() => copyToClipboard("03126068303", "phone")}
          className="cursor-pointer flex items-center justify-center w-[90%] max-w-90 min-h-16 px-4 py-4 rounded-xl shadow-[0_8px_30px_rgba(117,195,16,0.9)] transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
        >
          <i className="fa-solid fa-phone text-white text-2xl"></i>
          <span className="text-white text-lg md:text-xl ml-3 md:ml-6">
            {copied === "phone" ? "Copied!" : "0312 6068303"}
          </span>
        </div>
      </div>

      {/* Location */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center justify-center w-[90%] max-w-90 min-h-16 px-4 py-4 rounded-xl shadow-[0_8px_30px_rgba(117,195,16,0.9)] transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
          <i className="fa-solid fa-location-dot text-white text-2xl"></i>
          <span className="text-white text-lg md:text-xl ml-3 md:ml-6">
            Karachi, Pakistan
          </span>
        </div>
      </div>

      {/* Social */}
      <div className="flex items-center justify-center gap-5 md:gap-6 mt-20 flex-wrap">
        <div className="hidden md:block w-125 h-1 bg-[#75C310]"></div>

        <a
          href="https://www.linkedin.com/in/hina-nisar-a515492b5"
          target="_blank"
          rel="noreferrer"
          className="text-white text-2xl hover:text-[#75C310] transition-transform duration-400 hover:scale-110"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a
          href="https://wa.me/923126068303"
          target="_blank"
          rel="noreferrer"
          className="text-white text-2xl hover:text-[#75C310] transition-transform duration-400 hover:scale-110"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <a
          href="https://github.com/HINANISARGITHUB"
          target="_blank"
          rel="noreferrer"
          className="text-white text-2xl hover:text-[#75C310] transition-transform duration-400 hover:scale-110"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <div className="hidden md:block w-125 h-1 bg-[#75C310]"></div>
      </div>

      {/* Thanks */}
      <p className="text-center text-[22px] md:text-[30px] text-white mt-16 bg-slate-700 py-5 font-serif">
        Thanks for Scrolling
      </p>
    </section>
  );
};

export default Footer;