"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChartNoAxesColumnIncreasing } from "lucide-react";

interface Course {
  id: number;
  title: string;
  image: string;
  lessons: string;
  duration: string;
  comments: string;
  author: string;
  rating: string;
  level: string;
  price: string;
  category: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/card_photo.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    category: "Featured",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    image: "/card_photo1.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    category: "Featured",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    image: "/card_photo2.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    category: "Featured",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    image: "/card_photo3.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    category: "Featured",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    image: "/card_photo4.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    category: "Featured",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    image: "/card_photo5.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    category: "Featured",
  },
];

const FILTER_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80",
];

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("Featured");

  return (
    <section id="courses" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-950 tracking-tight leading-tight">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-2.5 max-w-6xl mx-auto">
          {FILTER_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            >
              {row.map((item) => {
                const isActive = activeFilter === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(item)}
                    className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#D2F801] text-black font-semibold shadow-sm"
                        : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200 border border-transparent"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              {rowIndex === FILTER_ROWS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setActiveFilter("More")}
                  className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-[#0052FF] hover:underline cursor-pointer"
                >
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        {/* 6 Course Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl border border-gray-100 p-4 sm:p-4.5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image with Floating Info Badges */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  loading="eager"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Pills */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
                  <div className="bg-black/55 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                    {course.lessons}
                  </div>
                  <div className="bg-black/55 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                    {course.duration}
                  </div>
                  <div className="bg-black/55 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                    {course.comments}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-4 px-1 flex flex-col flex-1 justify-between">
                <div>
                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base sm:text-lg text-gray-950 group-hover:text-[#0052FF] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-base font-semibold text-gray-700 flex-shrink-0 pt-0.5">
                      <span>{course.rating}</span>
                      <Star className="w-4 h-4 fill-[#D1D5DB] text-[#D1D5DB]" />
                    </div>
                  </div>

                  {/* Author */}
                  <p className="text-xs text-[#0052FF] font-medium mt-1">
                    <span className="text-gray-600">by</span> {course.author}
                  </p>
                </div>

                {/* Level badge & Avatars */}
                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 bg-[#F3F4F6] text-gray-700 text-xs px-2.5 py-1 rounded-full font-medium">
                    <ChartNoAxesColumnIncreasing className="w-3.5 h-3.5 text-black" />
                    <span>{course.level}</span>
                  </div>

                  {/* Overlapping User Avatars */}
                  <div className="flex items-center -space-x-2">
                    {STUDENT_AVATARS.map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt="Enrolled student"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <div className="w-6 h-6 rounded-full bg-[#D2F801] text-black font-bold text-[9px] flex items-center justify-center border-2 border-white">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-3 pt-2 flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-[#0052FF]">
                    {course.price}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}