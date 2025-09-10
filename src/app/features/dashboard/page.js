// src/app/page.js
import React from "react";

export default function Page() {
  return (
    <div className="flex">
      {/* Main Content Area */}
      <main className="flex-1 p-4">
        <h1 className="text-center font-medium p-2 bg-rose-300 rounded-3xl">Welcome to the Dashboard</h1>
        {/* You can add content here that will change when you click on the sidebar menu items */}
        <div className="dashboard-content">
          {/* Render the content for the selected Dashboard menu item here */}
          <p>Click on a menu item from the sidebar to view content.</p>
        </div>
      </main>
    </div>
  );
}
