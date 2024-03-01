"use client";

import PasswordInput from "@/components/PasswordInput.tsx";
import { FormEvent } from "react";

export default function Login() {
  const handleSubmission = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    alert(
      `Submitted form with email as ${formData.get("email")} and password as ${formData.get("password")}`,
    );
  };

  return (
    <main className="flex h-full items-center justify-center bg-gradient-linear sm:p-24">
      <div className="flex w-full grow flex-col gap-4 rounded-lg bg-black bg-opacity-85 p-8 h-[30rem] sm:max-w-[30rem] md:p-12">
        <div className="text-hurd-purple-light my-4 text-5xl font-semibold">
          hurd
        </div>
        <form
          className="flex flex-col gap-4"
          action=""
          onSubmit={handleSubmission}
        >
          <div className="flex flex-col gap-3">
            <input
              className="w-full rounded-lg bg-black px-4 py-3 text-sm text-white"
              id="email-input"
              name="email"
              type="text"
              placeholder="Email Address"
              autoComplete="off"
            />
            <PasswordInput />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <a className="w-fit text-gray-500 hover:underline" href="">
              Forgot Password?
            </a>
            <a className="w-fit text-blue-600 hover:underline" href="">
              Don't have an account? Sign up!
            </a>
          </div>
          <button
            type="submit"
            className="bg-hurd-purple-light my-4 rounded-lg text-xs font-semibold uppercase text-white"
          >
            <div className="p-3">login</div>
          </button>
        </form>
      </div>
    </main>
  );
}
