# Podsite Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### I. Static-First
The app must be deployable as static assets (HTML/CSS/JS + images/fonts) without requiring a server runtime.

### II. Minimal Dependencies
Prefer platform features (browser APIs) over frameworks. Add third-party dependencies only when they clearly reduce code or risk.

### III. Accessibility Baseline
All interactive UI must be keyboard operable, have visible focus, and have appropriate labels/roles.

### IV. Performance Baseline
Pages should load quickly on typical mobile connections: optimize images, avoid unnecessary JS, and do not block first render without a clear reason.

### V. Security Baseline
No secrets in the repo or shipped to the client. Treat all user-provided input as untrusted and avoid unsafe DOM injection.

## Additional Constraints
- **Supported browsers**: Current Chrome, Safari, and Firefox.
- **Rendering**: No reliance on browser extensions, third-party cookies, or popups.
- **Routing**: If client-side routing is used, it must support direct deep links on the static host (e.g., via fallback to `index.html`).
- **Configuration**: Runtime config must be safe for client exposure (public keys only) and injected via build-time environment variables or a public config file.

## Development Workflow
- **Quality gate**: `npm test` (or equivalent) and a production build must pass before merge.
- **Scope control**: Each change should be small, reviewed, and revertible.
- **Docs**: Any new user-visible behavior must be reflected in the README (or equivalent).

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

- This constitution supersedes ad-hoc practices.
- Any exception must be documented in the PR description with rationale and an exit plan.
- Amendments require updating this file and stating the migration impact.

**Version**: 1.0.0 | **Ratified**: 2026-02-19 | **Last Amended**: 2026-02-19
