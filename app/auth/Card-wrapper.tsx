// "use client";¿

import { Header } from "@/components/auth/Header";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }) => {
  return (
    <Card className="shadow-lg w-[500px] h-[500px] items-center align-middle">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      shared card wrapper <br /> {children}
    </Card>
  );
};
