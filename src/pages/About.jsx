import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import {
  hero,
  githup,
  bootstrap,
  firebase,
  css,
  gsap,
  html,
  javascript,
  next,
  node,
  express,
  react as reactImg,
  tailwind,
  typescript,
  vercel,
  mongodb,
} from "../images";

const skills = [
  { name: "HTML", level: "w-full" },
  { name: "CSS", level: "w-[85%]" },
  { name: "JavaScript", level: "w-[85%]" },
  { name: "React.js", level: "w-[85%]" },
  { name: "Node.js", level: "w-[80%]" },
  { name: "Express.js", level: "w-[80%]" },
  { name: "MongoDB", level: "w-[85%]" },
  { name: "Tailwind CSS", level: "w-[90%]" },
  { name: "JWT / Auth", level: "w-[75%]" },
  { name: "TypeScript", level: "w-[55%]" },
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "13+" },
  { label: "MERN Stack", value: "Full Cycle" },
  { label: "Based In", value: "Karachi" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      setActive(sectionTop < screenHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="w-full bg-slate-800 lg:px-2 pt-20">
        <div className="flex flex-col md:flex-row lg:gap-22 lg:ml-18">
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src={hero}
              alt="Hina Nisar"
              className="w-64 sm:w-80 md:w-96 border border-[#75c310] bg-slate-800 drop-shadow-[0_10px_20px_rgba(117,195,16,0.5)] animate-pulse"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center md:text-left md:ml-10">
              About Me
            </h1>
            <p className="text-justify text-base sm:text-lg leading-7 sm:leading-8 text-gray-200 px-8 lg:px-0 mt-6">
              Hi! I'm{" "}
              <span className="text-[#75c310] font-semibold">Hina Nisar</span>,
              a MERN Stack Developer who builds complete web applications from
              front to back — clean React interfaces on the frontend, and
              secure, scalable APIs with Node.js, Express, and MongoDB on the
              backend. I focus on writing maintainable code, designing
              responsive UIs, and deploying production-ready apps end to end.
            </p>

            <div className="ml-4 sm:ml-10 mt-6 sm:mt-10 text-base sm:text-lg text-gray-200">
              <h4 className="mb-2 sm:mb-4 font-semibold ml-8 lg:ml-0">
                Quick bits about me:
              </h4>
              <div className="flex flex-col sm:flex-row sm:gap-16 gap-4 ml-8 lg:ml-0">
                <ul className="list-disc marker:text-[#75c310] mb-4">
                  <li>MERN Stack Developer</li>
                  <li>Trained at SMIT</li>
                </ul>
                <ul className="list-disc marker:text-[#75c310]">
                  <li>Governor House IT Initiative</li>
                  <li>Based in Karachi, Pakistan</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="ml-8 lg:ml-0 mt-8">
              <button
                onClick={() => navigate("/portfolio")}
                className="px-8 py-3 bg-[#75c310] hover:bg-[#5aa10c] text-black font-bold rounded-md transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>

        

        {/* Skill Icons */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mt-12 sm:mt-28 text-white">
          My Skills
        </h1>
        <p className="text-center text-[15px] sm:text-[22px] mt-4 sm:mt-6 text-gray-300 px-4 md:px-0">
          Technologies I work with day to day:
        </p>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-8 sm:mt-16 px-4 md:px-20">
          {[
            { name: "HTML", img: html },
            { name: "CSS", img: css },
            { name: "JavaScript", img: javascript },
            { name: "React", img: reactImg },
            { name: "Node.Js", img: node },
            { name: "Express.Js", img: express },
            { name: "Mongodb", img: mongodb },
            { name: "Tailwind", img: tailwind },
            { name: "Vercel", img: vercel },
            { name: "GitHub", img: githup },
            { name: "Firebase", img: firebase },
            { name: "Bootstrap", img: bootstrap },
            { name: "GSAP", img: gsap },
          ].map((skill) => (
            <div
              key={skill.name}
              className="p-4 sm:p-5 rounded-2xl text-center shadow-[0_10px_20px_rgba(117,195,16,0.7)] hover:shadow-[0_15px_30px_rgba(117,195,16,0.9)] transition-shadow duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto"
              />
              <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-base sm:text-[22px] mt-12 sm:mt-16 text-gray-300 max-w-3xl mx-auto px-4 md:px-0">
          Currently leveling up on:
        </p>

        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-16 pb-12 px-4 md:px-0">
          {[
            { name: "Next.js", img: next },
            { name: "TypeScript", img: typescript },
          ].map((skill) => (
            <div
              key={skill.name}
              className="p-4 sm:p-5 rounded-2xl text-center shadow-[0_10px_20px_rgba(117,195,16,0.7)] hover:shadow-[0_15px_30px_rgba(117,195,16,0.9)] transition-shadow duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto"
              />
              <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skill bars */}
      <section
        ref={sectionRef}
        className="mt-10 lg:mt-20 px-8 py-16 bg-slate-800 shadow-[0_4px_5px_-1px_rgba(117,195,16,1)]"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
          Skill Proficiency
        </h2>
        <div className="mx-auto grid w-[90%] max-w-250 grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-24">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="mb-2 font-bold text-white">{skill.name}</p>
              <div className="h-2 lg:h-3 w-full overflow-hidden rounded-full bg-slate-700">
                <div
                  className={`h-full rounded-full bg-[#75c310] transition-all duration-1000 ease-in-out ${
                    active ? skill.level : "w-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
}