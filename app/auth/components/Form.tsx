import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { login, signup } from "../actions";
import Button from "@/app/components/ui/Button";
import { Loader2Icon } from "lucide-react";

const passwordSchema = z
  .string()
  .min(6, { message: "password must be more than 6 characters" })
  .max(20, { message: "password must be less than 20 characters" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "password must contain an uppercase letter",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "password must contain a lowercase letter",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "password must contain a number",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "password must contain a special character",
  });

const signUpFormSchema = z
  .object({
    email: z.email({ error: "email is incorrect" }),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

const LoginFormSchema = z.object({
  email: z.email({ error: "email is incorrect" }),
  password: passwordSchema,
});

type SignUpFormValues = z.infer<typeof signUpFormSchema>;
type LoginFormValues = z.infer<typeof LoginFormSchema>;

export const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSignUpSubmit = async (values: SignUpFormValues) => {
    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      await signup(formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSignUpSubmit)}>
      <div className="py-1 mt-6">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col space-y-2 ">
              <label
                className="text-secondary dark:text-white font-medium "
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...field}
                className="p-3 rounded-2xl border-2 border-outline/70 dark:bg-surface text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
              {errors.email && (
                <p className="text-red-400 first-letter:capitalize">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div className="py-1">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col space-y-2">
              <label
                className="text-secondary dark:text-white font-medium "
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-3 rounded-2xl border-2 border-outline/70 dark:bg-surface text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                {...field}
              />
              {errors.password && (
                <p className="text-red-400 first-letter:capitalize">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div className="py-1">
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col space-y-2">
              <label
                className="text-secondary dark:text-white font-medium "
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...field}
                className="p-3 rounded-2xl border-2 border-outline/70 dark:bg-surface text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 first-letter:capitalize">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div className="w-full py-4 mt-2">
        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="inline-flex items-center justify-center gap-3">
              <Loader2Icon className="animate-spin text-outline size-4" />
              <p>Signing up</p>
            </div>
          ) : (
            "Sign Up"
          )}
        </Button>
      </div>
    </form>
  );
};

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = async (values: LoginFormValues) => {
    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      await login(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="py-1 mt-6">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col space-y-2 ">
              <label
                className="text-secondary dark:text-white font-medium "
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...field}
                className="p-3 rounded-2xl border-2 border-outline/70 dark:bg-surface text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
              {errors.email && (
                <p className="text-red-400 first-letter:capitalize">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div className="py-1">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col space-y-2">
              <label
                className="text-secondary dark:text-white font-medium "
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-3 rounded-2xl border-2 border-outline/70 dark:bg-surface text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                {...field}
              />
              {errors.password && (
                <p className="text-red-400 first-letter:capitalize">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div className="w-full py-4 mt-2">
        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="inline-flex items-center justify-center gap-3">
              <Loader2Icon className="animate-spin text-outline size-4" />
              <p>Logging in</p>
            </div>
          ) : (
            "Sign in"
          )}
        </Button>
      </div>
    </form>
  );
};
