"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-[#111827] flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-gray-800 select-none"
        >
          404
        </motion.h1>

        <div className="space-y-4 relative z-10 -mt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 max-w-md mx-auto"
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium inline-block"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
