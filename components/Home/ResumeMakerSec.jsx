import React from "react";
import Headings from "../Common/Headings";

import { Video, NotebookPen, Trophy, WandSparkles } from "lucide-react";

const ResumeMakerSec = () => {
  return (
    <div className="relative flex flex-col items-center gap-20 p-5 sm:p-10 my-12  m-5 sm:m-10 lg:m-20 mt-12">
      {/* <img
        className="absolute w-10 -top-5 -left-5 "
        src="/img/star.svg"
        alt=""
      />
      <img
        className="absolute w-10 -bottom-5 -right-5"
        src="/img/star.svg"
        alt=""
      />
      <img
        className="absolute w-10 -bottom-5 -left-5"
        src="/img/star.svg"
        alt=""
      />
      <img
        className="absolute w-10 -top-5 -right-5"
        src="/img/star.svg"
        alt=""
      />
      <img
        className="absolute -top-1/2 right-1/2 -z-10 opacity-50"
        src="/img/blurBall.svg"
        alt=""
      /> */}

      <div className="flex flex-col gap-5 max-w-[960px] items-center text-center">
        <Headings head={"Study that matters"} />
        <h1 className="text-3xl sm:text-4xl font-bold ">
          A productive and trusted platform for your{" "}
          <span className="textGrad">Courses</span> and{" "}
          <span className="textGrad">CRNs</span>
        </h1>
        <p className="sm:text-lg text-secondary-foreground font-light">
          {" "}
          Missed a class? No worries, we got you covered. This platform provides
          you notes of your courses and CRNs. With the power of AI store your
          notes for the revison and get the best out of it. Further you can also
          get the notes of your friends and share your notes with them. If they
          need help they could book a slot with you. Our platform values your
          time and helps you to get the best out of it. Follow students of your
          and other universities and learn better!
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center ">
        <div className="flex flex-col w-fit items-center gap-4 max-w-80 text-center ">
          <div className="p-4 w-fit bgGrad rounded-xl aspect-square">
            <NotebookPen />
          </div>
          <h2 className="text-2xl font-bold">Store Notes</h2>
          <p>
            You can store notes securely, share them, and view notes based on
            CRNs. Everyone has access to the right information for each course.
          </p>
        </div>
        <div className="flex flex-col w-fit items-center gap-4 max-w-80 text-center">
          <div className="p-4 w-fit bgGrad rounded-xl aspect-square">
            <WandSparkles />
          </div>
          <h2 className="text-2xl font-bold">AI Revision</h2>
          <p>
            You can use AI to revise your notes, ensuring they are accurate and
            up-to-date. Helps enhance the quality of your notes effortlessly.
          </p>
        </div>
        <div className="flex flex-col w-fit items-center gap-4 max-w-80 text-center">
          <div className="p-4 w-fit bgGrad rounded-xl aspect-square">
            <Video />
          </div>
          <h2 className="text-2xl font-bold">Book Sessions</h2>
          <p>
            You can book sessions with the notes owner to clear your doubts.
            This feature ensures personalized help and a better understanding of
            the notes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeMakerSec;
