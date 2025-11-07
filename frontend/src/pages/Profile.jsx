import React from "react";

export default function Profile(){
  return(
    <div className="pt-20 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <img src="/default-avatar.png" alt="profile" className="w-24 h-24 rounded-full mx-auto border-2 border-[#0A66C2]" />
        <h2 className="text-2xl font-bold mt-3">Your Name</h2>
        <p className="text-gray-500">Web Developer</p>
        <p className="mt-4">Profile page under construction 🛠️</p>
      </div>
    </div>
  );
}
