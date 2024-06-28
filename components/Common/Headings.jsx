import React from "react";

const Headings = (props) => {
  return (
    <span className=" bg-white/15 w-fit text-sm sm:text-base py-2 px-6 rounded-full font-semibold uppercase tracking-[3px]">
      {props.head}
    </span>
  );
};

export default Headings;
