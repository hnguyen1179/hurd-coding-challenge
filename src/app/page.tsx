export default function Login() {
  return (
    <main className="grid h-full place-items-center bg-gradient-linear p-24">
      <div className="flex h-[30rem] w-[30rem] flex-col gap-4 rounded-lg bg-black bg-opacity-90 px-8 py-16">
        <div className="text-hurd-purple-light text-5xl font-bold">hurd</div>
        <form className="flex flex-col gap-4" action="">
          <div className="flex flex-col gap-3">
            <input
              className="w-full rounded-lg bg-black px-4 py-3 text-sm text-white"
              id="email-input"
              name="email"
              type="text"
              placeholder="Email Address"
              autoComplete="off"
            />
            <input
              className="w-full rounded-lg bg-black px-4 py-3 text-sm text-white"
              id="password-input"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <a className="text-gray-500 w-fit" href="">
              Forgot Password?
            </a>
            <a className="text-blue-600 w-fit" href="">
              Don't have an account? Sign up!
            </a>
          </div>
          <button></button>
        </form>
      </div>
    </main>
  );
}
