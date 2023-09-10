import React from 'react'
import macIcon from "../../assets/mac.png";
import windowsIcon from "../../assets/windows.png";

export const Header = ({ showDialog, setShowDialog }) => {
  const macIntel = "https://nidhishgajjar.gumroad.com/l/chadapp"; 
  const macARM = "https://nidhishgajjar.gumroad.com/l/chadapp";
  const windows = "https://nidhishgajjar.gumroad.com/l/chadapp";

  const handleDownload = (url) => {
    window.location.href = url;
  };
  
  const handleDialogClick = (event) => {
    if (event.target === event.currentTarget) {
      setShowDialog(false);
    }
  };

  return (
    <div className=" flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 h-screen">
      <div className="flex-col pb-12 w-full px-12 justify-center items-center">
        <h1 className={`text-xl  md:text-3xl pt-20 font-bold text-neutral-700`}>
          What if you could take ChatGPT everywhere with you?
        </h1>
        <h2
          className={`text-lg  md:text-2xl pt-6 md:pt-8 font-medium text-neutral-700`}>
          Introducing - Chad
        </h2>
        <h2 className={`text-sm  md:text-xl pt-1 md:pt-2 text-neutral-600`}>
          the easiest way to access ChatGPT Plus subscription from anywhere on your computer.
        </h2>
        <h2 className={`text-xs  md:text-md pt-4 md:pt-6 text-neutral-600`}>
          (Bonus - It also makes any web app easily accessible from your desktop)
        </h2>
      </div>
      <div className="w-full flex  justify-center items-center">
        <div className="w-3/4 flex justify-center rounded-3xl items-center bg-white py-9 md:py-20">
          <div className="flex-col text-center">
            <button
              onClick={() => setShowDialog(true)}
              className="rounded-full active:scale-95 text-base md:text-2xl px-3 md:px-8 hover:opacity-80 text-white py-2 md:py-3 font-bold cursor-pointer bg-gradient-to-tr from-purple-500 via-black to-blue-900">
              Download Now
            </button>
            <div className="flex justify-center space-x-7 pt-3">
              <img
                src={macIcon}
                alt="Download Chad for Mac"
                className="md:w-7 md:h-7 w-5 h-5 opacity-75"
              />
              <img
                src={windowsIcon}
                alt="Download Chad for Windows"
                className="md:w-7 md:h-7 w-5 h-5  opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
      {showDialog && (
        <div
          className="fixed w-full h-screen z-50 flex items-center justify-center bg-opacity-80 px-10 bg-neutral-700"
          onClick={handleDialogClick}>
          <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
            <h3 className="text-xl text-neutral-700 mb-4">
              Select your operating system:
            </h3>
            <div className="flex flex-wrap justify-center">
              <button
                className="flex flex-col items-center bg-gradient-to-tr from-purple-500 via-black to-blue-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 text-white px-4 py-4 rounded-lg mx-2 my-2 w-32 transition-colors duration-200 ease-in-out"
                onClick={() => handleDownload(macIntel)}>
                <img
                  src={macIcon}
                  alt="Mac Intel"
                  className="w-5 h-5 mb-2 opacity-75 filter brightness-0 invert"
                />
                <span className="font-semibold text-xl">Mac Intel</span>
                <span className="text-sm text-gray-100">x64</span>
              </button>
              <button
                className="flex flex-col items-center bg-gradient-to-tr from-purple-500 via-black to-blue-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 text-white px-4 py-4 rounded-lg mx-2 my-2 w-32 transition-colors duration-200 ease-in-out"
                onClick={() => handleDownload(macARM)}>
                <img
                  src={macIcon}
                  alt="Mac ARM"
                  className="w-5 h-5 mb-2 opacity-75 filter brightness-0 invert"
                />
                <span className="font-semibold text-xl">Mac ARM</span>
                <span className="text-sm text-gray-100">ARM64</span>
              </button>
              <button
                className="flex flex-col items-center text-xl font-semibold bg-gradient-to-tr from-purple-500 via-black to-blue-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 text-white px-4 py-4 rounded-lg mx-2 my-2 w-32 transition-colors duration-200 ease-in-out"
                onClick={() => handleDownload(windows)}>
                <img
                  src={windowsIcon}
                  alt="Windows"
                  className="w-5 h-5 mb-2 opacity-75 filter brightness-0 invert"
                />
                Windows
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
