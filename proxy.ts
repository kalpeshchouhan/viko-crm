import { clerkMiddleware } from "@clerk/nextjs/server";

// No route matching or auth.protect() here: createRouteMatcher-based path
// gating is deprecated in @clerk/nextjs (path matching can diverge from how
// Next.js actually routes requests). This proxy only establishes the auth
// context that auth()/auth.protect() need; each protected page performs its
// own resource-based check. See docs/adr/0002-resource-based-auth-checks.md.
export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
