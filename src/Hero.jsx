import { useEffect, useRef, useState } from "react";
import "./App.css";
import { hero } from "./images";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const Hero = () => {
  const [typingText, setTypingText] = useState("");
const roles = ["MERN Stack Developer", "Web Application Developer", "React.js Developer"];
  const timeoutRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex <= currentRole.length) {
        setTypingText(currentRole.substring(0, charIndex));
        charIndex++;
        timeoutRef.current = setTimeout(typeLoop, 120);
      } else if (isDeleting && charIndex >= 0) {
        setTypingText(currentRole.substring(0, charIndex));
        charIndex--;
        timeoutRef.current = setTimeout(typeLoop, 60);
      } else if (!isDeleting && charIndex > currentRole.length) {
        timeoutRef.current = setTimeout(() => {
          isDeleting = true;
          typeLoop();
        }, 1500);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        timeoutRef.current = setTimeout(typeLoop, 400);
      }
    }

    typeLoop();

    // Cleanup: purana loop rok do jab component unmount/remount ho
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hina-nisar-a515492b5", "_blank");
  };

  return (
    <section className="w-full bg-slate-800 shadow-[0_4px_5px_-1px_rgba(117,195,16,1)] px-0 py-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 lg:px-0 md:ml-12 md:mb-12">
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-4 mt-8 md:mt-16 md:ml-12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            I am Hina Nisar
          </h1>

          {/* Typing text */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#75c310] min-h-15 flex items-center justify-center md:justify-start text-center md:text-left">
            {typingText}
            <span className="ml-1 cursor-blink">|</span>
          </h2>

          <p className="text-lg md:text-[18px] font-medium text-[#e5e4e2] leading-relaxed max-w-145 mt-5 text-justify">
            I build complete web applications from front to back using the{" "}
            <span className="text-[#75c310] font-semibold">MERN stack</span> —
            MongoDB, Express, React, and Node.js. From designing clean,
            responsive UIs to building secure APIs and databases, I turn ideas
            into fully functional, production-ready products. Every project is
            a chance to solve real problems and deliver real value.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={openLinkedIn}
              className="w-40 h-12 md:w-50 md:h-15 bg-[#75c310] hover:bg-[#5aa10c] text-black text-1xl md:text-xl font-bold flex items-center justify-center gap-3 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              HIRE ME
              <FaArrowRight />
            </button>

            <a
              href="/cv-pdf.pdf"
              download
              className="w-40 h-12 md:w-50 md:h-15 border-2 border-[#75c310] text-[#75c310] hover:bg-[#75c310] hover:text-black text-1xl md:text-xl font-bold flex items-center justify-center gap-3 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              RESUME
              <FaDownload />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={hero}
            alt="Hina Nisar"
            className="w-75 md:w-108 drop-shadow-[0_10px_20px_rgba(117,195,16,0.5)] animate-[shadowMove_3s_ease-in-out_infinite_alternate]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;