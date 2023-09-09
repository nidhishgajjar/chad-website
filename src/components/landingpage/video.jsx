import React from "react";

export const VideoSection = ({ videoUrl, title, backgroundColor, textColor }) => {
  return (
    <section
      className={`w-full md:h-screen py-12 px-4 ${backgroundColor} ${textColor}`}
      id="video-section">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-semibold text-center">{title}</h2>
        <div className="flex justify-center items-center mt-8 md:mt-16">
          <div className=" w-full">
            <video
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              controls={true}
              src={videoUrl}
              title="Chad Demo Video"></video>
          </div>
        </div>
      </div>
    </section>
  );
};

