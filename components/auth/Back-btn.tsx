"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  console.log("Render BackButton");
  const onClick = (variant) => {
    console.log(`${variant} button clicked`);
  };

  return (
    <Button className="mt-5" size="sm" onClick={() => onClick("No Acc btn")} variant="link">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
