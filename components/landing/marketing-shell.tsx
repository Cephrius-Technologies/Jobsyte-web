"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { REQUEST_DEMO_HREF } from "@/components/landing/marketing-data";
import {
  EASE_OUT,
  HEADER_ENTER_DURATION,
} from "@/components/landing/marketing-motion";

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0d0d0d] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 55% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute -top-40 left-[-10rem] h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, color-mix(in oklch, var(--primary) 35%, transparent) 0%, transparent 70%)",
            willChange: "transform, opacity",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 96, 0],
                  scale: [1, 1.06, 1],
                  opacity: [0.7, 0.95, 0.7],
                }
          }
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-56 right-[-12rem] h-[38rem] w-[38rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, color-mix(in oklch, var(--primary) 22%, transparent) 0%, transparent 72%)",
            willChange: "transform, opacity",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -78, 0],
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.9, 0.6],
                }
          }
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101010]/95 text-white backdrop-blur-xl supports-backdrop-filter:bg-[#101010]/85">
        <motion.div
          className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-8"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: HEADER_ENTER_DURATION, ease: EASE_OUT }}
        >
          <Link href="/" aria-label="JobSyte home">
            <Image
              src="/jobsyte-wordmark-white-on-dark.png"
              alt="JobSyte"
              width={704}
              height={230}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>
          <Button size="sm" className="rounded-full px-4" asChild>
            <Link href="https://app.jobsyte.co">Log in</Link>
          </Button>
        </motion.div>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:pt-16 md:px-8 md:pt-20">
        {children}
      </div>

      <footer className="relative z-10 border-t border-white/10 bg-[#101010] text-white backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                className="flex items-center"
                aria-label="JobSyte home"
              >
                <Image
                  src="/jobsyte-wordmark-white-on-dark.png"
                  alt="JobSyte"
                  width={704}
                  height={230}
                  className="h-9 w-auto sm:h-10"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm text-white/55">
                JobSyte is the shared operations workspace for subcontractors:
                projects, jobs, crews, payroll, invoices, and accounting in one
                connected system.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                Account
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/55">
                <li>
                  <Link href="https://app.jobsyte.co" className="hover:text-white">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    href={REQUEST_DEMO_HREF}
                    className="hover:text-white"
                  >
                    Get started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/55">
                <li>
                  <a
                    href="mailto:sales@jobsyte.com"
                    className="hover:text-white"
                  >
                    sales@jobsyte.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
            <p>© 2026 JobSyte. All rights reserved.</p>
            <p>Powered by Cephrius Technologies</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
