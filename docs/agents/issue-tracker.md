# Issue tracker: Linear

Issues and specs for this repo live as issues in the Linear team **FIRST-PROJECT-0101** (id `987c4247-4bec-4d94-b63f-8429f2578446`). Use the connected Linear MCP tools for all operations — there is no CLI equivalent.

## Conventions

- **Create an issue**: `save_issue` with `team: "FIRST-PROJECT-0101"`, a `title`, and a `description` (Markdown body).
- **Read an issue**: `get_issue` by id, plus `list_comments` for its discussion.
- **List issues**: `list_issues` scoped to `team: "FIRST-PROJECT-0101"`, filtered by label/status as needed.
- **Comment on an issue**: `save_comment`.
- **Apply / remove labels**: `save_issue` with an updated `labels` list. Create a new label first with `create_issue_label` if it doesn't exist yet (check `list_issue_labels` first — don't create a duplicate).
- **Change status / close**: `save_issue` with `status` set to one of this team's statuses (`Todo`, `Backlog`, `In Progress`, `Done`, `Canceled`, `Duplicate` — fetched via `list_issue_statuses`). Use `Canceled` for "won't do", `Done` for resolved.

## Pull requests as a triage surface

**PRs as a request surface: no.** _(Set to `yes` if this repo treats external PRs as feature requests; `/triage` reads this flag.)_ This repo has no configured git remote at present, so there is no PR surface to triage regardless.

## When a skill says "publish to the issue tracker"

Create a Linear issue via `save_issue` in team FIRST-PROJECT-0101.

## When a skill says "fetch the relevant ticket"

Call `get_issue` for the ticket id, then `list_comments` for its discussion.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a single issue with **child** issues as tickets.

- **Map**: a single issue labelled `wayfinder:map` (create the label via `create_issue_label` if absent), holding the Notes / Decisions-so-far / Fog body.
- **Child ticket**: an issue referencing the map issue's id in its description (`Part of <map-id>` at the top of the body) — Linear sub-issues can also be used via `save_issue`'s parent-issue relation if available; prefer that when supported. Labels: `wayfinder:<type>` (`research`/`prototype`/`grilling`/`task`). Once claimed, assign the ticket to the driving dev via `save_issue`.
- **Blocking**: Linear's native issue relations (blocks/blocked-by) where the `save_issue`/relation tooling supports it; otherwise fall back to a `Blocked by: <id>, <id>` line at the top of the child body. A ticket is unblocked when every blocker is `Done` or `Canceled`.
- **Frontier query**: `list_issues` for the map's open children (status not `Done`/`Canceled`), drop any with an open blocker or an assignee; first in map order wins.
- **Claim**: `save_issue` setting `assignee` to self — the session's first write.
- **Resolve**: `save_comment` with the answer, then `save_issue` setting status to `Done`, then append a context pointer to the map's Decisions-so-far.
