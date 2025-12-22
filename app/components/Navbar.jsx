import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  let Navigate = (url) => {
    window.location.href = url;
  };
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "www.linkedin.com/in/kelvin-chebet-tech",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ChebetKelvin",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/254790649106",
      label: "WhatsApp",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPos >= sections[i].offsetTop) {
          setActiveLink(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 py-3"
              : "bg-transparent py-5"
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => {
                Navigate("/");
              }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-linear-to-r from-emerald-400 to-blue-400 rounded-full border-2 border-white"></div>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-1 py-2 text-sm font-medium transition-all duration-300
                      ${
                        activeLink === item.id
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-500"
                      }
                    `}
                  >
                    {item.label}
                    {activeLink === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* CTA & Social */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-linear-to-br from-gray-100 to-white flex items-center justify-center text-gray-600 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      background: "linear-linear(135deg, #3b82f6, #8b5cf6)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="relative px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-12 h-12 rounded-xl bg-linear-to-br from-gray-100 to-white flex items-center justify-center text-gray-700 shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-linear-to-b from-white to-gray-50 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">K</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        KELVIN
                      </h2>
                      <p className="text-xs text-gray-500">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100"
                  >
                    <FiX className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <motion.li
                        key={item.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: item.id * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300
                            ${
                              activeLink === item.id
                                ? "bg-linear-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500"
                                : "hover:bg-gray-100"
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center
                              ${
                                activeLink === item.id
                                  ? "bg-linear-to-br from-blue-500 to-purple-500 text-white"
                                  : "bg-gray-100 text-gray-600"
                              }
                            `}
                            >
                              <span className="font-bold">
                                {item.label.charAt(0)}
                              </span>
                            </div>
                            <span
                              className={`font-medium
                              ${
                                activeLink === item.id
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }
                            `}
                            >
                              {item.label}
                            </span>
                          </div>
                          <FiChevronRight
                            className={`w-4 h-4 transition-transform duration-300
                            ${activeLink === item.id ? "text-blue-500 rotate-90" : "text-gray-400"}
                          `}
                          />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Footer */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-center space-x-4 mb-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-linear-to-br from-gray-100 to-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => {
                      scrollToSection("contact");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Hire Me
                  </motion.button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    © 2024 Kelvin. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
