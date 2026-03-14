import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <EnquiryForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
