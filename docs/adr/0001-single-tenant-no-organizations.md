# Single-tenant: no Organization/Workspace model

This CRM is used internally by one small team, all sharing the same dataset — there is no need to isolate data between separate companies. We deliberately chose **not** to model tenants at all, even though the auth provider (Clerk) has first-class support for Organizations that would make multi-tenancy close to free to add today. All Users see the same shared Contacts, Deals, and other CRM data with no tenant boundary anywhere in the schema or authorization logic.

## Consequences

Retrofitting tenant isolation later — if this CRM is ever sold to or used by more than one company — means adding a tenant/organization foreign key across every domain entity and every query, not just switching on a Clerk feature. This was accepted knowingly: there is no current requirement for multiple tenants, and building for that requirement speculatively would have added schema and query complexity with no present payoff. See [[User]] and [[Team]] in `CONTEXT.md`.
