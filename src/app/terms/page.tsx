import { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions - TechVibeStudio" };

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-gray-400">Last updated: March 28, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">By accessing and using the TechVibeStudio website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

          <h2 className="text-2xl font-bold mb-4">2. Services</h2>
          <p className="text-gray-600 mb-6">TechVibeStudio provides software development, web design, desktop application development, and related digital services. The scope, timeline, and deliverables for each project will be defined in individual service agreements.</p>

          <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">All content on this website, including text, graphics, logos, and software, is the property of TechVibeStudio and is protected by applicable intellectual property laws. Upon full payment, clients receive a license to use deliverables as agreed.</p>

          <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
          <p className="text-gray-600 mb-6">Payment terms are specified in individual project agreements. All payments are due as per the agreed schedule. Late payments may incur additional charges.</p>

          <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">TechVibeStudio shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>

          <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
          <p className="text-gray-600 mb-6">These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Nanded, Maharashtra.</p>

          <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
          <p className="text-gray-600">For questions about these Terms, contact us at <a href="mailto:support@techvibestudio.store" className="text-[#6C63FF] hover:underline">support@techvibestudio.store</a>.</p>
        </div>
      </section>
    </>
  );
}
