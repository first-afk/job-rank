"use client";

import Link from "next/link";
import { LoginForm } from "../components/Form";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 p-4">
      <div className="bg-background border-2 border-outline rounded-lg p-4">
        <hgroup>
          <h1 className="mb-0.5 text-4xl font-medium  font-serif capitalize tracking-[-0.01em]">
            Sign In
          </h1>
          <h2 className="font-medium">
            Login to your account and continue your journey!
          </h2>
        </hgroup>
        <LoginForm />
        <div>
          <p>
            Don&apos;t have an account yet?{" "}
            <span>
              <Link href="/auth/signin">Sign Up here</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
