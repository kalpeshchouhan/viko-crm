/**
 * Restyles Clerk's embedded components with this app's shadcn tokens/classes
 * instead of Clerk's own theme, since Clerk has no first-party shadcn preset.
 */
export const clerkAppearance = {
  elements: {
    rootBox: "w-full",
    cardBox: "w-full max-w-sm shadow-none",
    card: "gap-4 rounded-xl border border-border bg-card p-6 text-card-foreground ring-1 ring-foreground/10",
    header: "gap-1",
    headerTitle: "font-heading text-base font-medium text-foreground",
    headerSubtitle: "text-sm text-muted-foreground",
    socialButtonsBlockButton:
      "h-8 rounded-lg border border-border bg-background text-sm font-medium text-foreground hover:bg-muted",
    dividerLine: "bg-border",
    dividerText: "text-sm text-muted-foreground",
    formFieldLabel: "text-sm font-medium text-foreground",
    formFieldInput:
      "rounded-lg border border-border bg-background text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    formButtonPrimary:
      "h-8 rounded-lg bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/80",
    footerActionText: "text-sm text-muted-foreground",
    footerActionLink: "text-sm text-primary underline-offset-4 hover:underline",
    identityPreviewText: "text-sm text-foreground",
    identityPreviewEditButtonIcon: "text-muted-foreground",
    formResendCodeLink: "text-primary hover:underline",
    otpCodeFieldInput: "border-border text-foreground",
  },
};
