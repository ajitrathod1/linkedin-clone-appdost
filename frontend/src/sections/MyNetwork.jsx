import React from "react";

export default function MyNetwork() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">People you may know</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p>👤 <strong>Arjun Kumar</strong></p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md">Connect</button>
        </div>
        <div className="flex items-center justify-between">
          <p>👤 <strong>Rohit Raj</strong></p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md">Connect</button>
        </div>
      </div>
    </div>
  );
}
