# Repository Audit Report

## Scope

Complete audit of the project across:
- Engineering quality
- Tooling and CI
- Type safety and maintainability
- UI reliability
- Content quality (PL/EN CV text)

## Findings and Fixes

### High severity

1. Missing enforceable quality gates
   - **Finding:** No CI workflow, no test runner setup, and lint command referenced ESLint without a configured setup.
   - **Fixes:**
     - Added CI workflow: [.github/workflows/ci.yml](.github/workflows/ci.yml)
     - Added ESLint flat config: [eslint.config.js](eslint.config.js)
     - Added Vitest + Testing Library setup:
       - [vitest.config.ts](vitest.config.ts)
       - [src/test/setup.ts](src/test/setup.ts)
       - [src/App.test.tsx](src/App.test.tsx)
     - Updated scripts in [package.json](package.json) for `typecheck`, `lint`, `test`, `test:run`, and resilient local `vite`/`tsc` execution.

2. Extensive `any` usage in app and canvas logic
   - **Finding:** Multiple `any`-typed props and collections in core UI files.
   - **Fixes:**
     - Introduced explicit types in [src/App.tsx](src/App.tsx) for experience/education/language data.
     - Typed social/contact components and props.
     - Replaced `window as any` usage with typed `Window.gtag` declaration in [src/types/global.d.ts](src/types/global.d.ts).
     - Added explicit canvas entity types in:
       - [src/components/FloatingLines.tsx](src/components/FloatingLines.tsx)
       - [src/components/Lightning.tsx](src/components/Lightning.tsx)

### Medium severity

1. Fragile utility-class usage
   - **Finding:** `animate-in`, `fade-in`, `zoom-in`, `slide-in-from-bottom-10`, and `bg-radial-gradient` were used without defined utility support.
   - **Fixes:**
     - Added concrete CSS definitions and keyframes to [src/index.css](src/index.css) for all required classes.

2. Contact reveal analytics path not consistently used
   - **Finding:** Reveal callbacks bypassed the analytics function in several button handlers.
   - **Fixes:**
     - Unified reveal callbacks to `handleRevealContacts` in [src/App.tsx](src/App.tsx).

### Content quality improvements

- Fixed Polish grammar and wording quality in [src/translations.ts](src/translations.ts).
- Corrected institution spelling (`Uniwersytet`).
- Standardized certificate wording to `ISO 27001 Cybersecurity Management` in both languages.

## Verification Evidence

Executed successfully:

```bash
npm run typecheck
npm run lint
npm run test:run
npm run build
```

Results:
- Typecheck: pass
- Lint: pass
- Tests: pass (with coverage)
- Build: pass (`vite build` output generated in `dist/`)

## Residual Risks / Notes

- Coverage is now present but still limited by a small test suite; this is expected for current project size and should be expanded if behavior grows.
- Migration to latest stack was completed in this branch:
  - React/ReactDOM -> 19.x
  - Vite -> 8.x
  - Tailwind CSS -> 4.x (with `@tailwindcss/vite` and `@tailwindcss/postcss`)
- Added Node baseline in `package.json`:
  - `"engines": { "node": ">=22.12.0" }`
- Post-upgrade verification remains green:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run test:run`
  - `npm run build`
