"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
            Client Success Stories
          </h2>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scroll Effect */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 px-8 w-max"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, // Adjust speed here
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={`${t.id}-${i}`} className="w-[350px] md:w-[450px]">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-sm border border-white/50 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="text-blue-100 mb-6 group-hover:text-blue-200 transition-colors">
        <FaQuoteLeft size={40} />
      </div>
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 flex-grow font-medium">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-5 mt-auto pt-6 border-t border-gray-100">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src={testimonial.image || "/images/no-image.jpg"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-sm text-blue-600 font-medium">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
