# CRM

A single-tenant CRM used internally by one small team. There is no concept of separate customer organizations using the product — everyone who can sign in shares the same data.

## Language

**User**:
A team member authenticated via Clerk who can sign in and see the entire shared CRM dataset. All Users have identical permissions — there is no role or access-level distinction between them.
_Avoid_: Account, Member, Tenant

**Team**:
The single group of Users sharing this CRM instance. Not a data structure in the app (no Organization/Workspace entity exists or is planned) — just the informal name for "everyone with an account here."
_Avoid_: Organization, Workspace, Tenant, Company

## Decisions not yet made

`User`'s relationship to CRM entities (e.g. whether a Deal or Contact will have an "assigned to" or "created by" field referencing a User) is intentionally undecided — no such entities exist yet. Revisit when the first entity that needs ownership is designed.
