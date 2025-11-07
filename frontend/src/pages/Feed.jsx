import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HomeFeed from "../sections/HomeFeed";
import MyNetwork from "../sections/MyNetwork";
import Jobs from "../sections/Jobs";

export default function Feed() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="bg-[#f3f2ef] min-h-screen">
      <Navbar setActivePage={setActivePage} />

      <div className="p-6">
        {activePage === "home" && <HomeFeed />}
        {activePage === "network" && <MyNetwork />}
        {activePage === "jobs" && <Jobs />}
      </div>
    </div>
  );
}
