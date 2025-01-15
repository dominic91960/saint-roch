import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <section className="flex h-[60px] items-center shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <p>LOGO</p>
        <nav className="space-x-[3em] font-medium">
          <Link href="#">Home</Link>
          <Link href="#">Product</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
