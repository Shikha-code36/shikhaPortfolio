import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Shikha-code36", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/36-shikha-pandey/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:shikha.py36@gmail.com", label: "Email" },
  ];
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-500/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                Shikha Pandey
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Senior Software Engineer & System Architect building scalable
                solutions for enterprise and startups. Passionate about AI/ML,
                high-performance systems, and technical innovation.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 hover:bg-slate-700/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>• System Architecture Consulting</li>
              <li>• AI/ML Integration Projects</li>
              <li>• Technical Leadership</li>
              <li>• Startup Collaboration</li>
              <li>• Performance Optimization</li>
              <li>• Mentoring & Training</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Shikha Pandey. Built with React & Modern Web Technologies
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>
                Available for freelance projects and technical consulting
              </span>
              <Heart size={16} className="text-red-400" />
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Crafting high-performance systems • Building the future of
              technology •
              <span className="text-cyan-400"> One line of code at a time</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
