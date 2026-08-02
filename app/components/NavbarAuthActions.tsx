"use client";

import { useTransition } from "react";
import Button from "./ui/Button";
import { logout } from "../auth/actions";
import Link from "next/link";

interface NavbarAuthActionsProps {
  user: { email?: string | null } | null;
}

const NavbarAuthActions = ({ user }: NavbarAuthActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await logout();
    });
  };

  if (user) {
    return (
      <Button onClick={handleSignOut} disabled={isPending}>
        <p className="font-bold capitalize">{user.email ?? "Account"}</p>
      </Button>
    );
  }

  return (
    <Button className="relative">
      <Link href="/auth/signin" className="absolute inset-0 w-full" />
      <p className="font-bold capitalize">Sign in</p>
    </Button>
  );
};

export default NavbarAuthActions;
