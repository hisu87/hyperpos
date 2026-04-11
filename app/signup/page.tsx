"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Shield, Zap } from "lucide-react";
import { AuthPageShell } from "@/app/_components/auth-page-shell";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthPageShell
      title="Join the Evolution"
      description="Initialize your terminal and business vault with a secure onboarding experience built for elite retail operations.">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div className="space-y-8 rounded-4xl border border-white/10 bg-[#0b1115]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/5 bg-[#10161b] p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00D084]/80">
                  Hyper POS
                </span>
                <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                  Join the <span className="text-[#00D084]">Evolution.</span>
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                  Step into the future of retail management. Precision
                  engineering for the high-performance merchant.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#11161b] p-5">
                  <div className="flex items-center gap-3 text-[#00D084]">
                    <Zap className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Instant Sync
                      </p>
                      <p className="mt-2 text-sm text-white/50">
                        Real-time ledger updates across all terminals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#11161b] p-5">
                  <div className="flex items-center gap-3 text-[#00D084]">
                    <Shield className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        AES-256
                      </p>
                      <p className="mt-2 text-sm text-white/50">
                        Military-grade encryption for every transaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-[#0f141a]/90 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.75rem] border border-white/5 bg-[#11161b] p-8">
              <div className="mb-6 space-y-3 text-center">
                <p className="text-sm uppercase tracking-[0.26em] text-[#00D084]/80">
                  Create Account
                </p>
                <p className="text-sm leading-6 text-white/60">
                  Initialize your terminal and business vault.
                </p>
              </div>

              <form className="space-y-5">
                <label className="block text-sm font-medium text-white/70">
                  Full Name
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0f141a] px-4 py-3 text-sm text-white placeholder:text-white/30 shadow-sm focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]/20"
                  />
                </label>

                <label className="block text-sm font-medium text-white/70">
                  Business Name
                  <input
                    type="text"
                    placeholder="Hyper Retail Ltd."
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0f141a] px-4 py-3 text-sm text-white placeholder:text-white/30 shadow-sm focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]/20"
                  />
                </label>

                <label className="block text-sm font-medium text-white/70">
                  Email Address
                  <input
                    type="email"
                    placeholder="admin@hyperpos.network"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0f141a] px-4 py-3 text-sm text-white placeholder:text-white/30 shadow-sm focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]/20"
                  />
                </label>

                <label className="block text-sm font-medium text-white/70">
                  Secure Password
                  <div className="mt-3 flex items-center rounded-3xl border border-white/10 bg-[#0f141a] px-4 py-3 shadow-sm focus-within:border-[#00D084] focus-within:ring-1 focus-within:ring-[#00D084]/20">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="text-white/40 transition hover:text-white">
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </label>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-[#00D084] px-5 py-4 text-sm font-semibold text-[#04110b] transition hover:bg-[#19e59a]">
                  Create Account
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-white/50">
                Already part of the network?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#00D084] transition hover:text-[#7af2b4]">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthPageShell>
  );
}
