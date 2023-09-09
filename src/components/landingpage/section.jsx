import React from "react";

export const Section = ({
  title,
  subtitle,
  description,
  backgroundColor,
  textColor,
  index,
  whiteSectionContent,
}) => {
  const isEvenSection = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row text-black h-screen`}>
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center p-10 ${
          isEvenSection ? "bg-neutral-50" : backgroundColor
        } ${isEvenSection ? "order-last sm:order-none" : ""}`}>
        {!isEvenSection && (
          <>
            <h1 className={`text-xl md:text-3xl pt-20 font-bold ${textColor}`}>
              {title}
            </h1>
            <h2 className={`text-lg md:text-2xl pt-6 md:pt-8 font-medium ${textColor}`}>
              {subtitle}
            </h2>
            <h2 className={`text-sm md:text-xl pt-1 md:pt-2 ${textColor}`}>
              {description}
            </h2>
          </>
        )}
        {isEvenSection && whiteSectionContent}
      </div>
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center p-10 ${
          isEvenSection ? backgroundColor : "bg-neutral-50"
        }`}>
        {isEvenSection && (
          <>
            <h1 className={`text-xl md:text-3xl pt-20 font-bold ${textColor}`}>
              {title}
            </h1>
            <h2 className={`text-lg md:text-2xl pt-6 md:pt-8 font-medium ${textColor}`}>
              {subtitle}
            </h2>
            <h2 className={`text-sm md:text-xl pt-2 ${textColor}`}>
              {description}
            </h2>
          </>
        )}
        {!isEvenSection && whiteSectionContent}
      </div>
    </div>
  );
};
