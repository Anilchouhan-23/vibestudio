import { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy - TechVibeStudio" };

export default function RefundPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refund Policy</h1>
          <p className="text-gray-400">Last updated: March 28, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Software Products</h2>
          <p className="text-gray-600 mb-6">We offer a 7-day refund window for all our software products from the date of purchase. To be eligible for a refund, the product must not have been extensively used or its license key shared with others.</p>

          <h2 className="text-2xl font-bold mb-4">2. Custom Development Services</h2>
          <p className="text-gray-600 mb-6">For custom development projects, refunds are handled based on the milestones completed. If work has commenced, payment for completed milestones is non-refundable. Advance payments for unstarted work may be refunded upon mutual agreement.</p>

          <h2 className="text-2xl font-bold mb-4">3. Third-Party Products</h2>
          <p className="text-gray-600 mb-6">Refunds for third-party products (such as antivirus software, GreytHR, Vyapar, etc.) are subject to the respective vendor&apos;s refund policy. TechVibeStudio will assist in facilitating the refund process.</p>

          <h2 className="text-2xl font-bold mb-4">4. How to Request a Refund</h2>
          <p className="text-gray-600 mb-6">To request a refund, please contact us at <a href="mailto:info@techvibestudio.store" className="text-[#6C63FF] hover:underline">info@techvibestudio.store</a> or call <a href="tel:+919881849615" className="text-[#6C63FF] hover:underline">+91-9881849615</a> with your order details. We will process eligible refunds within 7-10 business days.</p>

          <h2 className="text-2xl font-bold mb-4">5. Cancellation</h2>
          <p className="text-gray-600">You may cancel a subscription or ongoing service at any time. Cancellation will take effect at the end of the current billing period. No partial refunds are provided for unused portions of the billing period.</p>
        </div>
      </section>
    </>
  );
}
