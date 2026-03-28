import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import ProductsPreview from "@/components/ProductsPreview";
import ClientsSection from "@/components/ClientsSection";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProductsPreview />
      <ClientsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
