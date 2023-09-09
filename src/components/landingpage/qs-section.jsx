import React from "react";

export const QuickSearchSection = ({ backgroundColor, textColor, onButtonClick }) => {
  return (
    <section
      className={`w-full h-screen flex flex-col items-center justify-center ${backgroundColor} `}>
      <h2
        className={`text-xl md:text-3xl font-semibold text-center mb-4 ${textColor}`}>
        Not an avid ChatGPT user? Don't worry.
      </h2>
      <p
        className={`text-base md:text-lg text-center px-8 md:px-40 mb-8 ${textColor}`}>
        Use Chad to make your favourite web app easily accessible.
        To boost productivity and streamline your workflow.
      </p>
        <button className="bg-gradient-to-tr from-purple-500 via-black to-blue-900 text-2xl hover:opacity-80 text-neutral-50 font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
          Try Now
        </button>
    </section>
  );
};

