import React from "react";
import Headings from "../Common/Headings";
import Image from "next/image";
import Point from "./Point";

const Academics = () => {
  const points = [
    {
      id: "1",
      text: "Store, Share and Revise your notes. View what other students are studying. ",
    },
    {
      id: "2",
      text: "Follow CRN's and explore what others are studying on the same CRN. Have doubts?",
    },
    {
      id: "3",
      text: "Securely pay and learn with the help of Study Send wallet. Pay only for the time when you are in the meet.",
    },

    {
      id: "4",
      text: "Get bookings on your notes and get paid.",
    },
  ];

  return (
    <div className="relative flex gap-20 flex-col xl:flex-row p-5 sm:p-10 lg:p-20 items-center">
      <div className="flex flex-col gap-5" id="academic">
        <Headings head={"Academics & Resources "} />
        <h1 className="text-3xl sm:text-4xl font-bold ">
          Make <span className="textGrad">Academics</span> better and help
          others with our community
        </h1>
        <p className="text-secondary-foreground font-light">
          Explore a wealth of academic materials, lecture notes. Stay ahead by
          exploring what other college students are studying.
        </p>
        {points.map((point, index) => (
          <Point key="id" point={point.text} />
        ))}
      </div>
      <img
        src="/img/academic.png"
        className="max-w-[480px] w-full h-fit"
        alt="Computer with books and a student sitting in front of it."
      />
      <img
        className="absolute bottom-0 right-0 -z-10"
        src="/img/balls.svg"
        alt=""
      />
    </div>
  );
};

export default Academics;
