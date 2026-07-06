import React, { useState } from "react";
import {
  resume,
  salon,
  donat,
  blog,
  scarves,
  chat,
  form,
  car,
  travel,
  qr_code,
  snake_game,
} from "../images";
import { Link as LinkIcon } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Resume Builder",
      desc: "React + Firebase + JS",
      img: resume,
      tags: ["REACT"],
      size: "md:row-span-2 md:col-span-1",
      projectLink: "https://resume-generator-nine-ivory.vercel.app",
    },
    {
      id: 2,
      title: "Blog App",
      desc: "MERN + Cloudinary + Multer",
      img: blog,
      tags: ["REACT"],
      size: "md:col-span-1",
      projectLink: "https://blog-app-restoration-hope-frontend.vercel.app",
    },
    {
      id: 3,
      title: "Aura Scarves - E-commerce",
      desc: "MERN + Cloudinary + JWT",
      img: scarves,
      tags: ["REACT"],
      size: "md:col-span-1",
      projectLink: "https://aura-scarves-frontend.vercel.app",
    },
    {
      id: 4,
      title: "Salon Website",
      desc: "React + JS",
      img: salon,
      tags: ["REACT"],
      size: "md:row-span-2 md:col-span-1",
      projectLink: "https://saloon-website-blond.vercel.app",
    },
    {
      id: 5,
      title: "Chat App",
      desc: "React + Firebase",
      img: chat,
      tags: ["REACT"],
      size: "md:col-span-2",
      projectLink: "https://chat-app-gilt-seven-64.vercel.app",
    },
    {
      id: 6,
      title: "Auth Form",
      desc: "React + MongoDB + JWT + Bcrypt",
      img: form,
      tags: ["REACT"],
      size: "md:col-span-1",
      projectLink: "https://form-frontend-mongodb-atlas.vercel.app",
    },
    {
      id: 7,
      title: "Car Website",
      desc: "HTML + Tailwind + JS",
      img: car,
      tags: ["JS"],
      size: "md:col-span-1",
      projectLink: "https://maserati-levante-car-website-jmhx.vercel.app",
    },
    {
      id: 8,
      title: "Donut Snack Website",
      desc: "React + JS + GSAP",
      img: donat,
      tags: ["REACT"],
      size: "md:col-span-1",
      projectLink: "https://donut-website-gsab-animation.vercel.app",
    },
    {
      id: 9,
      title: "Travel Website",
      desc: "HTML + CSS",
      img: travel,
      tags: ["UI"],
      size: "md:col-span-2",
      projectLink: "https://hinanisargithub.github.io/jadoo-travel-website/",
    },
    {
      id: 10,
      title: "QR Code Generator",
      desc: "HTML + CSS + JS",
      img: qr_code,
      tags: ["JS"],
      size: "md:col-span-1",
      projectLink: "https://hinanisargithub.github.io/QR-Code-Generator/",
    },
    {
      id: 11,
      title: "Snake Game",
      desc: "HTML + CSS + JS",
      img: snake_game,
      tags: ["JS"],
      size: "md:col-span-1",
      projectLink: "https://hinanisargithub.github.io/snake-game/",
    },
  ];

  const tabs = ["All", "UI", "JS", "REACT"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTab));

  return (
    <section className="pt-10 bg-[#1a1a1a] min-h-screen pb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center">
        Portfolio
      </h1>
      <div className="w-24 h-1 bg-[#75c310] mx-auto mt-4 mb-8"></div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#75c310] text-black px-6 py-1.5 rounded-full"
                  : "text-white hover:text-[#75c310] px-6 py-1.5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px] grid-flow-dense">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${project.size} group relative overflow-hidden bg-white shadow-xl cursor-pointer rounded-lg`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-x-0 bottom-0 bg-white/95 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-between items-center z-10 border-t border-gray-100">
                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.desc}</p>
                </div>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#75c310] transition"
                >
                  <LinkIcon size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
