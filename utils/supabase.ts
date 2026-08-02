"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createSupabaseClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookie) {
          try {
            cookie.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch (err) {
            console.error("Failed to set auth cookies:", err);
          }
        },
      },
    },
  );
};
