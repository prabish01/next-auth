import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  successMsg: string|undefined;
}

export const FormSuccess = ({ successMsg }: FormSuccessProps) => {
  if (!successMsg) return null;
  return (
    <div className="successMsgDialouge bg-emerald-500/15 p-3 rounded-md flex items-center gap-2 text-sm text-emerald-500 mt-6">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{successMsg}</p>
    </div>
  );
};
