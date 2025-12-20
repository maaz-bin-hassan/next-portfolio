"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [isMobile, setIsMobile] = useState(true);
  let wordsArray = words.split(" ");

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
  }, []);

  useEffect(() => {
    // Skip heavy per-word animation on mobile
    if (isMobile) {
      // Just show all words immediately with a simple fade
      animate(
        "span",
        { opacity: 1 },
        { duration: 0.5 }
      );
    } else {
      animate(
        "span",
        { opacity: 1 },
        { duration: 2, delay: stagger(0.2) }
      );
    }
  }, [animate, isMobile]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn("text-white opacity-0", idx > 3 && "text-purple")}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

