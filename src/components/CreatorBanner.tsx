import React from "react";
import Image from "next/image";

export default function CreatorBanner() {
  return (
    <section id="creators" className="relative py-24 sm:py-32 bg-[#0047FF] bg-grid-pattern overflow-hidden text-white text-center">
      {/* Decorative Floating 3D Cones and Shapes */}

      {/* Top Left: Lime Ribbon */}
      <div className="absolute -top-20 -left-16 sm:-top-24 sm:left-[-40px] w-44 sm:w-60 h-44 sm:h-60 pointer-events-none animate-float-slow z-0">
        <Image
          src="/cone_spiral_lime.png"
          alt=""
          width={240}
          height={240}
          className="object-contain"
        />
      </div>

      {/* Mid Left: White Squiggle */}
      <div className="absolute top-20 sm:top-5 left-10 sm:left-40 w-20 sm:w-28 h-20 sm:h-28 pointer-events-none animate-float-reverse z-0">
        <div className="w-full h-full" style={{ transform: "rotate(-50deg)" }}>
          <Image
            src="/cone2_white.png"
            alt=""
            width={110}
            height={110}
            className="object-contain brightness-0 invert"
          />
        </div>
      </div>

      {/* Mid Lower Left: White Pyramid */}
      <div className="absolute left-0 sm:left-[-30px] md:left-[-60px] top-2/3 -translate-y-1/2 w-32 sm:w-44 md:w-52 z-10 pointer-events-none">
        <div className="w-full h-full" style={{ transform: "rotate(-30deg)" }}>
          <Image
            src="/cone6_white.png"
            alt=""
            width={200}
            height={200}
            className="object-contain brightness-0 invert"
          />
        </div>
      </div>

      {/* Bottom Left: Lime Torus */}
      <div className="absolute left-[1%] sm:left-[2%] md:left-[3%] lg:left-[6%] -bottom-16 sm:-bottom-20 md:-bottom-30 w-40 sm:w-52 md:w-60 lg:w-70 z-[15] pointer-events-none select-none">
        <Image
          src="/cone4_lime.png"
          alt=""
          width={280}
          height={280}
          className="object-contain -rotate-12 w-full h-auto"
        />
      </div>

      {/* Top Right: Lime Cone */}
      <div className="absolute top-4 sm:top-8 right-16 sm:right-32 w-24 sm:w-36 h-24 sm:h-36 pointer-events-none animate-float-reverse z-0">
        <div className="w-full h-full" style={{ transform: "rotate(-10deg)" }}>
          <Image
            src="/cone6_lime.png"
            alt=""
            width={150}
            height={150}
            className="object-contain rotate-12"
          />
        </div>
      </div>

      {/* Far Right: White Cylinder */}
      <div className="absolute -right-14 sm:-right-10 md:-right-6 lg:-right-35 top-[12%] sm:top-[14%] md:top-[16%] w-44 sm:w-56 md:w-64 lg:w-80 z-10 pointer-events-none select-none">
        <Image
          src="/cone5_white.png"
          alt=""
          width={420}
          height={420}
          className="object-contain drop-shadow-2xl w-full h-auto brightness-0 invert"
          priority
        />
      </div>

      {/* Bottom Right: Lime Squiggle */}
      <div className="absolute bottom-[-1%] right-4 sm:right-16 w-50 sm:w-62 h-28 sm:h-40 pointer-events-none animate-float-reverse z-0">
        <Image
          src="/cone_spiral_lime.png"
          alt=""
          width={360}
          height={360}
          className="object-contain -rotate-45"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-4xl sm:max-w-5xl mx-auto font-normal leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 sm:mt-10">
          <button
            type="button"
            className="bg-[#D2F801] hover:bg-[#c2e600] text-black font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-xl transition-all active:scale-95 cursor-pointer"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}