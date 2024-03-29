import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const settings = async () => {
  const session = await auth();

  return (
    <div>
      <div className="mb-20">
        {JSON.stringify(session)}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button className="mt-10 ml-10" type="submit" variant="destructive">
            Sign out
          </Button>
        </form>
      </div>
      <Link href="/createjob">
        <Button className="mt-10 ml-10 bg-blue-500" type="submit" variant="default">
          Create Job
        </Button>
      </Link>
      {/* <Jobform /> */}
    </div>
  );
};

export default settings;
