"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
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
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit md:max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-4 py-2 rounded-full transition-colors"
              )}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full min-w-[90vw]">
          {/* Logo/Brand */}
          <div className="text-sm font-semibold text-white">Portfolio</div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-neutral-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-black-100/95 backdrop-blur-md border border-white/[0.2] rounded-2xl shadow-lg md:hidden min-w-[90vw]"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    className="px-4 py-3 text-white hover:text-neutral-300 rounded-lg hover:bg-white/10 transition-colors text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-sm font-medium">{navItem.name}</span>
                  </Link>
                ))}

                {/* Download CV Button for Mobile */}
                <motion.a
                  href="/maaz-cv.pdf"
                  download="Maaz_CV.pdf"
                  className="flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-3 text-sm text-white transition-all duration-300 hover:from-purple-600 hover:to-blue-600 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="h-3 w-3" />
                  <span className="font-medium">Download CV</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Download CV Button - Visible on Desktop only */}
        <motion.a
          href="/maaz-cv.pdf"
          download="Maaz_CV.pdf"
          className="group relative hidden md:flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm text-white transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <FaDownload className="h-3 w-3" />
          </motion.div>
          <span className="font-medium">Download CV</span>

          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 blur-md"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.nav>
    </AnimatePresence>
  );
};
