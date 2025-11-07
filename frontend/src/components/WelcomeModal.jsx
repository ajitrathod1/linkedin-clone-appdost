import React from "react";

export default function WelcomeModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center w-80">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">Welcome to LinkedIn Clone 👋</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A professional network platform where you can connect, post, and grow your career!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Let's Go 🚀
        </button>
      </div>
    </div>
  );
}
