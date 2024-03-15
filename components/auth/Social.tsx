"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "facebook") => {
    signIn(provider, { callbackUrl : DEFAULT_LOGIN_REDIRECT});
    // console.log(`${variant}  button clicked`);
  };

  console.log("render social content");

  return (
    <div className=" social buttton  flex align-middle gap-20 justify-around">
      <Button size="lg" onClick={() => onClick("google")} variant="outline">
        <FcGoogle style={{ width: "40px", height: "20px" }} />
      </Button>
      <Button className="text-blue-600 hover:text-blue-500" size="lg" onClick={() => onClick("facebook")} variant="outline">
        <FaFacebook style={{ width: "40px", height: "20px" }} />
      </Button>
    </div>
  );
};
