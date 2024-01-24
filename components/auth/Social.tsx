"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  console.log("render social content");
  const onClick = (variant:any) => {
    console.log(`${variant}  button clicked`);
  };
  return (
    <div className=" social buttton  flex align-middle gap-20 justify-around">
      <Button size="lg" onClick={() => onClick("Google")} variant="outline">
        <FcGoogle style={{ width: "40px", height: "20px" }} />
      </Button>
      <Button size="lg" onClick={() => onClick("Github")} variant="outline">
        <FaGithub style={{ width: "40px", height: "20px" }} />
      </Button>
    </div>
  );
};
