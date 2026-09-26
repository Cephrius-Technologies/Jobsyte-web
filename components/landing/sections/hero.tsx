"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REQUEST_DEMO_HREF } from "@/components/landing/marketing-data";
import {
  CTA_HOVER,
  HERO_ITEM,
  HERO_STAGGER_CONTAINER,
  HOVER_SPRING,
} from "@/components/landing/marketing-motion";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="relative mx-auto overflow-hidden rounded-[2rem] bg-[#101010] px-6 py-14 text-left text-white shadow-2xl shadow-black/20 sm:px-10 sm:py-20 lg:max-w-7xl lg:px-16 lg:py-24"
      variants={HERO_STAGGER_CONTAINER}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate="visible"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.075) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.075) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 82%)",
        }}
      />
      <div aria-hidden className="absolute -right-20 top-8 hidden size-[30rem] rounded-full border border-white/10 lg:block" />
      <div aria-hidden className="absolute right-16 top-28 hidden size-5 bg-primary shadow-[0_0_36px_12px_rgba(249,115,22,.3)] lg:block" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.div
            variants={HERO_ITEM}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.23em] text-primary"
          >
            <span className="h-px w-8 bg-primary" />
            Built for what gets built
          </motion.div>
          <motion.h1
            variants={HERO_ITEM}
            className="mt-6 max-w-3xl text-balance font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[.94] tracking-[-.065em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Run the work.<br />
            <span className="text-primary">Own the day.</span>
          </motion.h1>
          <motion.p
            variants={HERO_ITEM}
            className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg"
          >
            The operating system for contractors who need every project, crew,
            schedule, and invoice moving in the same direction.
          </motion.p>
          <motion.div
            variants={HERO_ITEM}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : CTA_HOVER}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={HOVER_SPRING}
            >
              <Button
                size="lg"
                className="rounded-full px-7 font-semibold shadow-[0_12px_32px_rgba(249,115,22,.25)]"
                asChild
              >
                <Link href={REQUEST_DEMO_HREF}>
                  Request a demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
            <Link
              href="#features"
              className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Explore JobSyte <ChevronDown className="size-4" />
            </Link>
          </motion.div>
          <motion.div
            variants={HERO_ITEM}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60"
          >
            {[
              "Built for the field",
              "Made for growth",
              "One source of truth",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={HERO_ITEM}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="relative aspect-square rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 shadow-2xl">
            <div className="absolute inset-5 rounded-[2rem] border border-white/10" />
            <Image
              src="/jobsyte-icon.png"
              alt="JobSyte app icon"
              width={240}
              height={240}
              className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] shadow-2xl"
              priority
            />
            <span className="absolute -left-4 bottom-11 bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-black">
              Job control
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
