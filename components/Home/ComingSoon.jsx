import React from "react";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col justify-center items-center py-20 w-full">
      {/* <div className='w-full relative flex items-center justify-center'>
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-lg w-40 lg:w-64' src="/img/logowobg.png" alt="" />
                <img className='relative opacity-50' src="/img/centerLogo.svg" alt="" />
            </div> */}
      <h1 className="text-center lg:text-[128px] md:text-[80px] text-[56px] comingSoonText font-black mt-20 opacity-80">
        Coming Soon
      </h1>
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50 w-full"
        src="/img/blurBall.svg"
        alt=""
      />
    </div>
  );
};

export default ComingSoon;
