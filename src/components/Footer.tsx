"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "VibeCRM", href: "/products#vibecrm" },
    { name: "VibeInvoice", href: "/products#vibeinvoice" },
    { name: "VibeSocial", href: "/products#vibesocial" },
    { name: "VibeQR", href: "/products#vibeqr" },
    { name: "VibeAnalytics", href: "/products#vibeanalytics" },
    { name: "VibeChat", href: "/products#vibechat" },
    { name: "VibeBackup", href: "/products#vibebackup" },
    { name: "VibeDesk", href: "/products#vibedesk" },
    { name: "VibeMail", href: "/products#vibemail" },
    { name: "VibeSign", href: "/products#vibesign" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/techvibestudio", label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/techvibestudio", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/techvibestudio", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@techvibestudio", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/919881849615", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl animated-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">TV</span>
              </div>
              <span className="text-xl font-bold text-white">
                TechVibe<span className="text-[#6C63FF]">Studio</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with innovative digital solutions. From
              desktop software to scalable web applications, we bring your ideas
              to life.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#6C63FF] transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#6C63FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#6C63FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 text-[#6C63FF] shrink-0" />
                <span className="text-sm text-gray-400">
                  68B, Ashtavinayak Nagar, Canal Road, Nanded, Maharashtra,
                  India - 431605
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 text-[#6C63FF] shrink-0" />
                <a
                  href="tel:+919881849615"
                  className="text-sm text-gray-400 hover:text-[#6C63FF] transition-colors"
                >
                  +91-9881849615
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-[#6C63FF] shrink-0" />
                <a
                  href="mailto:info@techvibestudio.store"
                  className="text-sm text-gray-400 hover:text-[#6C63FF] transition-colors"
                >
                  info@techvibestudio.store
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#6C63FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TechVibeStudio. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-500">
            GSTIN: 27ADSPH1409B1ZV
          </p>
        </div>
      </div>
    </footer>
  );
}
