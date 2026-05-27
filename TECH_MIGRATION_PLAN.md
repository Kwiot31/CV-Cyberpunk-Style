# Technology Migration Plan (Executed in this branch)

## Goal
Move the project from legacy-but-stable versions to current ecosystem versions with minimal risk and full verification on each checkpoint.

## Checkpoints

1. **Runtime baseline**
   - Add Node engine requirements to avoid environment drift.
   - Keep CI aligned with this baseline.

2. **React upgrade**
   - Upgrade `react`, `react-dom`, and related type packages.
   - Run typecheck/lint/tests and resolve API/type regressions.

3. **Vite upgrade**
   - Upgrade Vite and React plugin.
   - Verify build/test tooling remains compatible.

4. **Tailwind v4 migration**
   - Upgrade Tailwind package set and switch config to current v4 style (`@tailwindcss/vite`, `@tailwindcss/postcss`).
   - Confirm rendering and build behavior.

5. **Final verification**
   - Run full pipeline: `typecheck`, `lint`, `test:run`, `build`.
   - Document migration results in audit report and PR.
