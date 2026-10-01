import React from "react";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

const BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=70&h=70&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=70&h=70&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=70&h=70&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=70&h=70&q=80",
];

export default function CreateManageSection() {
  return (
    <section aria-label="Create and manage courses" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Visual Composite */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] order-2 lg:order-1">
            {/* 3D Lime Squiggle Ribbon behind creator */}
            <div className="absolute right-6 sm:right-12 top-10 sm:top-16 w-36 sm:w-48 h-36 sm:h-48 z-0 pointer-events-none animate-float-slow">
              <Image
                src="/cone_spiral_lime.png"
                alt=""
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Girl with Tablet */}
            <div className="relative z-10 w-[270px] sm:w-[360px] md:w-[400px]">
              <Image
                src="/girl_with_tab.png"
                alt="Instructor with tablet and headset"
                width={420}
                height={420}
                className="object-contain drop-shadow-2xl select-none"
              />
            </div>

            {/* Floating Card 1 (Top Left): Total Revenue */}
            <div className="absolute left-16 sm:left-30 top-6 sm:top-10 bg-[#0047FF] text-white rounded-2xl p-3.5 sm:p-4 shadow-2xl z-[5] min-w-[140px] sm:min-w-[170px]">
              <div className="text-[11px] text-white/80 font-medium">Total Revenue</div>
              <div className="text-[9px] text-white/60">July 1-28</div>
              <div className="text-xl sm:text-2xl font-extrabold mt-1">$120.29</div>
              {/* Yellow progress line */}
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-[#D2F801] h-full rounded-full w-[70%]" />
              </div>
            </div>

            {/* Floating Card 2 (Middle Left): Year to Date */}
            <div className="absolute left-16 sm:left-20 top-40 sm:top-48 bg-[#0047FF] text-white rounded-2xl p-3 sm:p-3.5 shadow-2xl z-[5] min-w-[125px] sm:min-w-[150px] animate-float-reverse">
              <div className="text-[10px] text-white/80 font-medium">Year to Date</div>
              <div className="text-[8px] text-white/60">2023</div>
              <div className="text-base sm:text-lg font-extrabold mt-0.5">$1,200.38</div>
              <span className="inline-block bg-[#D2F801] text-black font-extrabold text-[9px] px-2 py-0.5 rounded-full mt-1.5">
                +12%
              </span>
            </div>

            {/* Floating Card 3 (Bottom Right): Happy Students */}
            <div className="absolute right-0 sm:right-4 bottom-6 sm:bottom-12 bg-white text-gray-900 rounded-2xl p-3.5 sm:p-4 shadow-2xl z-20 text-left border border-gray-100 animate-float-slow">
              <h3 className="font-bold text-xs sm:text-sm text-gray-900">
                Happy Students
              </h3>
              <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-600 font-medium">
                <span>4.5</span>
                <span className="text-gray-400 text-[11px]">(240)</span>
                <Star aria-hidden="true" className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
              </div>
              {/* Avatars */}
              <div className="flex items-center -space-x-2 mt-2">
                {STUDENT_AVATARS.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Enrolled student"
                    width={28}
                    height={28}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#D2F801] text-black font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  2K+
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Text & Checklist */}
          <div className="lg:col-span-6 space-y-6 max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-950 tracking-tight leading-[1.15]">
              Create &amp; Manage <br />
              Courses Easily.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <span className="font-semibold text-gray-950">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="pt-4 space-y-3.5">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 aria-hidden="true" className="w-6 h-6 fill-[#0052FF] text-white" />
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}