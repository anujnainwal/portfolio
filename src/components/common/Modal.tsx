import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
}: ModalProps) => {
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[6px] z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              ${sizeClasses[size]} w-[95%] bg-white/95 rounded-2xl shadow-2xl z-50
              overflow-hidden border border-gray-100 backdrop-blur-xl`}
          >
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                >
                  {title}
                </motion.h2>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100/80 rounded-full cursor-pointer transition-colors duration-300"
                >
                  <IoClose className="w-6 h-6 text-gray-600" />
                </motion.button>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="p-6 relative"
            >
              <div className="relative z-10">{children}</div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
