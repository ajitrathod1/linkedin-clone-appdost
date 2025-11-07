import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function RightPanel({ panel, onClose }) {
  const content = {
    home: "Welcome to your LinkedIn Home Feed!",
    network: "Here you’ll see connection suggestions and invites.",
    jobs: "Find job opportunities tailored to your profile.",
    messages: "Your recent conversations appear here.",
    notifications: "All your recent updates and alerts.",
    profile: "Your personal LinkedIn profile overview.",
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 p-5"
    >
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h2 className="font-bold text-lg text-blue-600 capitalize">{panel}</h2>
        <X onClick={onClose} className="cursor-pointer" />
      </div>
      <p className="text-gray-600 dark:text-gray-300">{content[panel]}</p>
    </motion.div>
  );
}
