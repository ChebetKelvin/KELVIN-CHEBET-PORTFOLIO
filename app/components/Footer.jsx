import { motion } from "framer-motion";
import {
  FiHeart,
  FiCoffee,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/ChebetKelvin",
      color: "hover:text-gray-300",
      label: "GitHub Profile",
    },
    {
      platform: "LinkedIn",
      icon: <FiLinkedin />,
      url: "www.linkedin.com/in/kelvin-chebet-tech",
      color: "hover:text-blue-400",
      label: "LinkedIn Profile",
    },
    {
      platform: "Email",
      icon: <FiMail />,
      url: "mailto:kelvinchebet47@gmail.com",
      color: "hover:text-amber-400",
      label: "Send Email",
    },
    {
      platform: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/254790649106",
      color: "hover:text-green-400",
      label: "WhatsApp Chat",
    },
    {
      platform: "Telegram",
      icon: <FaTelegram />,
      url: "https://t.me/vinx",
      color: "hover:text-blue-300",
      label: "Telegram",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-gray-900 to-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-linear(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-linear(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top linear */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <FiCode className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Kelvin Chebet
                    </h2>
                    <p className="text-sm text-gray-400">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Crafting exceptional digital experiences with modern
                  technologies and clean code. Let's build something amazing
                  together.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">
                      10+
                    </div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">2+</div>
                    <div className="text-sm text-gray-400">Years Exp</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform"></div>
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Contact Info */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-lg font-bold text-white mb-4">
                    Get in Touch
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:kelvinchebet56@gmail.com"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <FiMail className="w-5 h-5 text-blue-400" />
                      <span className="text-sm">kelvinchebet56@gmail.com</span>
                    </a>
                    <a
                      href="tel:+254702917183"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5 text-green-400" />
                      <span className="text-sm">+254 702 917 183</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social & Newsletter */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Connect With Me
                </h3>

                {/* Social Links */}
                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`p-3 rounded-xl bg-white/5 border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center group`}
                      aria-label={social.label}
                    >
                      <div className="text-xl mb-1">{social.icon}</div>
                      <span className="text-xs text-gray-400 group-hover:text-white">
                        {social.platform}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Availability */}
                <div className="p-4 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm font-medium text-white">
                      Available for new projects
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Currently accepting freelance opportunities and
                    collaborations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} Kelvin Chebet. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Built with{" "}
                <FiHeart className="inline w-3 h-3 text-red-400 mx-1" /> and{" "}
                <FiCoffee className="inline w-3 h-3 text-amber-400 mx-1" /> in
                Nairobi, Kenya.
              </p>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-300 text-sm"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Tailwind",
              "Framer Motion",
              "Vercel",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button (Mobile) */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:hidden z-50 w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
