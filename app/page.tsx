import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default async function Home() {
  await auth.protect();
  const user = await currentUser();

  return (
    <div className="flex flex-1 flex-col bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <h1 className="font-heading text-lg font-medium text-foreground">
          CRM
        </h1>
        <UserButton />
      </header>
      <main className="flex flex-1 items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              Welcome{user?.firstName ? `, ${user.firstName}` : ""}
            </CardTitle>
            <CardDescription>
              {user?.primaryEmailAddress?.emailAddress}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is the CRM dashboard. Nothing to manage here yet.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
