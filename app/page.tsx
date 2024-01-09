import { Button } from "@/components/ui/button";
import { LoginBtn } from "@/components/auth/LoginBtn";
export default function Home() {
  console.log("I am in home page");
  return (
    <>
      <main className="flex flex-col gap-20 h-full bg-slate-200 items-center justify-center">
        <div className=" flex flex-col gap-2 items-center align-middle">
          <h1 className="text-4xl font-extrabold">Next Js Authentication Portal</h1>
          <p className=" text-center text-gray-600">Please proceed to sign up page by clicking the button below</p>

          <LoginBtn>
            <Button size="lg" variant="default" className="mt-5">
              Click Here
            </Button>
          </LoginBtn>
        </div>
      </main>
    </>
  );
}
