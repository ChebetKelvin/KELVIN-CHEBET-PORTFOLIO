import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronDown, FiCode } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();

  const roles = [
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "Data Enthusiast",
    "Tech Innovator",
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);
    checkMobile(); // Initial check

    // Animate floating tech icons
    controls.start("visible");

    // Word rotation
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, []);

  const textY = scrollY * 0.2;
  const floatingIcons = [
    {
      Icon: SiReact,
      color: "text-cyan-400",
      delay: 0,
      size: isMobile ? 24 : 40,
    },
    {
      Icon: SiNextdotjs,
      color: "text-white",
      delay: 0.5,
      size: isMobile ? 20 : 36,
    },
    {
      Icon: SiNodedotjs,
      color: "text-green-500",
      delay: 1,
      size: isMobile ? 28 : 42,
    },
    {
      Icon: SiTypescript,
      color: "text-blue-500",
      delay: 1.5,
      size: isMobile ? 22 : 38,
    },
  ];

  const techStack = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "TypeScript", level: 92 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background with linear mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-600/20 rounded-full blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-600/20 rounded-full blur-xl md:blur-3xl animate-pulse delay-1000"></div>

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] md:opacity-10"
          style={{
            backgroundImage: `linear-linear(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-linear(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
            transform: `translate(${mousePosition.x * (isMobile ? 5 : 20)}px, ${mousePosition.y * (isMobile ? 5 : 20)}px)`,
          }}
        />
      </div>

      {/* Floating tech icons - Mobile optimized */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: isMobile ? 0.3 : 0.6,
              scale: 1,
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              transition: {
                delay: icon.delay,
                duration: isMobile ? 3 : 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
          style={{
            top: `${isMobile ? 10 + index * 10 : 20 + index * 15}%`,
            left: `${isMobile ? 5 + index * 15 : 10 + index * 20}%`,
          }}
        >
          <icon.Icon
            className={icon.color}
            style={{ width: icon.size, height: icon.size }}
          />
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center pt-16 pb-20">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Main content */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 border border-white/10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm text-gray-300 font-medium">
                  Available for freelance work
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                style={{ y: -textY }}
              >
                <span className="block bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Hi, I'm
                </span>
                <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  Kelvin Chebet
                </span>
              </motion.h1>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  className="h-12 md:h-16 mt-4 flex items-center justify-center md:justify-start"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {roles[currentWord]}
                    </span>
                  </h2>
                </motion.div>
              </AnimatePresence>

              <motion.p
                className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                style={{ y: -textY * 0.3 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I craft{" "}
                <span className="text-blue-400 font-semibold">
                  scalable solutions
                </span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">
                  immersive experiences
                </span>{" "}
                with modern technologies. Passionate about turning complex
                problems into elegant, user-friendly applications.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10 justify-center md:justify-start"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="#projects"
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work{" "}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="group px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-sm md:text-base flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiCode className="group-hover:rotate-12 transition-transform" />
                  <span>Start a Project</span>
                </motion.a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  {
                    value: "M.Sc.",
                    label: "Computer Info Systems",
                    suffix: "",
                  },
                  { value: "B.Sc.", label: "Business IT", suffix: "" },
                  { value: "Fullstack AI", label: "Certification", suffix: "" },
                  { value: "Published", label: "Research Paper", suffix: "" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <div className="text-xl md:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Tech stack visualization - Hidden on small screens */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative p-6 md:p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                {/* 3D Card effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-50"></div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-6">
                  Tech Stack
                </h3>

                {techStack.map((tech, index) => (
                  <div key={tech.name} className="mb-4 md:mb-6">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}

                {/* Animated code block */}
                <div className="mt-6 md:mt-8 p-3 md:p-4 bg-black/40 rounded-xl border border-gray-800">
                  <div className="flex gap-1.5 md:gap-2 mb-2 md:mb-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="text-xs md:text-sm text-gray-300 font-mono overflow-x-auto">
                    <code>
                      {`const developer = {\n  name: "Kelvin",\n  role: "${roles[currentWord]}",\n  location: "Remote",\n  status: "Building awesome things"\n}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Only show on desktop */}
      <motion.div
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-xs md:text-sm mb-2">Scroll to explore</span>
          <FiChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </motion.div>

      {/* Mouse follower effect - Only on desktop */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 w-96 h-96 pointer-events-none"
          style={{
            background: `radial-linear(600px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(56, 189, 248, 0.15), transparent 80%)`,
          }}
        />
      )}
    </section>
  );
}
