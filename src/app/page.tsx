import Image from "next/image";
import PlayIcon from "./components/icons/play-icon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="-translate-x-10"
          src="/svg/1m-circle.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Earn commissions with transparent payment structure
          </li>
          <li className="tracking-[-.01em]">
            Access to opportunities worldwide with with our global reach
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-md border border-gray-300 flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-50 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <PlayIcon />
            How it works
          </button>
          <Link
            href="/signup"
            className="rounded-md bg-primary text-white flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            Get started
          </Link>
        </div>
      </main>
    </div>
  );
}
