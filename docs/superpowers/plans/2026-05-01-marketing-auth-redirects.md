# Marketing Auth Redirects Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redirect marketing-site auth entry points to `https://app.jobsyte.co` without changing existing landing-page content.

**Architecture:** Use Next.js static redirects in `next.config.ts` for `/login`, `/signin`, and `/sign-in` so requests are forwarded before any page renders. Keep crawler behavior aligned by adding the same alias paths to the marketing site's `robots.ts` disallow list.

**Tech Stack:** Next.js 16, TypeScript

---

### Task 1: Add marketing-site auth redirects

**Files:**
- Modify: `next.config.ts`
- Modify: `app/robots.ts`

- [ ] **Step 1: Update Next.js redirect config**

```ts
const APP_URL = "https://app.jobsyte.co";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: APP_URL,
        permanent: true,
      },
      {
        source: "/signin",
        destination: APP_URL,
        permanent: true,
      },
      {
        source: "/sign-in",
        destination: APP_URL,
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};
```

- [ ] **Step 2: Keep crawler rules aligned with the redirect aliases**

```ts
const DISALLOW = [
  "/dashboard",
  "/projects",
  "/projects/",
  "/invoices",
  "/invoices/",
  "/employees",
  "/employees-crews",
  "/payroll",
  "/accounting",
  "/accounting/",
  "/search",
  "/settings",
  "/login",
  "/signin",
  "/sign-in",
  "/signup",
  "/verify",
  "/auth/",
  "/api/",
];
```

- [ ] **Step 3: Verify the changed files**

Run: `cmd /c npm run lint -- next.config.ts app/robots.ts`
Expected: Lint completes without errors for the modified files.
