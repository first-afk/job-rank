"use client";

import Link from "next/link";
import { SignUpForm } from "../components/Form";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 p-4">
      <div className="bg-background border-2 border-outline rounded-lg p-4">
        <hgroup>
          <h1 className="mb-0.5 text-4xl font-medium  font-serif capitalize tracking-[-0.01em]">
            Create your account
          </h1>
          <h2 className="font-medium">
            Join us today and create your account to begin your journey!
          </h2>
        </hgroup>
        <SignUpForm />
        <div>
          <p>
            Don&apos;t have an account yet?{" "}
            <span>
              <Link href="/auth/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
