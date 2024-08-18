import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <div className="text-lg font-bold">Abstract | Help Center</div>
      <button className="bg-white text-black px-4 py-2 rounded">
        Submit a request
      </button>
    </header>
  );
};

export default Header;
