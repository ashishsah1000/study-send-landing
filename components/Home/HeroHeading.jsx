import React from "react";
import Headings from "../Common/Headings";

const HeroHeading = () => {
  return (
    <div className="flex flex-col items-center gap-5  p-5 sm:p-10 lg:p-20  max-w-[1080px]">
      {/* <span className='bgGrad w-fit text-xl py-2 px-8 rounded-full font-semibold uppercase tracking-[3px]'>hello bitians 👋</span> */}
      <Headings head={"Hello bitians 👋"} />
      <h1 className="text-center text-3xl font-bold md:text-5xl">
        Nurturing Skills for{" "}
        <span className="text-background heroColor2 shadow-solid">
          Tomorrow&apos;s Challenges
        </span>
      </h1>
      <p className="text-center font-light  text-secondary-foreground">
        Welcome to BIT Sindri&apos;s Digital Odyssey! Dive into a treasure trove
        of resources, spark lively discussions, and embark on your academic
        journey with us, Join the constellation of curious minds and let&apos;s
        create a new territory and redefine the realm of education together.
      </p>
    </div>
  );
};

export default HeroHeading;
