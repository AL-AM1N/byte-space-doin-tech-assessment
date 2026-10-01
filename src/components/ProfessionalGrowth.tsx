import React from "react";
import Image from "next/image";
import { BarChart2 } from "lucide-react";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function ProfessionalGrowth() {
  return (
    <section aria-label="Professional growth" className="relative pt-20 sm:pt-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-[radial-gradient(ellipse_at_top_left,rgba(210,248,1,0.35)_0%,rgba(210,248,1,0.15)_35%,rgba(255,255,255,0)_75%)] pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content & Stats */}
          <div className="lg:col-span-6 space-y-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats Row */}
            <div className="pt-6 flex items-center gap-10 sm:gap-14">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-[#0052FF]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composite */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            {/* 3D Lime Squiggle Ribbon behind student */}
            <div className="absolute right-0 sm:right-6 top-8 sm:top-12 w-36 sm:w-52 h-36 sm:h-52 z-[15] pointer-events-none animate-float-slow">
              <div className="w-full h-full" style={{ transform: "rotate(-50deg)" }}>
                <Image
                  src="/cone_spiral_lime.png"
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Man with Laptop */}
            <div className="relative z-10 w-[280px] sm:w-[380px] md:w-[420px]">
              <Image
                src="/man_with_laptop.png"
                alt="Student with laptop"
                width={440}
                height={420}
                className="object-contain drop-shadow-2xl select-none"
              />
            </div>

            {/* Floating Card 1: Course Card Preview */}
            <div className="absolute left-8 sm:left-16 top-12 sm:top-16 bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-gray-100 z-[5] w-[190px] sm:w-[220px] animate-float-slow">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 mb-2.5">
                <Image
                  src="/card_photo.jpg"
                  alt="Learn Figma"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[8px] sm:text-[9px] text-white">
                  <span className="bg-black/60 px-1.5 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-black/60 px-1.5 py-0.5 rounded-full">
                    2 hours 16 mins
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight truncate">
                Learn Figma fro...
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#0052FF] font-medium mt-0.5">
                <span className="text-gray-500">by</span> purepearl studio
              </p>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div className="flex items-center gap-1 text-[10px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                  <BarChart2 aria-hidden="true" className="w-2.5 h-2.5 text-gray-400" />
                  <span>Beginner</span>
                </div>
              </div>
              <div className="text-xs pt-4 font-bold text-[#0052FF]">
                $25
                <span className="text-[9px] text-gray-400 font-normal">
                  /lifetime
                </span>
              </div>
            </div>

            {/* Floating Card 2: Learning Progress */}
            <div className="absolute -right-2 sm:right-15 bottom-35 sm:bottom-50 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100 z-10 min-w-[140px] sm:min-w-[170px] animate-float-reverse">
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                Learning Progress
              </p>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
                55%
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-[#D2F801] h-full rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}