import Link from "next/link";
import Image from "next/image";
import { MarketingPageShell } from "@/app/_components/marketing-page-shell";
import {
  Activity,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type HighlightCard = {
  title: string;
  metric: string;
  detail: string;
  icon?: LucideIcon;
};

type FigmaViewPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: HighlightCard[];
  links: Array<{ label: string; href: string }>;
};

export function FigmaViewPage({
  eyebrow,
  title,
  description,
  highlights,
  links,
}: FigmaViewPageProps) {
  const fallbackIcons: LucideIcon[] = [
    Activity,
    BarChart3,
    Users,
    ShieldCheck,
    Zap,
    Sparkles,
  ];

  return (
    <MarketingPageShell
      eyebrow={eyebrow}
      title={title}
      description={description}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10161b]">
        <Image
          src="/view-ops-grid.svg"
          alt={`${title} visual overview`}
          width={1440}
          height={640}
          className="h-auto w-full object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,10,13,0.08),rgba(9,10,13,0.62))]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#bdeed9]">
            Operational Snapshot
          </p>
          <p className="mt-2 max-w-2xl text-sm text-white/78 sm:text-base">
            Visual map of key modules and data flow for {title.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon ?? fallbackIcons[index % fallbackIcons.length];

          return (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#11161b] p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-[#9aa5b1]">
                {item.title}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {item.metric}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {item.detail}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-[#00D084]/20 bg-[#00D084]/10 p-6">
        <p className="text-sm text-white/75">Related views</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/15 bg-[#0f1419] px-4 py-2 text-sm font-medium text-white/80 transition hover:border-[#00D084]/40 hover:text-[#c4ffe4]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </MarketingPageShell>
  );
}
