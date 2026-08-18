import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignInPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-background p-4">
      <SignIn appearance={clerkAppearance} />
    </div>
  );
}
