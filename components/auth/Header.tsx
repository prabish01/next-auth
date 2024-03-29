import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  console.log("render header");
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className={cn("text-3xl font-bold", font.className)}> Authentication Portal</h1>
      <p className="text-slate-400">{label}</p>
    </div>
  );
};
export const JobHeader = ({ label }: HeaderProps) => {
  console.log("render header");
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className={cn("text-3xl font-bold", font.className)}> Job Portal</h1>
      <p className="text-slate-400">{label}</p>
    </div>
  );
};
