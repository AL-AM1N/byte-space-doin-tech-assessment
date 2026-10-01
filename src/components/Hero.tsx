"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80",
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="home" className="relative overflow-hidden text-white pb-0 select-none min-h-[760px] lg:min-h-[820px]">
      {/* 1. Hero Headline, Subtitle & Search */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10 pt-4 sm:pt-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-semibold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        <p className="mt-3.5 pt-6 sm:mt-4 text-sm sm:text-base md:text-lg text-white/85 max-w-4xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* 2. Search Bar - Separate White Pill & Lime Button */}
        <div className="mt-5 pt-6 sm:mt-6 max-w-lg mx-auto px-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex-1 flex items-center bg-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-lg min-w-0">
              <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 text-sm sm:text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D2F801] hover:bg-[#c3e700] text-black font-semibold text-sm sm:text-base px-7 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all flex-shrink-0 cursor-pointer shadow-md active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* 3. Large 3D Floating Geometries (Big sizes matching Figma) */}

      {/* Top Left: Big Lime 3D Spiral Coil */}
      <div className="absolute -left-14 sm:-left-10 md:-left-6 lg:-left-26 top-[14%] sm:top-[16%] md:top-[18%] w-44 sm:w-56 md:w-64 lg:w-80 z-10 pointer-events-none select-none">
        <Image
          src="/cone_spiral_lime.png"
          alt="Decorative lime spiral"
          width={320}
          height={320}
          className="object-contain drop-shadow-2xl w-full h-auto"
          priority
        />
      </div>

      {/* Mid Left: White 3D Spiral */}
      <div className="absolute left-[8%] sm:left-[11%] md:left-[13%] lg:left-[15%] top-[44%] sm:top-[46%] md:top-[48%] w-20 sm:w-24 md:w-28 lg:w-38 z-10 pointer-events-none select-none">
        <Image
          src="/cone2_white.png"
          alt="Decorative white spiral"
          width={150}
          height={150}
          style={{ transform: "rotate(-50deg)" }}
          className="object-contain -rotate-12 w-full h-auto brightness-0 invert"
        />
      </div>

      {/* Bottom Left: White 3D Torus Donut */}
      <div className="absolute left-[1%] sm:left-[2%] md:left-[3%] lg:left-[6%] bottom-1 sm:bottom-2 md:bottom-4 w-40 sm:w-52 md:w-60 lg:w-70 z-[15] pointer-events-none select-none">
        <Image
          src="/cone4_white.png"
          alt="Decorative white torus"
          width={280}
          height={280}
          className="object-contain -rotate-12 w-full h-auto brightness-0 invert"
        />
      </div>

      {/* Top Right: Big Lime 3D Cylinder */}
      <div className="absolute -right-14 sm:-right-10 md:-right-6 lg:-right-35 top-[12%] sm:top-[14%] md:top-[16%] w-44 sm:w-56 md:w-64 lg:w-80 z-10 pointer-events-none select-none">
        <Image
          src="/cone_cylinder_lime.png"
          alt="Decorative lime cylinder"
          width={420}
          height={420}
          style={{ transform: "rotate(-50deg)" }}
          className="object-contain drop-shadow-2xl w-full h-auto"
          priority
        />
      </div>

      {/* Mid Right: White 3D Pyramid */}
      <div className="absolute right-[8%] sm:right-[11%] md:right-[13%] lg:right-[15%] top-[44%] sm:top-[46%] md:top-[48%] w-20 sm:w-24 md:w-28 lg:w-40 z-10 pointer-events-none select-none">
        <Image
          src="/cone6_white.png"
          alt="Decorative white pyramid"
          width={150}
          height={150}
          className="object-contain drop-shadow-xl w-full h-auto brightness-0 invert"
        />
      </div>

      {/* Bottom Right: White 3D Spiral Coil */}
      <div className="absolute right-[1%] sm:right-[2%] md:right-[3%] lg:right-[4%] bottom-1 sm:bottom-2 md:bottom-4 w-36 sm:w-44 md:w-52 lg:w-56 z-10 pointer-events-none select-none">
        <Image
          src="/cone1_white.png"
          alt="Decorative white spiral"
          width={240}
          height={240}
          className="object-contain drop-shadow-2xl rotate-12 w-full h-auto brightness-0 invert"
        />
      </div>

      {/* 4. Central Visual Stage Grounded Flush with Bottom */}
      <div className="relative mt-4 sm:mt-6 w-full max-w-7xl mx-auto h-[440px] sm:h-[480px] md:h-[510px] lg:h-[530px] flex items-end justify-center">

        {/* Middle Lime Color Half Circle: Exact mathematically perfect half-circle dome grounded to bottom */}
        <div className="absolute w-[560px] h-[280px] sm:w-[640px] sm:h-[270px] md:w-[780px] md:h-[340px] lg:w-[880px] lg:h-[390px] bg-[#D2F801] rounded-t-full bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0" />

        {/* Center: Big Man with Laptop (Preserved aspect ratio, grounded flush to bottom) */}
        <div className="relative z-10 w-[330px] sm:w-[420px] md:w-[470px] lg:w-[500px] flex items-end justify-center pointer-events-none select-none">
          <Image
            src="/man_with_laptop.png"
            alt="Student with laptop and headphones"
            width={500}
            height={510}
            className="object-contain drop-shadow-2xl select-none w-full h-auto max-h-[440px] sm:max-h-[480px] md:max-h-[510px] lg:max-h-[530px]"
            priority
          />
        </div>

        {/* 5. Floating Badges */}

        {/* Badge 1: UI/UX Design (Left of man's neck/ear) */}
        <div className="absolute top-[22%] sm:top-[25%] md:top-[27%] left-[6%] sm:left-[10%] md:left-[14%] lg:left-[25%] bg-white text-gray-900 rounded-[18px] sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.16)] z-20 text-left border border-white/90 select-none">
          <h4 className="font-semibold text-xs sm:text-sm text-gray-900 leading-snug">
            UI/UX Design
          </h4>
          <p className="text-[11px] sm:text-xs text-gray-400 font-normal mt-0.5 whitespace-nowrap">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* Badge 2: Learning Progress (Right of man's ear/neck) */}
        <div className="absolute top-[24%] sm:top-[27%] md:top-[29%] right-[6%] sm:right-[10%] md:right-[14%] lg:right-[28%] bg-white text-gray-900 rounded-[18px] sm:rounded-2xl p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.16)] z-20 text-left border border-white/90 min-w-[150px] sm:min-w-[185px] select-none">
          <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
            Learning Progress
          </p>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mt-1">
            55%
          </div>
          <div className="w-full bg-[#F3F4F6] rounded-full h-2 mt-2.5 overflow-hidden">
            <div className="bg-[#D2F801] h-full rounded-full w-[55%]" />
          </div>
        </div>

        {/* Badge 3: Happy Students (Bottom left, overlapping torus & half circle) */}
        <div className="absolute bottom-6 sm:bottom-9 md:bottom-12 left-[4%] sm:left-[8%] md:left-[12%] lg:left-[20%] bg-white text-gray-900 rounded-[18px] sm:rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.16)] z-[25] text-left border border-white/90 select-none">
          <h4 className="font-semibold text-xs sm:text-sm text-gray-900">
            Happy Students
          </h4>
          <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-800 font-semibold">
            <span>4.5</span>
            <span className="text-gray-400 font-normal text-[11px]">(240)</span>
            <Star className="w-3.5 h-3.5 fill-[#D2F801] text-[#D2F801]" />
          </div>
          <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-2">
            {studentAvatars.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Student ${i + 1}`}
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#D2F801] text-black font-bold text-[10px] sm:text-[11px] flex items-center justify-center border-2 border-white flex-shrink-0">
              2K+
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}