import React from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Community testimonials" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-tr from-[#EBF3FF]/70 via-white to-[#F4FDE8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight leading-[1.18] max-w-xl">
              Discover What Our Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-white rounded-3xl border border-gray-100 p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between m-0"
            >
              <div>
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden mb-5 border border-gray-100">
                  <Image
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <figcaption>
                  <h3 className="font-bold text-base sm:text-lg text-gray-950">
                    {t.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#0052FF] mt-0.5 mb-4">
                    {t.role}
                  </p>
                </figcaption>

                {/* Quote */}
                <blockquote className="m-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {t.quote}
                  </p>
                </blockquote>
              </div>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}