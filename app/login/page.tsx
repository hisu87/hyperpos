"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, Zap } from "lucide-react";
import { AuthPageShell } from "@/app/_components/auth-page-shell";

export default function LoginPage() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <AuthPageShell
      title="Secure Operator Access"
      description="Authenticate to access your terminal and business vault with high-speed, encrypted login flow.">
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-[#0b1115]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="mb-8 rounded-[1.75rem] border border-white/5 bg-[#10161b] p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00d084]/10 text-[#00d084]">
                <Zap className="h-7 w-7" />
              </div>
              <h1 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-white">
                Welcome Back
              </h1>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Authenticate to access your terminal and business vault.
              </p>
            </div>

            <form className="space-y-6">
              <label className="block text-sm font-medium text-white/70">
                Operator Identity
                <div className="mt-3 flex items-center rounded-3xl border border-white/10 bg-[#11161b] px-4 py-3 shadow-sm focus-within:border-[#00D084] focus-within:ring-1 focus-within:ring-[#00D084]/20">
                  <Mail className="mr-3 h-4 w-4 text-white/40" />
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>
              </label>

              <label className="block text-sm font-medium text-white/70">
                Secure Key
                <div className="mt-3 flex items-center rounded-3xl border border-white/10 bg-[#11161b] px-4 py-3 shadow-sm focus-within:border-[#00D084] focus-within:ring-1 focus-within:ring-[#00D084]/20">
                  <Lock className="mr-3 h-4 w-4 text-white/40" />
                  <input
                    type={showSecret ? "text" : "password"}
                    placeholder="••••••••••"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSecret((current) => !current)}
                    className="text-white/40 transition hover:text-white">
                    {showSecret ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between text-sm text-white/50">
                <span>&nbsp;</span>
                <Link
                  href="/contact-sales"
                  className="font-semibold text-[#00D084] transition hover:text-[#7af2b4]">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-[#00D084] px-5 py-4 text-sm font-semibold text-[#04110b] transition hover:bg-[#19e59a]">
                Access Dashboard
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-white/50">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#00D084] transition hover:text-[#7af2b4]">
                Request Access
              </Link>
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0f141a]/90 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.75rem] border border-white/5 bg-[#11161b] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                Secure gateway
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Operator access in one secure step
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                The login flow is optimized for fast cashier handoff and
                encrypted token validation, keeping the terminal ready from the
                moment you land.
              </p>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-white/5 bg-[#11161b] p-6">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#00D084]" />
                Instant login-ready session.
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#00D084]" />
                Session persistence across devices and offline recovery.
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#00D084]" />
                Supports biometric-style secure keys on future terminals.
              </div>
            </div>

            <Link
              href="/loading"
              className="inline-flex items-center justify-center gap-2 rounded-3xl border border-[#00D084]/20 bg-[#00D084]/10 px-5 py-4 text-sm font-semibold text-[#00D084] transition hover:bg-[#00D084]/15">
              View startup sequence
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </AuthPageShell>
  );
}
