"use client";

import { BackButton } from "@/components/auth/Back-btn";
import { Header, JobHeader } from "@/components/auth/Header";
import { Social } from "@/components/auth/Social";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
interface JobCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }: CardWrapperProps) => {
  // console.log("Render Card Wrapper and its content");
  return (
    <Card className="shadow-lg w-[500px] h-auto items-center align-middle ">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
      {/* shared card wrapper */}
    </Card>
  );
};
export const JobCardWrapper = ({ children, headerLabel}: JobCardWrapperProps) => {
  // console.log("Render Card Wrapper and its content");
  return (
    <Card className="shadow-lg w-[500px] h-auto items-center align-middle ">
      <CardHeader>
        <JobHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {/* {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter> */}
      {/* )} */}
      {/* <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter> */}
      {/* shared card wrapper */}
    </Card>
  );
};
