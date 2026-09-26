"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  MapPinned,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { REQUEST_DEMO_HREF } from "@/components/landing/marketing-data";

const capabilities = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Projects, jobs, and schedules in one view",
    body: "Organize work by builder, subdivision, and address—then schedule jobs, assign superintendents, and see what is next.",
    points: ["CSV project import", "12-month job calendar", "Completion tracking"],
  },
  {
    icon: UsersRound,
    number: "02",
    title: "Crews, rosters, and payroll stay connected",
    body: "Manage crew composition and field assignments alongside the payroll work that follows a completed day.",
    points: ["Crew and roster management", "Assignment visibility", "Ready-to-pay payroll queue"],
  },
  {
    icon: FileCheck2,
    number: "03",
    title: "Turn completed work into a clear financial record",
    body: "Invoice by project or builder, follow issued and paid status, and keep profitability and revenue snapshots close at hand.",
    points: ["Builder-level invoicing", "Payment reconciliation", "Project profitability"],
  },
];

const flow = [
  ["01", "Schedule", "Set the work and assign the right crew."],
  ["02", "Execute", "Make the day visible to the people doing it."],
  ["03", "Close", "Turn completed work into a clean record."],
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ConstructionHome() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? { initial: false as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-80px" } };

  return (
    <div className="pb-2">
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-[#111] px-6 py-14 text-white shadow-[0_30px_80px_rgba(16,16,16,.18)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-16 top-16 hidden size-[28rem] rounded-full border border-white/10 lg:block"
          animate={reduceMotion ? undefined : { y: [0, 18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div aria-hidden className="absolute right-[17%] top-28 hidden size-5 bg-primary shadow-[0_0_42px_16px_rgba(249,115,22,.2)] lg:block" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <motion.p
              variants={reveal}
              {...motionProps}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-primary"
            >
              <span className="h-px w-9 bg-primary" />
              Construction operations software
            </motion.p>
            <motion.h1
              variants={reveal}
              {...motionProps}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.06 }}
              className="mt-6 max-w-3xl text-balance font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[.94] tracking-[-.065em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              The work moves
              <br />
              <span className="text-primary">when everyone can see it.</span>
            </motion.h1>
            <motion.p
              variants={reveal}
              {...motionProps}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12 }}
              className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg"
            >
              JobSyte gives subcontractors one shared system for projects,
              schedules, crews, payroll, invoices, and accounting—without
              rebuilding the same information in separate tools.
            </motion.p>
            <motion.div
              variants={reveal}
              {...motionProps}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.18 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" className="rounded-full px-7 font-semibold shadow-[0_14px_34px_rgba(249,115,22,.23)]" asChild>
              <Link href={REQUEST_DEMO_HREF}>
                  Request a demo <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link
                href="#operation"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById("operation")?.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start",
                  });
                  window.history.replaceState(null, "", "#operation");
                }}
                className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                Explore the operation <ChevronDown className="size-4" />
              </Link>
            </motion.div>
            <motion.div
              variants={reveal}
              {...motionProps}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.24 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60"
            >
              {["Built for contractors", "Designed for the field", "Ready to grow"].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check className="size-4 text-primary" />{item}</span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={reveal}
            {...motionProps}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.14 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-square rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[.02] p-5 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-5 rounded-[1.8rem] border border-white/10" />
              <Image src="/jobsyte-icon.png" alt="JobSyte" width={240} height={240} className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-[1.7rem] shadow-2xl sm:size-52" priority />
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-white/10 bg-[#1c1c1c] px-4 py-3 shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-primary">Live operation</p>
                <p className="mt-1 text-sm font-medium">Every job, in motion.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="operation"
        variants={reveal}
        {...motionProps}
        transition={{ duration: 0.55 }}
        className="mt-6 grid scroll-mt-24 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#181818] sm:grid-cols-3"
      >
        {[
          ["One connected system", "Projects feed jobs, jobs feed invoices, and invoices inform accounting."],
          ["Built for subcontractors", "Organize real work by builder, subdivision, street, and crew."],
          ["Clear beyond the jobsite", "Search across projects, jobs, people, and invoices from one place."],
        ].map(([title, body], index) => (
          <div key={title} className={`p-6 sm:p-7 ${index ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
            <span className="text-xs font-bold tracking-[.16em] text-primary">0{index + 1}</span>
            <h2 className="mt-4 text-lg font-semibold tracking-tight text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">{body}</p>
          </div>
        ))}
      </motion.section>

      <section className="mt-28" id="features">
        <motion.div variants={reveal} {...motionProps} transition={{ duration: 0.5 }} className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-primary">Built for the pace of real work</p>
          <h2 className="mt-4 text-balance font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl md:text-6xl">
            Less status chasing. More control over what happens next.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.article
                key={capability.title}
                variants={reveal}
                {...motionProps}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#181818] p-7 shadow-sm transition-shadow hover:border-primary/40 hover:shadow-xl hover:shadow-black/20"
              >
                <span className="absolute right-7 top-7 text-xs font-bold tracking-[.2em] text-white/15">{capability.number}</span>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Icon className="size-5" /></div>
                <h3 className="mt-7 max-w-xs text-2xl font-semibold tracking-[-.035em] text-white">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{capability.body}</p>
                <ul className="mt-7 space-y-2 border-t border-white/10 pt-5">
                  {capability.points.map((point) => <li key={point} className="flex items-center gap-2 text-sm font-medium text-white/75"><Check className="size-4 text-primary" />{point}</li>)}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mt-28 grid items-center gap-10 rounded-[2rem] border border-white/10 bg-[#181818] p-6 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-14" id="how-it-works">
        <motion.div variants={reveal} {...motionProps} transition={{ duration: 0.55 }}>
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-primary">A clear path from plan to paid</p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-[.98] tracking-[-.05em] text-white sm:text-5xl">A system that follows the job all the way through.</h2>
          <p className="mt-5 max-w-md leading-7 text-white/55">JobSyte carries a single version of the truth through every handoff, so your team can operate with less noise and more confidence.</p>
          <Link href={REQUEST_DEMO_HREF} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary">See the workflow <ArrowRight className="size-4" /></Link>
        </motion.div>
        <motion.div variants={reveal} {...motionProps} transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.1 }} className="rounded-[1.6rem] bg-[#181818] p-5 text-white shadow-2xl sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3"><Image src="/jobsyte-icon.png" alt="" width={240} height={240} className="size-9 rounded-xl" /><div><p className="text-sm font-semibold">Today&apos;s operation</p><p className="text-xs text-white/45">Thursday · 14 active jobs</p></div></div>
            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black">On track</span>
          </div>
          <div className="mt-5 space-y-3">
            {flow.map(([number, title, detail], index) => (
              <motion.div key={number} initial={reduceMotion ? false : { opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.1 }} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-4">
                <span className="text-xs font-bold text-primary">{number}</span><div><p className="font-medium">{title}</p><p className="mt-1 text-sm text-white/50">{detail}</p></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mt-28 grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <motion.div variants={reveal} {...motionProps} transition={{ duration: 0.55 }} className="rounded-[2rem] bg-[#171717] p-8 text-white sm:p-12">
          <MapPinned className="size-7 text-primary" />
          <p className="mt-12 text-[11px] font-bold uppercase tracking-[.2em] text-primary">Made for the jobsite</p>
          <h2 className="mt-4 max-w-lg font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-5xl">Give every crew a clearer day.</h2>
          <p className="mt-5 max-w-lg leading-7 text-white/60">From the first stop to the final invoice, the people doing the work have the context they need—without a separate field app or a pile of messages.</p>
        </motion.div>
        <motion.div variants={reveal} {...motionProps} transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[[HardHat, "Crew-ready", "Simple, mobile-first updates that make the field part of the same plan."], [ClipboardCheck, "Office-aware", "Know where work stands before a customer or builder needs an answer."], [ShieldCheck, "Built with control", "Keep every company record protected and clearly owned."]].map(([Icon, title, body]) => {
            const FeatureIcon = Icon as typeof HardHat;
            return <div key={title as string} className="flex gap-4 rounded-[1.4rem] border border-white/10 bg-[#181818] p-6"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary"><FeatureIcon className="size-5" /></div><div><h3 className="font-semibold text-white">{title as string}</h3><p className="mt-1 text-sm leading-6 text-white/55">{body as string}</p></div></div>;
          })}
        </motion.div>
      </section>

      <motion.section variants={reveal} {...motionProps} transition={{ duration: 0.6 }} className="relative mt-28 overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-black sm:px-10 sm:py-20">
        <div aria-hidden className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
        <div className="relative mx-auto max-w-3xl"><p className="text-[11px] font-bold uppercase tracking-[.22em]">Build with more certainty</p><h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-[.96] tracking-[-.055em] sm:text-5xl md:text-6xl">Bring the entire operation onto the same page.</h2><p className="mx-auto mt-5 max-w-xl text-black/70 sm:text-lg">See how JobSyte can fit the way your crews, projects, and office already work.</p><Button size="lg" className="mt-9 rounded-full bg-black px-7 text-white hover:bg-black/80" asChild><Link href={REQUEST_DEMO_HREF}>Request a demo <ArrowRight className="size-4" /></Link></Button></div>
      </motion.section>
    </div>
  );
}
