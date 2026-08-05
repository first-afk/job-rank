import React from "react";
import NavbarClient from "./NavbarClient";
import { Box } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <NavbarClient>
      <footer className="min-h-screen">
        <div className=" py-10 px-10 flex ">
          <div className="w-1/2">
            <div className="flex items-center gap-3">
              <div className="bg-primary border-2 border-outline items-center justify-center flex size-6">
                <Box className="text-outline size-4" />
              </div>
              <h1 className="font-bold capitalize text-sm">job-rank</h1>
            </div>
            <div className="text-xs text-tertiary dark:text-foreground mt-2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p className="mt-2">
                &copy; 2026 Job Rank <br />
                <Link href="/privacy">Privacy Policy</Link> •{" "}
                <Link href="/terms">Terms</Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start px-10 dark:text-foreground">
            <h6 className="uppercase text-[#999] tracking-[0.01em] leading-[1.6] text-[11px] font-semibold mb-2">
              Contact
            </h6>
            <ul className="text-[13px] font-normal leading-[1.6] text-[#101010]">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
        </div>

        <div className=" py-10 px-10 flex ">
          <div></div>
          <div></div>
        </div>
        <div className="bg-quart h-5"></div>
      </footer>
    </NavbarClient>
  );
};

export default Footer;
