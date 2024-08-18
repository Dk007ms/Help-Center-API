import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value); // Pass the search term to the parent component
  };

  return (
    <div className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-6">How can we help?</h1>
      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full py-3 pl-4 pr-12 border rounded-full shadow-md focus:outline-none"
        />
        <button className="absolute right-0 top-0 bottom-0 bg-white px-4 rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
