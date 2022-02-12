import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex pt-6 justify-center w-full">
      <Link href="/">
        <a className="mx-4 text-lg">Home</a>
      </Link>
    </nav>
  );
};

export default Navbar;
