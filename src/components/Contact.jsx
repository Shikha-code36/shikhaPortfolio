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
import { SectionHeader } from "./shared/SectionHeader";

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
      label: "email",
      value: "shikha.py36@gmail.com",
      href: "mailto:shikha.py36@gmail.com",
    },
    {
      icon: MapPin,
      label: "location",
      value: "Gurugram, India",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "linkedin",
      value: "linkedin.com/in/36-shikha-pandey/",
      href: "https://www.linkedin.com/in/36-shikha-pandey/",
    },
    {
      icon: Github,
      label: "github",
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

  const inputClass =
    "w-full px-4 py-3 bg-schema-raised2 border border-schema-border rounded-lg text-schema-text placeholder-schema-faint2 focus:border-schema-accent focus:outline-none transition-colors duration-300 text-sm";

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="contact.sql"
          title="Let's Build Something Amazing Together"
          subtitle="Ready to discuss your next system architecture, database, or caching challenge?"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-schema-faint mb-5">
                get_in_touch
              </h3>
              <div className="space-y-3">
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
                    className="flex items-center gap-4 text-schema-dim hover:text-schema-accent transition-colors duration-300 group"
                  >
                    <div className="bg-schema-raised p-3 rounded-lg border border-schema-border group-hover:border-schema-accentdim transition-colors duration-300">
                      <info.icon size={18} className="text-schema-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-schema-faint">
                        {info.label}
                      </div>
                      <div className="text-sm font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-schema-faint mb-5">
                availability
              </h3>
              <div className="space-y-3">
                {availability.map((item) => (
                  <div
                    key={item.type}
                    className="bg-schema-raised border border-schema-border rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        size={15}
                        className="text-schema-accent flex-shrink-0"
                      />
                      <div>
                        <div className="text-schema-heading text-sm font-medium">
                          {item.type}
                        </div>
                        <div className="text-schema-faint text-xs">
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
          <div className="bg-schema-raised border border-schema-border rounded-lg p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-wider text-schema-faint mb-6">
              start_a_conversation
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  size={48}
                  className="text-schema-accent mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-schema-heading mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-schema-faint text-sm">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMail} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-schema-dim text-sm mb-2"
                  >
                    name *
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
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-schema-dim text-sm mb-2"
                  >
                    email *
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
                    className={inputClass}
                    placeholder="your.email@example.com"
                  />
                  {error.email && (
                    <p className="text-schema-red text-xs mt-2">
                      Please provide a valid email!
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-schema-dim text-sm mb-2"
                  >
                    subject *
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
                    className={inputClass}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-schema-dim text-sm mb-2"
                  >
                    message *
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
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>

                <div className="flex flex-col items-center gap-4">
                  {error.required && (
                    <div className="bg-schema-red/10 border border-schema-red/30 rounded-lg p-4 flex items-center gap-3 w-full">
                      <AlertCircle
                        size={18}
                        className="text-schema-red flex-shrink-0"
                      />
                      <p className="text-schema-red text-sm">
                        All fields are required!
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-schema-accent text-[#052018] px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#052018] border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={17} />
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
