"use client";
import Sidebar from "../components/sidebar/page";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="w-full items-center justify-end flex h-20 gap-6 text-sm pr-12">
          <button
            onClick={() => router.push("/join-as-a-partner")}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer"
          >
            Join as a partner
          </button>
          <button>Support</button>
        </div>
        {children}
      </div>
    </div>
  );
}
