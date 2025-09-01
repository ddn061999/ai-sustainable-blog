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
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // Show background when user has scrolled down
      if (scrollYProgress.get() > 0.05) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[5000] transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-center px-6 py-4">
        <nav className="flex items-center space-x-8">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              to={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 transition-colors duration-300",
                isScrolled 
                  ? "text-slate-700 hover:text-slate-900" 
                  : "text-white hover:text-white/80"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium font-helvetica">{navItem.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};