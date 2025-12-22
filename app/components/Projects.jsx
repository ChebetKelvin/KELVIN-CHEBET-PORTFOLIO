import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiFilter,
  FiChevronRight,
  FiEye,
  FiLock,
  FiStar,
  FiCalendar,
  FiLayers,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiFastapi,
  SiVercel,
} from "react-icons/si";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const projectCategories = [
    { id: "all", label: "All Projects", count: 8 },
    { id: "fullstack", label: "Full-Stack", count: 6 },
    { id: "ml-ai", label: "ML/AI", count: 2 },
    { id: "cloud", label: "Cloud/DevOps", count: 4 },
    { id: "research", label: "Research", count: 1 },
  ];

  const projects = [
    {
      id: 1,
      title: "VibeLink Event Platform",
      category: ["fullstack", "cloud"],
      description:
        "Multi-category event platform with ticketing, analytics tracking, and admin verification.",
      longDescription:
        "VibeLink is a fully-featured event platform for local, student, corporate, and travel events. Built with Next.js, MongoDB, and Node.js, it features analytics tracking for 'Get Tickets' clicks, admin verification for events, and cloud deployment on Vercel.",
      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "bg-linear-to-br from-gray-800 to-black",
        },
        {
          name: "React",
          icon: <FaReact />,
          color: "bg-linear-to-br from-cyan-500 to-blue-500",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "bg-linear-to-br from-green-500 to-emerald-500",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "bg-linear-to-br from-green-600 to-lime-500",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          color: "bg-linear-to-br from-black to-gray-700",
        },
      ],
      features: [
        "Multi-category event listings",
        "Admin verification system",
        "Ticket purchase analytics",
        "Responsive mobile-first UI",
      ],
      github: "https://github.com/kelvinchebet/vibelink",
      live: "https://vibelink-kappa.vercel.app",
      status: "completed",
      year: "2025",
      imageColor: "from-blue-600 to-purple-600",
      stars: 24,
      complexity: "Intermediate",
    },
    {
      id: 2,
      title: "Shadenet Hotel Website",
      category: ["fullstack", "cloud"],
      description:
        "Responsive hotel website with room listings, booking forms, and Decap CMS integration.",
      longDescription:
        "Built with Next.js and Tailwind CSS, featuring Decap CMS for dynamic content, Framer Motion animations, and integrated contact & booking forms. Deployed on Vercel for cloud hosting.",
      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "bg-linear-to-br from-gray-800 to-black",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "bg-linear-to-br from-teal-500 to-cyan-500",
        },
        {
          name: "Framer Motion",
          icon: <FiCode />,
          color: "bg-linear-to-br from-purple-500 to-pink-500",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "bg-linear-to-br from-green-600 to-lime-500",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          color: "bg-linear-to-br from-black to-gray-700",
        },
      ],
      features: [
        "Room listings and details",
        "Booking and contact forms",
        "CMS-managed content",
        "Animations and responsive design",
      ],
      github: "https://github.com/kelvinchebet/shadenet-hotel",
      live: "https://shadenet-hotel.vercel.app",
      status: "completed",
      year: "2025",
      imageColor: "from-green-600 to-emerald-600",
      stars: 18,
      complexity: "Beginner",
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      category: ["fullstack"],
      description:
        "Real-time chat application supporting private and group conversations with Socket.io.",
      longDescription:
        "A chat application built with React, Node.js, and Socket.io enabling private and group messaging. Includes responsive UI, online status indicators, and real-time updates. Deployed on Vercel.",
      technologies: [
        {
          name: "React",
          icon: <FaReact />,
          color: "bg-linear-to-br from-cyan-500 to-blue-500",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "bg-linear-to-br from-green-600 to-lime-500",
        },
        {
          name: "Socket.io",
          icon: <FiServer />,
          color: "bg-linear-to-br from-purple-500 to-pink-500",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "bg-linear-to-br from-teal-500 to-cyan-500",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          color: "bg-linear-to-br from-black to-gray-700",
        },
      ],
      features: [
        "Private & group chat",
        "Online/offline indicators",
        "Real-time messaging",
        "Responsive UI",
      ],
      github: "https://github.com/kelvinchebet/chatapp-gules-one",
      live: "https://chatapp-gules-one.vercel.app",
      status: "completed",
      year: "2025",
      imageColor: "from-indigo-600 to-blue-600",
      stars: 32,
      complexity: "Intermediate",
    },
    {
      id: 4,
      title: "Freshly Zeta E-Commerce",
      category: ["fullstack"],
      description:
        "E-commerce platform for fresh products with shopping cart and payment integration.",
      longDescription:
        "Freshly Zeta is an e-commerce platform for ordering fresh produce online. Built with React, Node.js, and MongoDB, it features a shopping cart, secure payments, and a responsive frontend. Hosted on Vercel.",
      technologies: [
        {
          name: "React",
          icon: <FaReact />,
          color: "bg-linear-to-br from-cyan-500 to-blue-500",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "bg-linear-to-br from-green-600 to-lime-500",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "bg-linear-to-br from-green-500 to-emerald-500",
        },
        {
          name: "Stripe",
          icon: <FiLock />,
          color: "bg-linear-to-br from-purple-500 to-indigo-500",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "bg-linear-to-br from-teal-500 to-cyan-500",
        },
      ],
      features: [
        "Product catalog & shopping cart",
        "Secure payment integration",
        "Responsive UI",
        "Admin product management",
      ],
      github: "https://github.com/kelvinchebet/freshly-zeta",
      live: "https://freshly-zeta.vercel.app",
      status: "completed",
      year: "2025",
      imageColor: "from-green-500 to-lime-500",
      stars: 15,
      complexity: "Intermediate",
    },
    {
      id: 5,
      title: "Final Project - Liard Phi",
      category: ["fullstack"],
      description:
        "Final year capstone project demonstrating full-stack development skills.",
      longDescription:
        "Liard Phi is a comprehensive full-stack application integrating React frontend with Node.js backend and MongoDB database. Focused on performance, clean architecture, and responsive design.",
      technologies: [
        {
          name: "React",
          icon: <FaReact />,
          color: "bg-linear-to-br from-cyan-500 to-blue-500",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "bg-linear-to-br from-green-600 to-lime-500",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "bg-linear-to-br from-green-500 to-emerald-500",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "bg-linear-to-br from-teal-500 to-cyan-500",
        },
        {
          name: "Express",
          icon: <FiServer />,
          color: "bg-linear-to-br from-gray-700 to-gray-900",
        },
      ],
      features: [
        "Full-stack integration",
        "Responsive design",
        "Clean architecture",
        "Dynamic user interactions",
      ],
      github: "https://github.com/kelvinchebet/final-project-liard-phi",
      live: "https://final-project-liard-phi.vercel.app",
      status: "completed",
      year: "2025",
      imageColor: "from-purple-600 to-pink-600",
      stars: 8,
      complexity: "Advanced",
    },
    {
      id: 6,
      title: "M-Pesa STKPush Integration",
      category: ["fullstack", "cloud"],
      description:
        "Payment integration with M-Pesa STKPush for seamless mobile payments.",
      longDescription:
        "A payment integration project using Node.js and M-Pesa STKPush API to allow secure mobile payments within applications. Includes webhook handling, transaction verification, and cloud deployment on Vercel.",
      technologies: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "bg-linear-to-br from-green-600 to-lime-500",
        },
        {
          name: "M-Pesa API",
          icon: <FiDatabase />,
          color: "bg-linear-to-br from-orange-500 to-amber-500",
        },
        {
          name: "Express.js",
          icon: <FiServer />,
          color: "bg-linear-to-br from-gray-700 to-gray-900",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          color: "bg-linear-to-br from-black to-gray-700",
        },
        {
          name: "REST API",
          icon: <FiCpu />,
          color: "bg-linear-to-br from-blue-500 to-cyan-500",
        },
      ],
      features: [
        "Secure mobile payments",
        "Webhook transaction handling",
        "Cloud deployment",
        "API integration",
      ],
      github: "https://github.com/kelvinchebet/stkpush-kappa",
      live: "https://stkpush-kappa.vercel.app",
      status: "completed",
      year: "2025",
      imageColor: "from-blue-600 to-cyan-600",
      stars: 21,
      complexity: "Intermediate",
    },
    {
      id: 7,
      title: "MongoDB Todo Application",
      category: ["fullstack"],
      description:
        "A classic Todo app with persistent data using MongoDB and Node.js backend.",
      longDescription:
        "This project demonstrates CRUD operations with a MongoDB database and Node.js backend, integrated with a React frontend. Features task creation, editing, deletion, and completion tracking with persistent storage.",
      technologies: [
        {
          name: "React",
          icon: <FaReact />,
          color: "bg-linear-to-br from-cyan-500 to-blue-500",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "bg-linear-to-br from-green-600 to-lime-500",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "bg-linear-to-br from-green-500 to-emerald-500",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "bg-linear-to-br from-teal-500 to-cyan-500",
        },
        {
          name: "Express",
          icon: <FiServer />,
          color: "bg-linear-to-br from-gray-700 to-gray-900",
        },
      ],
      features: [
        "Task creation, update, delete",
        "Persistent MongoDB storage",
        "Responsive UI",
        "Clean state management",
      ],
      github: "https://github.com/kelvinchebet/mongo-todo",
      live: "https://mongo-todo.vercel.app",
      status: "completed",
      year: "2025",
      imageColor: "from-indigo-600 to-purple-600",
      stars: 12,
      complexity: "Beginner",
    },
    {
      id: 8,
      title: "Pharmacy Inventory Optimizer",
      category: ["research", "ml-ai", "cloud"],
      description:
        "A cloud-based machine learning system for optimizing pharmacy inventory management using AWS and XGBoost algorithm.",
      longDescription:
        "This research project developed an integrated framework combining AWS PaaS and XGBoost algorithm to optimize pharmacy inventory management in Nairobi County. The system demonstrates 65% improvement in forecast accuracy and inventory efficiency.",
      technologies: [
        {
          name: "AWS",
          icon: <FaAws />,
          color: "bg-linear-to-br from-orange-500 to-yellow-500",
        },
        {
          name: "Python",
          icon: <FaPython />,
          color: "bg-linear-to-br from-blue-500 to-cyan-500",
        },
        {
          name: "XGBoost",
          icon: <SiTensorflow />,
          color: "bg-linear-to-br from-green-500 to-teal-500",
        },
        {
          name: "FastAPI",
          icon: <SiFastapi />,
          color: "bg-linear-to-br from-teal-500 to-emerald-500",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          color: "bg-linear-to-br from-blue-600 to-indigo-600",
        },
      ],
      features: [
        "65% improvement in forecast accuracy",
        "Real-time inventory tracking",
        "ML-powered demand prediction",
        "Cloud-native architecture",
      ],
      github: null,
      live: "https://ijpp.kemu.ac.ke/index.php/ijpp/article/view/457",
      thesis: "http://repository.kemu.ac.ke/handle/123456789/1805",
      status: "published",
      year: "2024",
      imageColor: "from-purple-600 to-pink-600",
      stars: 0,
      complexity: "Advanced",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const ProjectCard = ({ project }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer h-full"
      onClick={() => setSelectedProject(project)}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
            project.status === "published"
              ? "bg-linear-to-br from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
              : project.status === "completed"
                ? "bg-linear-to-br from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30"
                : project.status === "in-progress"
                  ? "bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-linear-to-br from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30"
          }`}
        >
          {project.status === "published" ? (
            <>
              <FiStar className="w-3 h-3" /> Published
            </>
          ) : project.status === "completed" ? (
            "Completed"
          ) : (
            "In Progress"
          )}
        </span>
      </div>

      {/* Project Header */}
      <div
        className={`h-40 bg-linear-to-br ${project.imageColor} relative overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-5xl opacity-20 group-hover:scale-110 transition-transform">
            {project.technologies[0].icon}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="text-white/90 text-sm font-medium px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
            <FiCalendar className="inline w-3 h-3 mr-1" /> {project.year}
          </span>
          <span className="text-white/90 text-sm font-medium px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
            <FiLayers className="inline w-3 h-3 mr-1" /> {project.complexity}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <FiChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
        </div>

        <p className="text-gray-300 text-sm mb-5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-2 py-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              title={tech.name}
            >
              <div
                className={`w-5 h-5 rounded-md ${tech.color} flex items-center justify-center shrink-0`}
              >
                <div className="text-white text-xs">{tech.icon}</div>
              </div>
              <span className="text-xs text-gray-300 truncate max-w-15">
                {tech.name}
              </span>
            </div>
          ))}
          {project.technologies.length > 4 && (
            <div className="px-2 py-1.5 bg-white/5 rounded-lg">
              <span className="text-xs text-gray-400">
                +{project.technologies.length - 4}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors group/link"
                title="View on GitHub"
              >
                <FiGithub className="w-4 h-4" />
                <span className="text-xs font-medium">{project.stars}</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors group/link"
                title="View Live Demo"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <div className="flex items-center gap-2">
            {project.category.map((cat, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
        <span className="text-white text-sm font-medium flex items-center gap-2">
          View Details <FiChevronRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-linear-to-br from-gray-900 to-black rounded-3xl border border-white/20 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors"
              >
                <span className="text-xl">×</span>
              </button>

              {/* Header */}
              <div
                className={`h-64 bg-linear-to-br ${project.imageColor} relative overflow-hidden rounded-t-3xl`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex wrap items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "published"
                          ? "bg-purple-500/30 text-purple-100 border border-purple-500/50"
                          : "bg-green-500/30 text-green-100 border border-green-500/50"
                      }`}
                    >
                      {project.status === "published"
                        ? "Research Project"
                        : "Development Project"}
                    </span>
                    <span className="text-white/90 text-sm px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
                      <FiCalendar className="inline w-3 h-3 mr-1" />{" "}
                      {project.year}
                    </span>
                    <span className="text-white/90 text-sm px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
                      <FiLayers className="inline w-3 h-3 mr-1" />{" "}
                      {project.complexity} Level
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <FiCode className="w-5 h-5 text-white" />
                        </div>
                        Project Overview
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <div
                            key={index}
                            className="p-4 bg-linear-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                                <div className="text-blue-400 text-sm font-bold">
                                  {index + 1}
                                </div>
                              </div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-8">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        Technologies
                      </h4>
                      <div className="space-y-3">
                        {project.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-linear-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                          >
                            <div
                              className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center shrink-0`}
                            >
                              <div className="text-white">{tech.icon}</div>
                            </div>
                            <div>
                              <p className="text-white font-medium">
                                {tech.name}
                              </p>
                              <p className="text-gray-400 text-sm">
                                Technology Stack
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        Project Links
                      </h4>
                      <div className="space-y-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                                <FiGithub className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-medium">
                                  GitHub Repository
                                </p>
                                <p className="text-gray-400 text-sm">
                                  {project.stars} stars
                                </p>
                              </div>
                            </div>
                            <FiExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                          </a>
                        )}

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-linear-to-br from-blue-900/30 to-blue-800/30 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                                <FiExternalLink className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-medium">
                                  Live Demo
                                </p>
                                <p className="text-blue-300 text-sm">
                                  View deployed project
                                </p>
                              </div>
                            </div>
                            <FiExternalLink className="w-5 h-5 text-blue-400" />
                          </a>
                        )}

                        {project.thesis && (
                          <a
                            href={project.thesis}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-linear-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                                <FiEye className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-medium">
                                  Research Thesis
                                </p>
                                <p className="text-purple-300 text-sm">
                                  Academic repository
                                </p>
                              </div>
                            </div>
                            <FiExternalLink className="w-5 h-5 text-purple-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        ></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-linear(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-linear(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">
              Portfolio Showcase
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Project
            </span>
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated collection of my work, from full-stack applications to
            research projects and cloud solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              value: "8+",
              label: "Projects",
              description: "Completed & Published",
              color: "from-blue-500 to-cyan-500",
              icon: <FiCode />,
            },
            {
              value: "6",
              label: "Full-Stack",
              description: "Web Applications",
              color: "from-purple-500 to-pink-500",
              icon: <FiServer />,
            },
            {
              value: "2",
              label: "ML/AI",
              description: "Research Projects",
              color: "from-green-500 to-emerald-500",
              icon: <FiCpu />,
            },
            {
              value: "150+",
              label: "GitHub",
              description: "Total Stars",
              color: "from-orange-500 to-amber-500",
              icon: <FiStar />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <div className="text-white text-xl">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters & View Toggle */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex col sm:row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white">Project Gallery</h2>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                }`}
                title="Grid View"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                }`}
                title="List View"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="relative">
            {/* Scrollable container */}
            <div className="flex gap-2 overflow-x-auto pb-3 -mb-3 scrollbar-hide">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    activeFilter === category.id
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <FiFilter className="w-4 h-4shrink-0" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">
                    {category.label.split(" ")[0]}
                  </span>
                  <span className="text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Gradient fade on mobile */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-gray-900 to-transparent pointer-events-none sm:hidden"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${viewMode}`}
            layout
            className={`${
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-24 h-24 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-6">
              <FiFilter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              No projects match the selected filter. Try selecting a different
              category or view all projects.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-6 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              View All Projects
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Together?
            </h3>
            <p className="text-gray-400 mb-6">
              Have a project in mind or want to collaborate? Let's create
              something amazing.
            </p>
            <div className="flex col sm:row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="w-5 h-5" />
                Start a Project
              </motion.a>
              <motion.a
                href="https://github.com/kelvinchebet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-5 h-5" />
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
