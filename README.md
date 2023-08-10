# bun-pg-fs-reproduction

Reproduction of a bug in Bun 0.7.3

## Prerequisites

You will need to have a local Postgres database running. The reproduction expects a user and database both named `postgres`. There should not be a password for authentication. If your local database uses different config, modify the argument to `new pg.Pool(...)` in `index.ts`.

## Steps

1. `bun install`
2. `bun run index.ts`
3. Observe that `connecting pool...` is the last thing to be printed, indicating that the code did not run to completion.
4. Comment out lines 8 and 9 (the lines starting with `const config = ...` and `console.log('loaded config', ...)`, respectively).
5. `bun run index.ts`
6. Observe that `succeeded!` is the last thing to be printed.
