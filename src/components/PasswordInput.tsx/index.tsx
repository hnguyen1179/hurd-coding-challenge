"use client";

import IconEye from "@/assets/IconEye";
import IconEyeInvisible from "@/assets/IconEyeInvisible";
import { useState } from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative cursor-pointer">
			<input
				// pr-16 prevents password from overlapping toggle reveal password button
        className="w-full rounded-lg bg-black pl-4 pr-16 py-3 text-sm text-white"
        id="password-input"
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
      />
			<button
				type="button"
        className="absolute top-1/4 right-6 h-6 w-6 text-white"
        onClick={togglePassword}
      >
        {showPassword ? <IconEyeInvisible /> : <IconEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
