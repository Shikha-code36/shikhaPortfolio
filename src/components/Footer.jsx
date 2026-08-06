import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

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
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "skills", href: "#skills" },
    { name: "blog", href: "#blog" },
    { name: "contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-schema-raised2 border-t border-schema-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-schema-heading mb-2">
                <span className="text-schema-accent">shikha</span>
                <span className="text-schema-faint">@dev</span>
              </h3>
              <p className="text-schema-faint text-sm leading-relaxed">
                Backend Engineer building scalable systems for enterprise and
                AI. Passionate about databases, caching, and high-performance
                architecture.
              </p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-schema-raised border border-schema-border rounded-lg hover:border-schema-accentdim transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon
                    size={18}
                    className="text-schema-faint hover:text-schema-accent transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-schema-faint mb-5">
              quick_links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-schema-dim hover:text-schema-accent transition-colors duration-300 text-sm"
                  >
                    $ cd {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-schema-faint mb-5">
              services
            </h4>
            <ul className="space-y-2.5 text-schema-dim text-sm">
              <li>├── Database & Caching Consulting</li>
              <li>├── System Architecture Consulting</li>
              <li>├── AI/ML Integration Projects</li>
              <li>├── Technical Leadership</li>
              <li>└── Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-schema-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-schema-faint text-xs">
            <div>
              © {currentYear} Shikha Pandey. Built with React & Tailwind CSS
            </div>
            <div>Available for freelance projects and technical consulting</div>
          </div>

          <div className="text-center mt-6">
            <p className="text-schema-faint2 text-xs">
              Optimizing for cache hits, not just page views —{" "}
              <span className="text-schema-accent">one query at a time</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
