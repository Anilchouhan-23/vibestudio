"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const interests = [
  "Cyber Security Solutions (Business/Home)",
  "Web Application Development",
  "Desktop Software Development",
  "Website Designing",
  "VibeCRM / VibeInvoice",
  "Social Media Marketing Tools",
  "GST Billing (Vyapar)",
  "Cloud Payroll (GreytHR)",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi TechVibeStudio!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nInterest: ${formData.interest}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919881849615?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#6C63FF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
              Reach Out
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We&apos;re here to help and answer any questions you might
                  have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center shrink-0">
                    <FiMapPin className="w-5 h-5 text-[#6C63FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Office</h3>
                    <p className="text-gray-500 text-sm">
                      68B, Ashtavinayak Nagar, Canal Road,<br />
                      Nanded, Maharashtra, India - 431605
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center shrink-0">
                    <FiPhone className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+919881849615" className="text-gray-500 text-sm hover:text-[#6C63FF] transition-colors">
                      +91-9881849615
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center shrink-0">
                    <FiMail className="w-5 h-5 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:support@techvibestudio.store" className="text-gray-500 text-sm hover:text-[#6C63FF] transition-colors">
                      support@techvibestudio.store
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a href="https://wa.me/919881849615" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all">
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                  <a href="https://t.me/techvibestudio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                    <FaTelegram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400">GSTIN</p>
                <p className="text-sm font-medium text-gray-700">27ADSPH1409B1ZV</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <FiCheck className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", interest: "", message: "" }); }}
                    className="mt-6 text-[#6C63FF] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                      <input type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 outline-none transition-all"
                        placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 outline-none transition-all"
                        placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <input type="text" required value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 outline-none transition-all"
                        placeholder="Project inquiry" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                      <select value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 outline-none transition-all bg-white">
                        <option value="">Select an interest</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>{interest}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea required rows={5} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..." />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#6C63FF] text-white py-4 rounded-xl font-semibold hover:bg-[#5A52D5] transition-all duration-300 hover:shadow-lg hover:shadow-[#6C63FF]/25">
                    <FiSend className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
