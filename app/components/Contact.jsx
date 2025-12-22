import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCalendar,
  FiClock,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [activeTab, setActiveTab] = useState("form");

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "kelvinchebet47@gmail.com",
      action: "mailto:kelvinchebet47@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "For project inquiries and collaborations",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+254 790 649 106",
      action: "tel:+254790649106",
      color: "from-green-500 to-emerald-500",
      description: "Call or WhatsApp available",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Nairobi, Kenya",
      action: null,
      color: "from-purple-500 to-pink-500",
      description: "Available for remote & local projects",
    },
    {
      icon: <FiGlobe />,
      title: "Timezone",
      value: "EAT (UTC+3)",
      action: null,
      color: "from-orange-500 to-amber-500",
      description: "Working hours: 9 AM - 6 PM",
    },
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <FiGithub />,
      username: "@kelvinchebet",
      url: "https://github.com/ChebetKelvin",
      color: "from-gray-800 to-gray-900",
      description: "View my projects and contributions",
    },
    {
      platform: "LinkedIn",
      icon: <FiLinkedin />,
      username: "Kelvin Chebet",
      url: "www.linkedin.com/in/kelvin-chebet-tech",
      color: "from-blue-600 to-blue-700",
      description: "Connect professionally",
    },
    {
      platform: "WhatsApp",
      icon: <FaWhatsapp />,
      username: "+254 790 649 106",
      url: "https://wa.me/254790649106",
      color: "from-green-500 to-emerald-500",
      description: "Quick chat and calls",
    },
    {
      platform: "Telegram",
      icon: <FaTelegram />,
      username: "@kelvinchebet",
      url: "https://t.me/kelvinchebet",
      color: "from-blue-500 to-cyan-500",
      description: "Instant messaging",
    },
  ];

  const availability = [
    {
      day: "Monday - Friday",
      hours: "9:00 AM - 6:00 PM",
      status: "Available",
      color: "bg-green-500/20 text-green-400",
    },
    {
      day: "Saturday",
      hours: "10:00 AM - 2:00 PM",
      status: "Limited",
      color: "bg-amber-500/20 text-amber-400",
    },
    {
      day: "Sunday",
      hours: "Not Available",
      status: "Offline",
      color: "bg-gray-500/20 text-gray-400",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // EmailJS configuration (you'll get these from EmailJS dashboard)
    const SERVICE_ID = "service_upqgrgs";
    const TEMPLATE_ID = "template_b3bn3uo";
    const USER_ID = "zTtqoKLlsnr0y0wom";

    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      // Success
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

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

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
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
            backgroundSize: "50px 50px",
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
              Get in Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Let's Work
            </span>
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Together
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-linear-to-br ${info.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <div className="text-white text-xl">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {info.title}
                      </h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-gray-300 hover:text-white transition-colors block mb-1"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 mb-1">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Availability Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <FiClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Availability</h3>
                  <p className="text-sm text-gray-400">Current working hours</p>
                </div>
              </div>

              <div className="space-y-3">
                {availability.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">
                        {slot.day}
                      </p>
                      <p className="text-gray-400 text-xs">{slot.hours}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${slot.color}`}
                    >
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Middle Column - Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 md:p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl h-full">
              {/* Tab Navigation */}
              <div className="flex border-b border-white/10 mb-8">
                {["form", "social", "schedule"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative ${
                      activeTab === tab
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab === "form" && "Contact Form"}
                    {tab === "social" && "Social Links"}
                    {tab === "schedule" && "Schedule Call"}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-100">
                {activeTab === "form" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Send a Message
                    </h2>
                    <p className="text-gray-400 mb-8">
                      Fill out the form below and I'll get back to you as soon
                      as possible.
                    </p>

                    {status.submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 bg-linear-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                            <FiCheck className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              Message Sent!
                            </h3>
                            <p className="text-green-300">
                              Thank you for your message. I'll get back to you
                              soon.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                            placeholder="Project Inquiry"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                            placeholder="Tell me about your project..."
                          />
                        </div>

                        {status.error && (
                          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <div className="flex items-center gap-2 text-red-300">
                              <FiAlertCircle className="w-5 h-5" />
                              <span>{status.error}</span>
                            </div>
                          </div>
                        )}

                        <motion.button
                          type="submit"
                          disabled={status.submitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 px-6 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                          {status.submitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <FiSend className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </motion.button>
                      </form>
                    )}
                  </motion.div>
                )}

                {activeTab === "social" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Connect Socially
                    </h2>
                    <p className="text-gray-400 mb-8">
                      Follow me on social media or connect directly through
                      these platforms.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -4 }}
                          className="group p-4 bg-linear-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl bg-linear-to-br ${social.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                            >
                              <div className="text-white text-xl">
                                {social.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1">
                                {social.platform}
                              </h3>
                              <p className="text-gray-300 mb-1">
                                {social.username}
                              </p>
                              <p className="text-sm text-gray-400">
                                {social.description}
                              </p>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "schedule" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Schedule a Call
                    </h2>
                    <p className="text-gray-400 mb-8">
                      Book a meeting directly through Calendly for a focused
                      discussion.
                    </p>

                    <div className="p-6 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <FiCalendar className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            Book a Meeting
                          </h3>
                          <p className="text-blue-300">
                            30-minute discovery call
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6">
                        Schedule a call to discuss your project requirements,
                        timeline, and how we can work together to achieve your
                        goals.
                      </p>
                      <motion.a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                      >
                        <FiCalendar className="w-5 h-5" />
                        Open Calendly
                      </motion.a>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white">
                        Meeting Types
                      </h4>
                      {[
                        {
                          type: "Discovery Call",
                          duration: "30 min",
                          purpose: "Initial project discussion",
                        },
                        {
                          type: "Technical Consultation",
                          duration: "45 min",
                          purpose: "Deep dive into technical requirements",
                        },
                        {
                          type: "Project Review",
                          duration: "60 min",
                          purpose: "Existing project analysis",
                        },
                      ].map((meeting, index) => (
                        <div
                          key={index}
                          className="p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">
                              {meeting.type}
                            </span>
                            <span className="text-sm px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                              {meeting.duration}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {meeting.purpose}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <FiSend className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6">
              Don't hesitate to reach out. I typically respond within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:kelvinchebet47@gmail.com"
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="w-5 h-5" />
                Email Me Directly
              </motion.a>

              <motion.a
                href="tel:+254790649106"
                className="px-6 py-3 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
