import React from "react";
import callChad from "../../assets/call-chad.gif";
import chatGPT from "../../assets/chatgpt.gif";
import quickSearch from "../../assets/quicksearch.gif";
import { Section } from "./section";
import { Footer } from "./footer";
import { VideoSection } from "./video";
import { QuickSearchSection } from "./qs-section";

export const Body = () => {
  const videoUrl = "https://chad-distributable.s3.amazonaws.com/trim_E8720173-87FC-4A92-89F9-63B2B4DEE422.mp4";

  return (
    <div>
      <VideoSection
        videoUrl={videoUrl}
        title="How Chad Works?"
        backgroundColor="bg-white"
        textColor="bg-gradient-to-tl from-neutral-800 via-neutral-500 to-neutral-800 bg-clip-text text-transparent"
      />
      <Section
        title="Call Chad"
        subtitle="⌥ + Space"
        backgroundColor="bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200"
        textColor="bg-gradient-to-t from-neutral-800 via-neutral-400 to-neutral-800 bg-clip-text text-transparent"
        index={3}
        whiteSectionContent={
          <div className="w-full h-72 mt-6 rounded-3xl bg-neutral-100 flex justify-center items-center p-5">
            <img src={callChad} className="rounded-lg" alt="Call Chad" />
          </div>
        }
      />
      <Section
        title="Chad uses ChatGPT"
        subtitle="just Enter"
        backgroundColor="bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200"
        textColor="bg-gradient-to-t from-neutral-800 via-neutral-400 to-neutral-800 bg-clip-text text-transparent"
        index={2}
        whiteSectionContent={
          <img
            src={chatGPT}
            className="rounded-xl -mt-3 opacity-80"
            alt="Chad using ChatGPT"
          />
        }
      />
      <Section
        title="Access Quick Search"
        subtitle="⌘ + Enter"
        description="Alt + Enter (windows)"
        backgroundColor="bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200"
        textColor="bg-gradient-to-t from-neutral-800 via-neutral-400 to-neutral-800 bg-clip-text text-transparent"
        index={5}
        whiteSectionContent={
          <img
            src={quickSearch}
            className="rounded-xl opacity-80"
            alt="Call Chad"
          />
        }
      />
      <QuickSearchSection
        backgroundColor="bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200"
        textColor="bg-gradient-to-br from-neutral-700 via-neutral-500 to-neutral-700 bg-clip-text text-transparent"
      />
      <Footer />
    </div>
  );
};

export default Body;