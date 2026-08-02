"use server";
import { createSupabaseClient } from "@/utils/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
  const supabase = await createSupabaseClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const {
    data: { session, user },
    error,
  } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !session || !user) {
    return redirect(
      "/login?error=" + encodeURIComponent(error?.message ?? "Sign in failed"),
    );
  }

  revalidatePath("/");
  redirect("/product");
};

export const signup = async (formData: FormData) => {
  const supabase = await createSupabaseClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const {
    data: { session, user },
    error,
  } = await supabase.auth.signUp({ email, password });

  if (error || !session || !user) {
    return redirect(
      "/signup?error=" + encodeURIComponent(error?.message ?? "Sign up failed"),
    );
  }

  revalidatePath("/");
  redirect("/");
};

export const logout = async () => {
  const supabase = await createSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    await supabase.auth.signOut();
  }
  revalidatePath("/", "layout");
  redirect("/");
};
