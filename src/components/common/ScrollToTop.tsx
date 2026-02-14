import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 300,
  className = "",
}) => {
  const { isVisible, scrollToTop } = useScrollToTop(threshold);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full bg-black/80 backdrop-blur-md text-white shadow-2xl border border-white/10 hover:bg-black transition-all z-50 group hover:scale-110 active:scale-95 ${className}`}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-xl group-hover:animate-bounce" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
