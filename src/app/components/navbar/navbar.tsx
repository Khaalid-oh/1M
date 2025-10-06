"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="h-[77px] w-full flex items-center px-4 md:px-8 border-b border-gray-200">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/svg/1m-circle.svg"
            alt="1M Circle Logo"
            width={118}
            height={46}
          />
        </Link>
      </div>
    </nav>
  );
}
