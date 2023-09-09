import React from "react";


export const Navbar = ({ onDownloadClick }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex z-50 justify-between items-center w-screen fixed h-24 bg-white">
      <div className={`flex ml-5 md:ml-10`}>
        <button
          onClick={handleReload}
          className="active:scale-95 text-2xl md:text-3xl pl-3 md:pl-4 -mt-1 font-helvetica-neue font-medium tracking-wider text-neutral-600 ">
          Chad App
        </button>
      </div>
      <div>
        <button
          onClick={onDownloadClick}
          className="rounded-full mr-5 font-medium md:mr-10 text-xs md:text-base active:scale-95 bg-neutral-600 hover:bg-neutral-700  text-neutral-200 py-2 px-3 md:px-5">
          Get Chad
        </button>
      </div>
    </div>
  );
};
