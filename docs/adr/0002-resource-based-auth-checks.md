# Resource-based auth checks, not proxy-level route matching

FIR-6 originally specced the auth gate as centralized route matching in `proxy.ts` (protect everything except `/sign-in`/`/sign-up`). While implementing it, we found `createRouteMatcher` is deprecated in the installed `@clerk/nextjs` version — Clerk's own migration guide explains that path-matching in middleware can diverge from how Next.js actually routes a request, leaving some protected resources reachable. Clerk (and Next's own auth guide) now recommend resource-based checks instead: `proxy.ts` only runs `clerkMiddleware()` to establish the auth context, and each protected page/route/action calls `auth.protect()` itself.

We adopted the new pattern rather than the deprecated one, even though it means every future protected page must remember to call `auth.protect()` individually — there's no longer a single choke point that gates new routes automatically.

## Consequences

Adding a new page later that should require auth means explicitly adding `await auth.protect()` to it; nothing will enforce this automatically, and a forgotten call fails open (the page renders for anyone). This is the trade-off Clerk's own deprecation accepts in exchange for not having centralized path-matching drift out of sync with real routing. Worth revisiting if the CRM grows enough routes that a missed `auth.protect()` call becomes a real risk — at that point, a shared layout-level or DAL-level check (see `CONTEXT.md`/Next's Data Access Layer pattern) may be worth adding as a second line of defense.
