"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919881849615";
  const message = encodeURIComponent(
    "Hi TechVibeStudio! I'm interested in your services. Can we discuss?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
