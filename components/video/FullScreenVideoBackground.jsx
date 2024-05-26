"use client";
import { Heading } from "lucide-react";
import "./FullScreenVideoBackground.css";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Headings from "../Common/Headings";

const FullScreenVideoBackground = () => {
  const videoRef = useRef(null);
  const reverse = useRef(false);
  function scrollDownBy100vh() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  }

  useEffect(() => {
    const video = videoRef.current;

    const handlePlayDirection = () => {
      console.log(video);
      video.playbackRate = 0.7;
    };

    const handleEnded = () => {
      if (!reverse.current) {
        video.currentTime = video.duration - 0.1;
        reverse.current = true;
      } else {
        video.currentTime = 0.1;
        reverse.current = false;
      }
      video.play();
      handlePlayDirection();
    };

    video.addEventListener("ended", handleEnded);
    handlePlayDirection();

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="w-full h-[100vh]">
      <video
        className="background-video"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        value={0.3}
      >
        <source
          src="https://videos.pexels.com/video-files/6985519/6985519-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="content">
          <div className="flex flex-col items-center gap-5  p-5 sm:p-10 lg:p-20  max-w-[1080px]">
            {/* <span className='bgGrad w-fit text-xl py-2 px-8 rounded-full font-semibold uppercase tracking-[3px]'>hello bitians 👋</span> */}
            <Headings head={"Value your time"} />
            <h1 className="text-center text-3xl font-bold md:text-5xl">
              A world of&nbsp;
              <span className="text-background heroColor2 shadow-solid">
                CRN&apos;s and Notes
              </span>
            </h1>
            <p className="text-center  font-light  text-secondary-foreground">
              Study Send is a community which provides you to oppertunity to
              store your CRN&apos;s notes. Start sharing your notes, be a tutor
              and get paid.
            </p>
            <Button onClick={() => scrollDownBy100vh()}>Know more...</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenVideoBackground;
