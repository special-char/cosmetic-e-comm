import React from "react";
import Facebook from "@/public/icons/facebook.svg";
import Google from "@/public/icons/google.svg";

type Props = {};

const SignInWith = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        type="button"
        href="#"
        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 rounded-lg px-5 py-2 text-center flex items-center justify-center"
      >
        <span className="flex gap-2 items-center">
          <Google className="h-4" />
          Sign in with Google
        </span>
      </a>

      <a
        href="#"
        type="button"
        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 rounded-lg px-5 py-2 text-center flex items-center justify-center"
      >
        <span className="flex gap-2 items-center">
          <Facebook className="h-4" />
          Sign in with Facebook
        </span>
      </a>
    </div>
  );
};

export default SignInWith;
