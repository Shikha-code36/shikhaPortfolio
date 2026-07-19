import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Email validation utility
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name && input.subject) {
      setError({ ...error, required: false });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleEmailBlur = () => {
    checkRequired();
    setError({ ...error, email: input.email && !isValidEmail(input.email) });
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    // Validation
    if (!input.email || !input.message || !input.name || !input.subject) {
      setError({ ...error, required: true });
      return;
    }

    if (!isValidEmail(input.email)) {
      setError({ ...error, email: true });
      return;
    }

    setError({ email: false, required: false });
    setIsSubmitting(true);

    const serviceID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log("Environment check:", { serviceID, templateID, publicKey }); // Debug log

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS configuration");
      setError({ ...error, required: true });
      return;
    }

    const options = { publicKey };

    try {
      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      const templateParams = {
        from_name: input.name,
        from_email: input.email,
        subject: input.subject,
        message: input.message,
        to_name: "Shikha",
      };

      const res = await emailjs.send(serviceID, templateID, templateParams);

      if (res.status === 200) {
        setIsSubmitted(true);
        setInput({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError({ ...error, required: true }); // Show error using existing error state
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shikha.py36@gmail.com",
      href: "mailto:shikha.py36@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram, India",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/36-shikha-pandey/",
      href: "https://www.linkedin.com/in/36-shikha-pandey/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Shikha-code36",
      href: "https://github.com/Shikha-code36",
    },
  ];

  const availability = [
    {
      type: "Consulting",
      status: "Available for technical architecture consulting",
    },
    {
      type: "Collaboration",
      status: "Open to interesting technical challenges",
    },
    { type: "Speaking", status: "Available for tech talks and conferences" },
    {
      type: "Mentoring",
      status: "Supporting junior developers and career guidance",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next system architecture challenge?
            <br />
            Let's collaborate on building scalable, high-performance solutions
            that drive business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-3 rounded-lg border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300">
                      <info.icon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Availability
              </h3>
              <div className="space-y-4">
                {availability.map((item) => (
                  <div
                    key={item.type}
                    className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <div>
                        <div className="text-white font-medium">
                          {item.type}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Start a Conversation
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  size={64}
                  className="text-green-400 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMail} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                    onBlur={checkRequired}
                    maxLength="100"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                    onBlur={handleEmailBlur}
                    maxLength="100"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                  {error.email && (
                    <p className="text-red-400 text-sm mt-2">
                      Please provide a valid email!
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={input.subject}
                    onChange={handleInputChange}
                    onBlur={checkRequired}
                    maxLength="150"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={input.message}
                    onChange={handleInputChange}
                    onBlur={checkRequired}
                    maxLength="500"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>

                <div className="flex flex-col items-center gap-4">
                  {error.required && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center space-x-3 w-full">
                      <AlertCircle
                        size={20}
                        className="text-red-400 flex-shrink-0"
                      />
                      <p className="text-red-400 text-sm">
                        All fields are required!
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send
                          size={20}
                          className="group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
