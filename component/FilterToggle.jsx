"use client";
import { useState } from "react";

const FILTER_OPTIONS = ["PRODUITS", "STYLES"];

export default function FilterToggle({ onChange }) {
  const [activeFilter, setActiveFilter] = useState(FILTER_OPTIONS[0]);

  const handleToggle = (filterName) => {
    setActiveFilter(filterName);
    if (onChange) onChange(filterName);
  };

  return (
    <div className="rounded-lg pt-2 pb-2 pr-2 pl-2 flex max-w-xs mx-auto font-sans bg-gray-300/50 shadow-md">
      {FILTER_OPTIONS.map((filter) => {
        const isActive = activeFilter === filter;
        const containerClasses = isActive ? "bg-white shadow-xl" : "bg-transparent hover:bg-white/50";
        const textClasses = isActive ? "text-gray-800 font-bold" : "text-gray-500 font-medium hover:text-gray-700";

        return (
          <div key={filter} className={`flex-1 rounded-lg transition-all duration-100 ${containerClasses}`}>
            <button
              onClick={() => handleToggle(filter)}
              className={`w-full text-base ${textClasses}`}
              style={{ backgroundColor: "transparent" }}
            >
              {filter}
            </button>
          </div>
        );
      })}
    </div>
  );
}
