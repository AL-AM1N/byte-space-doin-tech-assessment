import React from "react";
import {
  Compass,
  Code,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "design",
    name: "Design",
    icon: Compass,
  },
  {
    id: "dev",
    name: "Development",
    icon: Code,
  },
  {
    id: "it",
    name: "IT & Software",
    icon: Laptop,
  },
  {
    id: "business",
    name: "Business",
    icon: Building2,
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
  },
  {
    id: "photography",
    name: "Photography",
    icon: Camera,
  },
];

export default function CategoriesSection() {
  return (
    <section aria-label="Course categories" className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-950 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-4xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-400 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg"
              >
                {/* Lime Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#D2F801] flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-sm">
                  <IconComponent aria-hidden="true" className="w-6 h-6 text-black stroke-[2.2]" />
                </div>
                {/* Category Name */}
                <span className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-[#0052FF] transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}