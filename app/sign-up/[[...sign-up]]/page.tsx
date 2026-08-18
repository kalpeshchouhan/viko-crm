import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignUpPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-background p-4">
      <SignUp appearance={clerkAppearance} />
    </div>
  );
}
