"use client";

import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { FormEvent } from "react";

export default function Login() {
  const handleSubmission = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email");
    const pw = formData.get("password");

    if (!email || !pw) {
      alert("Form incomplete!");
      event.preventDefault(); // Prevents form from submission--resetting the form
    } else {
      alert(`Submitted form with email as ${email} and password as ${pw}`);
    }
  };

  return (
    <main className="flex h-full items-center justify-center bg-gradient-linear sm:p-24">
      <div className="-mt-16 flex h-[30rem] w-full grow flex-col gap-4 bg-black bg-opacity-85 p-8 sm:max-w-[30rem] sm:rounded-lg md:p-12">
        <div className="my-4 text-5xl font-semibold text-hurd-purple-light">
          hurd
        </div>
        <form
          className="flex flex-col gap-4"
          action=""
          onSubmit={handleSubmission}
        >
          <div className="flex flex-col gap-3">
            <EmailInput />
            <PasswordInput />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <a className="w-fit text-gray-500 hover:underline" href="">
              Forgot Password?
            </a>
            <a className="w-fit text-blue-600 hover:underline" href="">
              Don&apos;t have an account? Sign up!
            </a>
          </div>
          <button
            type="submit"
            className="my-4 rounded-lg bg-hurd-purple-light font-semibold uppercase text-white transition hover:opacity-90 active:scale-[97%]"
          >
            <div className="p-4 text-sm">login</div>
          </button>
        </form>
      </div>
    </main>
  );
}
