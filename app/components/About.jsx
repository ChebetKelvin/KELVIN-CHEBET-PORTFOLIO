import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FiAward,
  FiBriefcase,
  FiUsers,
  FiCode,
  FiChevronRight,
  FiStar,
  FiTarget,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaFigma, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState("skills");

  const stats = [
    {
      icon: <FiCode />,
      value: "10+",
      label: "Projects Built",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiBriefcase />,
      value: "2+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiUsers />,
      value: "5+",
      label: "Collaborations",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FiAward />,
      value: "100%",
      label: "Project Ownership",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const skills = [
    {
      name: "React / Next.js",
      level: 80,
      icon: <FaReact />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "JavaScript / TypeScript",
      level: 75,
      icon: <SiTypescript />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Node.js & Express",
      level: 72,
      icon: <FaNodeJs />,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "UI Design (Tailwind CSS)",
      level: 70,
      icon: <FaFigma />,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "MongoDB",
      level: 68,
      icon: <SiMongodb />,
      color: "from-green-600 to-lime-500",
    },
    {
      name: "Deployment & Hosting",
      level: 65,
      icon: <FaCloud />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const experiences = [
    {
      year: "2024",
      role: "Full-Stack Developer",
      company: "Real-Time Chat Application",
      description:
        "Built and deployed a real-time chat app using React, Node.js, Socket.IO, and MongoDB with typing indicators, file sharing, reactions, and message editing.",
      tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    },
    {
      year: "2023",
      role: "Frontend Developer",
      company: "Personal & Client Projects",
      description:
        "Developed responsive websites and dashboards using React, Tailwind CSS, and modern UI patterns.",
      tags: ["React", "Tailwind", "UI/UX"],
    },
    {
      year: "2022",
      role: "Web Developer",
      company: "Learning & Open Projects",
      description:
        "Focused on JavaScript fundamentals, APIs, and building small applications while strengthening problem-solving skills.",
      tags: ["JavaScript", "APIs", "Learning"],
    },
  ];

  const principles = [
    {
      icon: <FiTarget />,
      title: "User-First Approach",
      description:
        "Designing with the end-user in mind for optimal experiences",
    },
    {
      icon: <FiStar />,
      title: "Quality Code",
      description: "Writing clean, maintainable, and scalable solutions",
    },
    {
      icon: <FiCode />,
      title: "Modern Tech Stack",
      description: "Leveraging cutting-edge tools and frameworks",
    },
    {
      icon: <FiAward />,
      title: "Continuous Growth",
      description: "Always learning and adapting to new technologies",
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Animated background - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        ></div>

        {/* Grid overlay - Adjusted opacity for mobile */}
        <div
          className="absolute inset-0 opacity-[0.03] sm:opacity-5"
          style={{
            backgroundImage: `
              linear-linear(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-linear(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px sm:40px 40px md:50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section - Improved mobile spacing */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 border border-white/10">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              About Me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Kelvin
            </span>
            <span className="bg-linear-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              .
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/20 whitespace-nowrap">
              Full-Stack Developer
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/20 whitespace-nowrap">
              UI/UX Enthusiast
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/10 text-amber-300 rounded-full text-xs sm:text-sm border border-amber-500/20 whitespace-nowrap">
              Problem Solver
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            I build digital experiences that are fast, beautiful, and
            user-focused. Passionate about clean code and modern web
            technologies.
          </p>
        </motion.div>

        {/* Stats Grid - Improved mobile layout */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                className="p-4 sm:p-5 md:p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-2 sm:mb-3 md:mb-4`}
                  >
                    <div className="text-white text-lg sm:text-xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid - Stack on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Left Column - Introduction */}
          <motion.div
            className="lg:col-span-2 space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Introduction Card */}
            <motion.div variants={itemVariants}>
              <div className="p-6 sm:p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl sm:shadow-2xl">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                    <FiBriefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                      My Journey
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      From curious learner to passionate builder
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Hello! I'm Kelvin, a full-stack developer who loves turning
                    complex problems into elegant, user-friendly solutions. My
                    journey in web development started with a curiosity about
                    how things work online, and it has evolved into a passion
                    for building applications that make a difference.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    I specialize in creating modern web applications using
                    technologies like React, Node.js, and MongoDB. Whether it's
                    a real-time chat system or a responsive dashboard, I focus
                    on clean architecture, performance, and great user
                    experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tab Navigation for Skills/Experience */}
            <motion.div variants={itemVariants}>
              <div className="bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl sm:shadow-2xl overflow-hidden">
                {/* Tab Headers - Improved for mobile */}
                <div className="flex border-b border-white/10">
                  {["skills", "experience"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-3 py-3 sm:px-4 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? "text-white bg-white/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {tab === "skills" ? "Skills" : "Experience"}
                    </button>
                  ))}
                </div>

                {/* Tab Content - Adjusted padding for mobile */}
                <div className="p-4 sm:p-6">
                  {activeTab === "skills" ? (
                    <div className="space-y-4 sm:space-y-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="group">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-2">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div
                                className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-lg bg-linear-to-br ${skill.color} flex items-center justify-center`}
                              >
                                <div className="text-white text-sm sm:text-base">
                                  {skill.icon}
                                </div>
                              </div>
                              <span className="font-medium text-white text-sm sm:text-base truncate">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-400 ml-10 sm:ml-0">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 sm:space-y-6">
                      {experiences.map((exp, index) => (
                        <div
                          key={index}
                          className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                            <div className="px-2 py-1 sm:px-3 sm:py-1 bg-linear-to-r from-amber-500/20 to-orange-500/20 rounded-full text-amber-300 text-xs sm:text-sm font-medium w-fit">
                              {exp.year}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                                {exp.role}
                              </h4>
                              <p className="text-blue-300 font-medium text-sm sm:text-base mb-1 sm:mb-2">
                                {exp.company}
                              </p>
                              <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                                {exp.description}
                              </p>
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {exp.tags?.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/5 text-gray-300 rounded text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Principles & Philosophy */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Principles Card */}
            <motion.div variants={itemVariants}>
              <div className="p-6 sm:p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl sm:shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Development Principles
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {principles.map((principle, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-linear-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <div className="text-amber-400 text-sm sm:text-base">
                            {principle.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                            {principle.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Card - Adjusted grid for mobile */}
            <motion.div variants={itemVariants}>
              <div className="p-6 sm:p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl sm:shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: <SiNextdotjs />,
                      label: "Next.js",
                      color: "from-white to-gray-300",
                    },
                    {
                      icon: <FaReact />,
                      label: "React",
                      color: "from-cyan-400 to-blue-500",
                    },
                    {
                      icon: <SiTypescript />,
                      label: "TypeScript",
                      color: "from-blue-500 to-indigo-600",
                    },
                    {
                      icon: <SiTailwindcss />,
                      label: "Tailwind",
                      color: "from-cyan-500 to-teal-500",
                    },
                    {
                      icon: <FaNodeJs />,
                      label: "Node.js",
                      color: "from-green-500 to-emerald-600",
                    },
                    {
                      icon: <SiMongodb />,
                      label: "MongoDB",
                      color: "from-green-600 to-lime-500",
                    },
                    {
                      icon: <FaFigma />,
                      label: "Figma",
                      color: "from-purple-500 to-pink-600",
                    },
                    {
                      icon: <FaCloud />,
                      label: "Cloud",
                      color: "from-orange-500 to-amber-500",
                    },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="p-2.5 sm:p-3 md:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group text-center"
                      whileHover={{ y: -4 }}
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-linear-to-br ${tech.color} flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3 mx-auto group-hover:scale-110 transition-transform`}
                      >
                        <div className="text-white text-sm sm:text-lg md:text-xl">
                          {tech.icon}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                        {tech.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section - Adjusted for mobile */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.3 },
            },
          }}
        >
          <div className="p-6 sm:p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl sm:shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-lg mx-auto px-2 sm:px-0">
              Let's collaborate and create something amazing together. I'm
              always open to discussing new projects and opportunities.
            </p>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 py-2.5 sm:px-8 sm:py-3 bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Conversation</span>
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
