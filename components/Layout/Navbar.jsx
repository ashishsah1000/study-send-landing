import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ThemeToggle from "../Home/ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed flex flex-row justify-between items-center top-0 w-screen right-0 bg-black/50 px-5 sm:px-10 lg:px-20 py-4 backdrop-blur-sm z-50 border-b border-gray-800/80">
      <Link href="/">
        <div className="flex justify-center items-center mt-1">
          <img src="/img/logo.svg" alt="" width={"56px"} />
        </div>
      </Link>
      <div className="flex gap-8">
        {/* <ThemeToggle/> */}

        <Button>Coming soon...</Button>

        {/* <Button >Sign in</Button> */}
      </div>
    </div>
  );
};

export default Navbar;
