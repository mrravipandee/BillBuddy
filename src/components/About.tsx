"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BillBuddyScreenshot1,
  BillBuddyScreenshot2,
  BillBuddyScreenshot3,
} from "../../public";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const images = [
    { src: BillBuddyScreenshot1, alt: "Bill Buddy Dashboard" },
    { src: BillBuddyScreenshot2, alt: "Bill Buddy Invoicing" },
    { src: BillBuddyScreenshot3, alt: "Bill Buddy Reports" },
  ];

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * images.length);
      setActiveIndex(Math.min(index, images.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress, images.length]);

  // Animations for text opacity + movement
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const x1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [0, 50, 100]);

  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [-100, 0, 0, 50]);

  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
  const x3 = useTransform(scrollYProgress, [0.6, 0.7, 1], [-50, 0, 0]);


  return (
    <div ref={containerRef} className="h-[300vh] relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Images */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={false}
            animate={{
              opacity: index === activeIndex ? 1 : 0,
              scale: index === activeIndex ? 1 : 1.1,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}

        {/* Text always centered */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="text-center px-4">
            <motion.h2
              style={{ opacity: opacity1, x: x1 }}
              className="text-4xl md:text-6xl font-bold text-gray-500 drop-shadow-lg"
            >
              Bill Buddy makes billing management easy
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity2, x: x2 }}
              className="text-4xl md:text-6xl font-bold text-gray-500 drop-shadow-lg"
            >
              Streamline your invoicing process
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity3, x: x3 }}
              className="text-4xl md:text-6xl font-bold text-gray-500 drop-shadow-lg"
            >
              Get started with Bill Buddy today!
            </motion.h2>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
