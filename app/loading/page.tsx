import Link from "next/link";
import { Bolt, CircleDot, Loader2 } from "lucide-react";
import { AuthPageShell } from "@/app/_components/auth-page-shell";

export default function LoadingPage() {
  return (
    <AuthPageShell
      title="Initializing Kinetic Engine"
      description="A secure startup sequence optimized for fast terminal readiness and encrypted session validation.">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-4xl border border-white/10 bg-[#0b1115]/95 p-10 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00D084]/10 text-[#00D084] shadow-[0_0_60px_rgba(0,208,132,0.2)]">
              <Bolt className="h-10 w-10" />
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-[#00D084]/70">
                System Protocol v4.0.2
              </p>
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Initializing Kinetic Engine
              </h1>
              <p className="text-sm leading-7 text-white/50">
                Secure node authentication and local cache preparation for
                hyper-fast retail operations.
              </p>
            </div>

            <div className="w-full space-y-4">
              <div className="overflow-hidden rounded-full border border-white/10 bg-white/5">
                <div
                  className="h-2 rounded-full bg-[#00D084]"
                  style={{ width: "62%" }}
                />
              </div>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>Authenticating secure node...</span>
                <span className="inline-flex items-center gap-2 text-[#00D084]">
                  <Loader2 className="h-4 w-4 animate-spin" /> In progress
                </span>
              </div>
            </div>

            <div className="grid gap-3 rounded-[1.75rem] border border-white/10 bg-[#11161b] p-5 text-white/70">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#00D084]" />
                <span>Local ledger initialized.</span>
              </div>
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#00D084]" />
                <span>Secure session token generated.</span>
              </div>
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#00D084]" />
                <span>Ready for terminal handoff.</span>
              </div>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-3xl bg-[#00D084] px-6 py-3 text-sm font-semibold text-[#04110b] transition hover:bg-[#19e59a]">
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </AuthPageShell>
  );
}
