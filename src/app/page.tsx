import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import CoursesSection from "@/components/CoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProfessionalGrowth from "@/components/ProfessionalGrowth";
import CreateManageSection from "@/components/CreateManageSection";
import CreatorBanner from "@/components/CreatorBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#003BE2] bg-grid-pattern overflow-hidden text-white">
        <Navbar />
        <Hero />
      </div>

      <Partners />

      <CoursesSection />

      <CategoriesSection />

      <ProfessionalGrowth />

      <CreateManageSection />

      <CreatorBanner />

      <Testimonials />

      <Footer />
    </main>
  );
}