import { PT_Serif as GooglePTSerif } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PTSerif = GooglePTSerif({
  subsets: ["latin-ext"],
  weight: ["700"],
  variable: "--font-ptserif",
});

export default function Navbar() {
  return (
    <header
      className={cn(
        PTSerif.className,
        "border-border flex w-full flex-col items-center justify-between gap-4 border-b-2 px-4 py-2 md:px-8"
      )}
    >
      <div className="flex w-full flex-row justify-between">
        <div className="flex items-center gap-6 md:flex-1">
          <div className="border-border pr-6 md:border-r-2">
            <a
              className={
                "flex gap-2 text-[25px] font-bold [&>svg]:hover:rotate-12"
              }
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 100.000000 100.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M384 766 c-123 -62 -197 -119 -254 -194 -51 -68 -63 -109 -58 -196 3
-60 9 -82 33 -121 38 -61 107 -109 199 -138 102 -32 290 -32 392 0 98 31 162
76 201 143 29 47 33 63 33 125 0 151 -107 278 -325 387 -108 54 -100 55 -221
-6z m227 -42 c110 -57 222 -157 255 -229 31 -66 33 -165 4 -213 -63 -103 -184
-152 -380 -152 -236 0 -380 99 -380 262 0 85 35 153 117 227 72 64 224 151
266 151 16 0 69 -21 118 -46z"
                  />
                </g>
              </svg>
              <h5>GomesSwap</h5>
            </a>
          </div>
          <div
            className={
              "shadow-fixed-bottom fixed bottom-0 left-0 right-0 z-[12] flex flex-row gap-2 border-t-2 bg-white px-4 py-2 md:static md:w-auto md:gap-12 md:border-none md:p-0 md:shadow-none"
            }
          >
            <a
              className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0"
              href="/explorer"
            >
              <span className="text-[16px] font-bold leading-[16px]">Explorer</span>
            </a>
            <a
              className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0"
              href="/convert"
            >
              <span className="text-[16px] leading-[16px]">Convert</span>
            </a>
            <a
              className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0"
              href="/stats"
            >
              <span className="text-[16px] leading-[16px]">Stats</span>
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-1 text-gray-600">
          <Button variant="ghost">
            <span className="hidden md:block">How it works</span>
            <svg
              height="20"
              width="20"
              viewBox="0 0 24 24"
              className="fill-gray-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 8.25C10.9645 8.25 10.125 9.08947 10.125 10.125V10.75H7.625V10.125C7.625 7.70875 9.58375 5.75 12 5.75C14.4162 5.75 16.375 7.70875 16.375 10.125C16.375 12.5412 14.4162 14.5 12 14.5H10.75V12H12C13.0355 12 13.875 11.1605 13.875 10.125C13.875 9.08947 13.0355 8.25 12 8.25ZM13.25 15.75V18.25H10.75V15.75H13.25Z"
                height="20"
                width="20"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
          <div>
            <Button variant="outline" size={"lg"}>
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
