import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiFileText,
  FiExternalLink,
  FiArchive,
  FiCpu,
  FiCode,
  FiCalendar,
  FiMapPin,
  FiGlobe,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaUniversity,
  FaAws,
  FaPython,
  FaChartLine,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

export default function Education() {
  const educationTimeline = [
    {
      id: 1,
      type: "degree",
      title: "Master of Science in Computer Information Systems",
      institution: "Kenya Methodist University",
      location: "Meru, Kenya",
      period: "2021 - 2024",
      description:
        "Advanced studies in computing systems with focus on cloud architecture and machine learning applications.",
      highlight:
        "Thesis published in institutional repository with peer-reviewed journal publication",
      color: "from-purple-600 to-pink-600",
      icon: <FaGraduationCap />,
      thesis: {
        title:
          "A Framework for Optimizing Pharmacy Inventory Management Systems Performance Using Cloud Computing and Machine Learning: A Case Study of Nairobi County",
        uri: "http://repository.kemu.ac.ke/handle/123456789/1805",
        abstract:
          "Developed an integrated framework combining AWS cloud services and XGBoost machine learning algorithm to optimize pharmacy inventory management.",
      },
      courses: [
        "Cloud Computing Architecture",
        "Machine Learning Applications",
        "Advanced Database Systems",
        "Research Methodology",
      ],
    },
    {
      id: 2,
      type: "degree",
      title: "Bachelor of Business Information Technology",
      institution: "Taita Taveta University",
      location: "Voi, Kenya",
      period: "2016 - 2021",
      description:
        "Combined business management principles with information technology systems.",
      color: "from-blue-600 to-cyan-600",
      icon: <FiBookOpen />,
      courses: [
        "Systems Analysis & Design",
        "Database Management",
        "Business Intelligence",
        "Network Administration",
      ],
    },
    {
      id: 3,
      type: "certification",
      title: "Fullstack Web Development with AI Certificate",
      institution: "GoMYCODE",
      location: "Online",
      period: "2025",
      description:
        "Comprehensive training in modern web development integrated with artificial intelligence applications.",
      color: "from-green-600 to-emerald-600",
      icon: <FiAward />,
      courses: [
        "Modern JavaScript & React",
        "Node.js Backend Development",
        "AI Integration Techniques",
        "DevOps & Deployment",
      ],
    },
  ];

  const researchPublication = {
    title:
      "Cloud-Enabled Machine Learning: A Framework for Revolutionizing Pharmacy Inventory Management in Nairobi County",
    journal: "International Journal of Professional Practice",
    authors: "Kelvin Chebet & Vincent Mbandu",
    year: "2024",
    doi: "10.71274/ijpp.v12i6.457",
    link: "https://ijpp.kemu.ac.ke/index.php/ijpp/article/view/457",
    abstract:
      "This research developed an integrated framework using AWS PaaS and XGBoost algorithm to optimize pharmacy inventory management, demonstrating 65% improvement in forecast accuracy and efficiency.",
    technologies: [
      {
        name: "AWS Cloud",
        icon: <FaAws />,
        color: "bg-linear-to-br from-orange-500 to-yellow-500",
      },
      {
        name: "XGBoost ML",
        icon: <FaChartLine />,
        color: "bg-linear-to-br from-green-500 to-teal-500",
      },
      {
        name: "Python",
        icon: <FaPython />,
        color: "bg-linear-to-br from-blue-500 to-indigo-500",
      },
      {
        name: "Machine Learning",
        icon: <FaBrain />,
        color: "bg-linear-to-br from-purple-500 to-pink-500",
      },
    ],
    findings: [
      {
        value: "65%",
        label: "Forecast Accuracy Improvement",
        color: "text-green-400",
      },
      {
        value: "60%",
        label: "System Scalability Increase",
        color: "text-blue-400",
      },
      {
        value: "65%",
        label: "Reduction in Stock-Outs",
        color: "text-purple-400",
      },
      {
        value: "0.922",
        label: "Predictive Power (R-value)",
        color: "text-amber-400",
      },
    ],
  };

  const skillsIntegration = [
    {
      category: "Research & Analytics",
      skills: [
        "Quantitative Research",
        "Data Analysis",
        "Statistical Modeling",
        "Academic Writing",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: <FiFileText />,
    },
    {
      category: "Technical Implementation",
      skills: [
        "Cloud Architecture",
        "ML Algorithms",
        "System Design",
        "Framework Development",
      ],
      color: "from-purple-500 to-pink-500",
      icon: <FiCpu />,
    },
    {
      category: "Web Development",
      skills: [
        "Fullstack Development",
        "AI Integration",
        "Responsive Design",
        "API Development",
      ],
      color: "from-green-500 to-emerald-500",
      icon: <FiCode />,
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"
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
            backgroundSize: "80px 80px",
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
              Education & Research
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Knowledge
            </span>
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              & Growth
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Formal education, specialized certifications, and published research
            that shape my technical expertise and problem-solving approach.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Education Timeline */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </div>
                Academic Journey
              </h2>

              <div className="space-y-6">
                {educationTimeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Timeline Connector */}
                    {index < educationTimeline.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-linear-to-b from-blue-500/50 via-purple-500/50 to-transparent"></div>
                    )}

                    <div className="flex gap-4">
                      {/* Timeline Dot */}
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center z-10 relative`}
                        >
                          <div className="text-white">{item.icon}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="p-5 bg-linear-to-br from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <span className="inline-block px-3 py-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 text-sm font-medium">
                              {item.period}
                            </span>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <FiMapPin className="w-4 h-4" />
                              {item.location}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-blue-300 font-medium mb-3">
                            {item.institution}
                          </p>

                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {item.description}
                          </p>

                          {item.highlight && (
                            <div className="mb-4 p-3 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                              <p className="text-sm text-blue-300 flex items-center gap-2">
                                <FiAward className="w-4 h-4" />
                                <span className="font-medium">
                                  Achievement:
                                </span>{" "}
                                {item.highlight}
                              </p>
                            </div>
                          )}

                          {/* Courses */}
                          <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">
                              Key Courses:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.courses.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs border border-white/10"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Thesis Link for Master's */}
                          {item.thesis && (
                            <motion.a
                              href={item.thesis.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-all group text-sm"
                              whileHover={{ scale: 1.02 }}
                            >
                              <FiExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                              View Thesis Repository
                            </motion.a>
                          )}

                          {item.type === "certification" && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                              <FiAward className="w-4 h-4 text-green-400" />
                              <span className="text-sm text-green-300 font-medium">
                                Certification
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Research Publication */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Publication Card */}
            <div className="p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FiFileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Research Publication
                  </h2>
                  <p className="text-sm text-purple-300">
                    Peer-Reviewed Journal Article
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                {researchPublication.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">Journal:</span>
                  <span className="text-sm text-blue-300">
                    {researchPublication.journal}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">Authors:</span>
                  <span className="text-sm text-gray-300">
                    {researchPublication.authors}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">Year:</span>
                  <span className="text-sm text-amber-300">
                    {researchPublication.year}
                  </span>
                </div>
              </div>

              <motion.a
                href={researchPublication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all w-full justify-center mb-6 group"
                whileHover={{ scale: 1.02 }}
              >
                <FiExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Read Journal Article
              </motion.a>

              {/* Technologies Used */}
              <h4 className="text-lg font-bold text-white mb-4">
                Technologies Used
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {researchPublication.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center mb-2 mx-auto`}
                    >
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <p className="text-center text-sm text-white">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Research Findings */}
              <h4 className="text-lg font-bold text-white mb-4">
                Key Findings
              </h4>
              <div className="space-y-3">
                {researchPublication.findings.map((finding, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`text-2xl font-bold ${finding.color}`}>
                        {finding.value}
                      </div>
                      <div className="text-sm text-gray-300">
                        {finding.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Integration Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Academic Skills Integration
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How formal education translates into practical, real-world
                technical expertise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skillsIntegration.map((category, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-linear-to-br from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white text-2xl">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-purple-400"></div>
                        <span className="text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <FiGlobe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Explore My Research
            </h3>
            <p className="text-gray-400 mb-6">
              Interested in the technical details of my academic work? Access my
              complete thesis and published papers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="http://repository.kemu.ac.ke/handle/123456789/1805"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiArchive className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Access Thesis Repository
              </motion.a>

              <motion.a
                href="https://ijpp.kemu.ac.ke/index.php/ijpp/article/view/457"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Read Journal Article
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
