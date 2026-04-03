import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy - TechVibeStudio" };

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: March 28, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">We collect information you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide when you fill out our contact forms, purchase our products, or communicate with us.</p>

          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">We use the information we collect to provide, maintain, and improve our services, to communicate with you about products, services, and events, and to respond to your comments, questions, and customer service requests.</p>

          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 mb-6">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
          <p className="text-gray-600 mb-6">Our website may use cookies to enhance user experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent.</p>

          <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
          <p className="text-gray-600 mb-6">Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these sites.</p>

          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@techvibestudio.store" className="text-[#6C63FF] hover:underline">support@techvibestudio.store</a> or call us at <a href="tel:+919881849615" className="text-[#6C63FF] hover:underline">+91-9881849615</a>.</p>
        </div>
      </section>
    </>
  );
}
