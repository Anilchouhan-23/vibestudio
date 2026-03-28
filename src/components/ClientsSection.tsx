"use client";

import { motion } from "framer-motion";

const clients = [
  "Aishwarya Solar",
  "Hostlasting",
  "S R Engineers",
  "GreenTech Solutions",
  "NexGen Infra",
  "BluePeak Industries",
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Our Valued Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#6C63FF]/20 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-sm font-semibold text-gray-600 text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
