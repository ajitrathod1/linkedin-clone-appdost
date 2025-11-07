import React from "react";

export default function Jobs() {
  const jobs = [
    { title: "Full Stack Developer", company: "AppDost", location: "Remote" },
    { title: "Backend Engineer", company: "Google", location: "Hyderabad" },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
      <ul className="space-y-3">
        {jobs.map((j, i) => (
          <li key={i} className="border-b pb-2">
            <h4 className="font-semibold">{j.title}</h4>
            <p>{j.company} • {j.location}</p>
            <button className="bg-blue-600 text-white px-3 py-1 mt-2 rounded-md">
              Apply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
