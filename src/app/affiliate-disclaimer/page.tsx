import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer - TechVibeStudio",
};

export default function AffiliateDisclaimerPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Affiliate Disclaimer
          </h1>
          <p className="text-gray-400">Last updated: April 12, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed mb-8">
            Some links on our website may be affiliate links. If you make a
            purchase through those links, we may earn a commission.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                1. Commission Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                TechVibeStudio participates in various affiliate programs, which
                means we may earn a commission when you click on or make a
                purchase through certain links on our website, blog posts,
                service pages, or recommended tools lists.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These affiliate partnerships help us sustain our operations,
                produce high-quality content, and continue offering free
                resources and insights to our readers. The commissions we
                receive do not influence the editorial integrity or objectivity
                of our content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                2. No Extra Cost to You
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Using our affiliate links does not increase the price you pay
                for any product or service. You pay the exact same amount
                whether you use our link or navigate to the vendor directly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In some cases, we may be able to negotiate exclusive discounts
                or bonus offers for our audience through our affiliate
                partnerships, which may actually save you money compared to
                purchasing through other channels.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                3. Honest Recommendations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We only recommend products, services, and tools that we have
                personally evaluated or that we genuinely believe provide value
                to our audience. Our recommendations are based on quality,
                reliability, and relevance to the needs of our readers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If a product or service does not meet our standards, we will not
                promote it regardless of the commission offered. Our reputation
                and your trust are more important than any affiliate revenue.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                4. Transparency Commitment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Transparency is a core value at TechVibeStudio. We clearly
                disclose affiliate relationships to maintain trust and open
                communication with our users. Where applicable, affiliate links
                are identified within the content.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We comply with applicable advertising disclosure guidelines and
                strive to make our affiliate relationships as visible and
                understandable as possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                5. Types of Affiliate Relationships
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Our affiliate relationships may include, but are not limited
                to, the following types of partnerships:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                <li>
                  Software and SaaS tools that we use or recommend for web
                  development, design, hosting, and business operations
                </li>
                <li>
                  Online courses, training platforms, and educational resources
                  related to technology and business
                </li>
                <li>
                  Business tools such as CRM systems, billing software, project
                  management platforms, and analytics services
                </li>
                <li>
                  Hosting providers, domain registrars, and cloud infrastructure
                  services
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                6. Editorial Independence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Our editorial content, reviews, and recommendations are created
                independently by our team. Affiliate partnerships do not
                dictate, influence, or alter the opinions expressed in our
                articles, guides, or service pages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We maintain full editorial control over all published content.
                Any sponsored or paid content will be clearly marked as such and
                is separate from our affiliate disclosures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                7. Changes to This Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We reserve the right to update or modify this Affiliate
                Disclaimer at any time. Any changes will be reflected on this
                page with an updated revision date. We encourage you to review
                this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                8. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our affiliate relationships or
                this disclaimer, please reach out to us at{" "}
                <a
                  href="mailto:support@techvibestudio.store"
                  className="text-[#6C63FF] hover:underline"
                >
                  support@techvibestudio.store
                </a>
                . We are happy to provide additional clarity on any of our
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
