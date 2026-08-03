"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarClientProps {
  children: React.ReactNode;
}

const NavbarClient = ({ children }: NavbarClientProps) => {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) {
    return null;
  }
  return children;
};

export default NavbarClient;
