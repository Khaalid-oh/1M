"use client";

import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div>
      Dashboard
      <button onClick={() => router.push("/join-as-a-partner")}>
        Join as a partner
      </button>
    </div>
  );
}

export default page;
