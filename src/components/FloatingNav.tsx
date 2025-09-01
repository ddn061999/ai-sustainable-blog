import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const scrollProgress = scrollYProgress.get();
      
      // Show nav when user has scrolled down more than 10% of the page
      if (scrollProgress > 0.1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
      // Detect background sections based on scroll position
      // Adjust these values based on your page sections
      const viewportHeight = window.innerHeight;
      const scrollPosition = scrollProgress * (document.documentElement.scrollHeight - viewportHeight);
      
      // Sample the background color at the navbar position
      const element = document.elementFromPoint(window.innerWidth / 2, 60); // 60px is roughly where navbar sits
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        
        // If no background color is set, check parent elements
        let currentElement = element;
        let finalBgColor = bgColor;
        
        while (currentElement && (finalBgColor === 'rgba(0, 0, 0, 0)' || finalBgColor === 'transparent')) {
          currentElement = currentElement.parentElement;
          if (currentElement) {
            finalBgColor = window.getComputedStyle(currentElement).backgroundColor;
          }
        }
        
        // Determine if background is light or dark
        if (finalBgColor && finalBgColor !== 'rgba(0, 0, 0, 0)' && finalBgColor !== 'transparent') {
          const rgb = finalBgColor.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const r = parseInt(rgb[0]);
            const g = parseInt(rgb[1]);
            const b = parseInt(rgb[2]);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsLightBackground(luminance > 0.5);
          }
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full z-[5000] px-8 py-2 items-center justify-center space-x-4 transition-all duration-300 ease-in-out",
          isLightBackground 
            ? "bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-lg" 
            : "bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-lg",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 transition-colors duration-300 ease-in-out",
              isLightBackground 
                ? "text-gray-700 hover:text-gray-900" 
                : "text-gray-200 hover:text-white"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};