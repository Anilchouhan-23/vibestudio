"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    dropdown: [
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
  },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl animated-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">TV</span>
            </div>
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              TechVibe<span className="text-[#6C63FF]">Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-[#6C63FF] bg-purple-50"
                        : scrolled
                        ? "text-gray-700 hover:text-[#6C63FF] hover:bg-purple-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name} <FiChevronDown className="w-3 h-3" />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden max-h-80 overflow-y-auto"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#6C63FF] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#6C63FF] bg-purple-50"
                      : scrolled
                      ? "text-gray-700 hover:text-[#6C63FF] hover:bg-purple-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href="tel:+919881849615"
              className="ml-4 flex items-center gap-2 bg-[#6C63FF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5A52D5] transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              +91-9881849615
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive(link.href)
                        ? "text-[#6C63FF] bg-purple-50"
                        : "text-gray-700 hover:text-[#6C63FF] hover:bg-purple-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-[#6C63FF]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:+919881849615"
                className="flex items-center gap-2 px-4 py-3 text-[#6C63FF] font-medium"
              >
                <FiPhone /> +91-9881849615
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
