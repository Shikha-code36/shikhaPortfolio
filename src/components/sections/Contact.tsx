import { Github, Linkedin, Mail, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { soundManager } from '../../utils/soundManager';
import emailjs from '@emailjs/browser';

// Email validation utility
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// EmailJS configuration from environment variables
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState({ 
    required: false, 
    email: false,
    send: false 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setError({ required: false, email: false, send: false });
    
    // Form validation
    if (!formData.email || !formData.message || !formData.name || !formData.subject) {
      setError({ ...error, required: true });
      soundManager.playBeep(400);
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      setError({ ...error, email: true });
      soundManager.playBeep(400);
      return;
    }

    // Check if EmailJS is configured
    if (!serviceID || !templateID || !publicKey) {
      console.error('EmailJS configuration missing. Please set up environment variables.');
      setError({ ...error, send: true });
      soundManager.playBeep(400);
      return;
    }

    setSending(true);

    try {
      // Initialize EmailJS
      emailjs.init(publicKey);
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Shikha",
      };

      const response = await emailjs.send(serviceID, templateID, templateParams);
      
      if (response.status === 200) {
        soundManager.playBeep(1000);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      }
    } catch (err) {
      console.error('Email send failed:', err);
      setError({ required: false, email: false, send: true });
      soundManager.playBeep(400);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 font-mono mb-8 border-b-2 border-cyan-500 pb-4">
        &gt; Contact_
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-4 font-mono">
              &gt; Get in touch
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Interested in collaborating on enterprise AI/ML solutions, discussing generative AI architectures,
              or exploring opportunities in AI-powered products? Let's connect.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="https://github.com/Shikha-code36"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-900/50 border-2 border-cyan-700 rounded-lg hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <Github className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
              <div>
                <div className="font-mono text-cyan-300 group-hover:text-cyan-200 transition-colors">GitHub</div>
                <div className="text-sm text-gray-400">@Shikha-code36</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/36-shikha-pandey/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-900/50 border-2 border-cyan-700 rounded-lg hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <Linkedin className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
              <div>
                <div className="font-mono text-cyan-300 group-hover:text-cyan-200 transition-colors">LinkedIn</div>
                <div className="text-sm text-gray-400">Shikha Pandey</div>
              </div>
            </a>

            <a
              href="https://pandeyshikha075.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-900/50 border-2 border-cyan-700 rounded-lg hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <Mail className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
              <div>
                <div className="font-mono text-cyan-300 group-hover:text-cyan-200 transition-colors">Medium</div>
                <div className="text-sm text-gray-400">@pandeyshikha075</div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-gray-900/50 border-2 border-cyan-700 rounded-lg p-6">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <CheckCircle size={64} className="text-green-400" />
              <div className="font-mono text-green-400 text-lg">
                &gt; Message sent successfully!
              </div>
              <div className="text-gray-400 text-sm">
                Thank you for reaching out. I'll get back to you soon!
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error.required && (
                <div className="bg-red-900/20 border border-red-500 rounded p-3 flex items-center gap-2">
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-400 text-sm font-mono">All fields are required</span>
                </div>
              )}
              
              {error.email && (
                <div className="bg-red-900/20 border border-red-500 rounded p-3 flex items-center gap-2">
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-400 text-sm font-mono">Please enter a valid email</span>
                </div>
              )}
              
              {error.send && (
                <div className="bg-red-900/20 border border-red-500 rounded p-3 flex items-center gap-2">
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-400 text-sm font-mono">Failed to send. Please try again.</span>
                </div>
              )}

              <div>
                <label className="block text-cyan-300 font-mono text-sm mb-2">
                  &gt; Name: *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black border-2 border-cyan-700 rounded px-4 py-2 text-gray-300 font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-mono text-sm mb-2">
                  &gt; Email: *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border-2 border-cyan-700 rounded px-4 py-2 text-gray-300 font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-mono text-sm mb-2">
                  &gt; Subject: *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black border-2 border-cyan-700 rounded px-4 py-2 text-gray-300 font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-mono text-sm mb-2">
                  &gt; Message: *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-black border-2 border-cyan-700 rounded px-4 py-2 text-gray-300 font-mono focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-mono py-3 rounded transition-colors flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}