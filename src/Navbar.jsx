import "./App.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-[20px] md:text-[22px] font-medium transition-colors duration-300 ${
      isActive ? "text-[#75c310]" : "text-white"
    } hover:text-[#75c310]`;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  const goHome = () => {
    navigate("/");
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 h-20 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-[0_1px_15px_rgba(117,195,16,0.7)]"
          : "bg-slate-900/80 backdrop-blur-sm shadow-[0_1px_10px_rgba(117,195,16,0.4)]"
      }`}
    >
      <div className="mx-auto flex h-full max-w-300 items-center justify-between px-5">
        {/* Logo - clickable, redirects home */}
        <div onClick={goHome} className="flex items-center gap-1 cursor-pointer">
          <h1 className="text-[28px] font-bold text-[#75c310] md:text-[34px]">
            Hina
          </h1>
          <span className="text-[28px] font-bold text-white md:text-[34px]">
            Nisar.
          </span>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-[#75c310] transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-[#75c310] transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-[#75c310] transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Menu */}
        <nav
          className={`absolute left-0 top-20 w-full bg-slate-900/98 backdrop-blur-sm transition-all duration-300 md:static md:block md:w-auto md:bg-transparent ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-center md:flex-row md:gap-14 md:py-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons (desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/hina-nisar-a515492b5"
            target="_blank"
            rel="noreferrer"
            className="text-[22px] text-white transition-transform duration-300 hover:scale-110 hover:text-[#75c310]"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/HINANISARGITHUB"
            target="_blank"
            rel="noreferrer"
            className="text-[22px] text-white transition-transform duration-300 hover:scale-110 hover:text-[#75c310]"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;