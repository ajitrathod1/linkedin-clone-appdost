import React from "react";

export default function ProfileCard() {
  const user = {
    name: "Ajit Rathod",
    title: "Full Stack Developer Intern",
    profileImage:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    followers: 128,
    connections: 256,
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sticky top-20">
      <div className="flex flex-col items-center">
        <img
          src={user.profileImage}
          alt="profile"
          className="w-20 h-20 rounded-full border-4 border-blue-500 mb-3"
        />
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {user.title}
        </p>
      </div>

      <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Connections</span>
          <span className="font-semibold text-blue-600">{user.connections}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Followers</span>
          <span className="font-semibold text-blue-600">{user.followers}</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl">
        View Profile
      </button>
    </div>
  );
}
