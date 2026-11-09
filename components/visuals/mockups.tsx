import * as React from "react";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Car,
  Check,
  FileText,
  Home,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Scale,
  Search,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import type { VisualKind } from "@/lib/content/types";
import { Box, Frame, Illustration, Line, Pill } from "./parts";

/* ── Reusable panels ──────────────────────────────────────── */

export function ChatPanel({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-line-strong/80 bg-bg-elevated shadow-pop">
        <div className="flex items-center justify-between border-b border-line px-3.5 py-2.5">
          <span className="flex items-center gap-2 text-[0.7rem] font-medium text-fg">
            <span className="inline-flex size-5 items-center justify-center rounded-md bg-accent text-white">
              <Sparkles className="size-3" />
            </span>
            Assistant
          </span>
          <span className="flex items-center gap-1 text-[0.6rem] text-muted">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-success" /> Online
          </span>
        </div>
        <div className="space-y-2.5 p-3.5 text-[0.68rem] leading-relaxed">
          <p className="ml-auto w-fit max-w-[80%] rounded-lg rounded-br-sm bg-accent px-2.5 py-1.5 text-white">
            Do you build booking systems for clinics?
          </p>
          <div className="max-w-[88%] rounded-lg rounded-bl-sm border border-line bg-surface px-2.5 py-2 text-fg/90">
            <span className="block animate-type">Yes. We connect your booking tool,</span>
            <span className="block animate-type [animation-delay:1.4s]">show real availability and confirm by email.</span>
            <span className="mt-2 flex flex-wrap gap-1">
              <Pill>Healthcare websites</Pill>
              <Pill>Booking</Pill>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-line px-3 py-2.5">
          <span className="flex-1 text-[0.65rem] text-muted">
            Ask a question<span className="ml-0.5 inline-block h-3 w-px translate-y-0.5 animate-blink bg-fg" />
          </span>
          <span className="inline-flex size-6 items-center justify-center rounded-md bg-accent text-white">
            <Send className="size-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

const bars = [38, 52, 44, 68, 58, 82, 74, 92];

export function DashboardPanel({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <Frame url="app.yourproduct.com" className={className} bodyClassName="p-0">
      <div className="flex">
        {!compact ? (
          <div className="hidden w-24 shrink-0 space-y-2 border-r border-line p-3 sm:block">
            <Line w="70%" className="bg-accent-text/60" />
            <Line w="85%" />
            <Line w="60%" />
            <Line w="75%" />
            <Line w="55%" />
          </div>
        ) : null}
        <div className="flex-1 space-y-3 p-3.5">
          <div className="grid grid-cols-3 gap-2">
            {["Leads", "Active", "Resolved"].map((k, i) => (
              <Box key={k} className="p-2">
                <span className="block text-[0.55rem] text-muted">{k}</span>
                <span className="mt-1 block h-2.5 rounded-sm bg-fg/80" style={{ width: `${55 + i * 12}%` }} />
              </Box>
            ))}
          </div>
          <Box className="p-3">
            <div className="flex h-20 items-end gap-1.5">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 animate-bar rounded-t-sm bg-gradient-to-t from-accent/50 to-accent-text"
                  style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                />
              ))}
            </div>
          </Box>
          {!compact ? (
            <Box className="divide-y divide-line">
              {[0, 1, 2].map((r) => (
                <div key={r} className="flex items-center gap-2 px-2.5 py-2">
                  <span className="size-4 rounded-full bg-surface-2" />
                  <Line w="30%" />
                  <span className="ml-auto">
                    <Pill active={r === 0}>{r === 0 ? "New" : "Done"}</Pill>
                  </span>
                </div>
              ))}
            </Box>
          ) : null}
        </div>
      </div>
    </Frame>
  );
}

function WebsitePanel({ className, url = "yourbrand.com" }: { className?: string; url?: string }) {
  return (
    <Frame url={url} className={className}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded bg-accent" />
          <Line w="2.5rem" />
        </span>
        <span className="hidden gap-3 sm:flex">
          <Line w="1.5rem" />
          <Line w="1.5rem" />
          <Line w="1.5rem" />
        </span>
        <span className="h-4 w-12 rounded-full bg-accent" />
      </div>
      <div className="mt-6 space-y-2">
        <span className="heading block text-[1.35rem] leading-tight text-fg">Grow with a website</span>
        <span className="heading block text-[1.35rem] leading-tight text-muted">that works as hard as you do.</span>
      </div>
      <div className="mt-3 space-y-1.5">
        <Line w="80%" />
        <Line w="62%" />
      </div>
      <div className="mt-4 flex gap-2">
        <span className="h-5 w-16 rounded-full bg-accent" />
        <span className="h-5 w-16 rounded-full border border-line-strong" />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <Box key={i} className="h-14 p-2">
            <span className="block size-3 rounded bg-accent-soft ring-1 ring-accent-line" />
            <Line w="70%" className="mt-2" />
          </Box>
        ))}
      </div>
    </Frame>
  );
}

/* ── Visuals by kind ──────────────────────────────────────── */

function WebsiteVisual() {
  return (
    <Illustration label="Illustration of a modern website with an AI assistant">
      <WebsitePanel className="sm:mr-10" />
      <div className="relative -mt-10 ml-auto w-[85%] animate-float sm:absolute sm:-bottom-6 sm:right-0 sm:mt-0 sm:w-[62%]">
        <ChatPanel />
      </div>
    </Illustration>
  );
}

function ChatVisual() {
  return (
    <Illustration label="Illustration of an AI chat assistant answering a customer question">
      <ChatPanel className="mx-auto max-w-sm" />
    </Illustration>
  );
}

function AgentVisual() {
  const steps = [
    { label: "Read new inquiry", done: true, Icon: Mail },
    { label: "Check calendar availability", done: true, Icon: CalendarDays },
    { label: "Draft confirmation email", done: true, Icon: FileText },
    { label: "Waiting for your approval", done: false, Icon: Users },
  ];
  return (
    <Illustration label="Illustration of an AI agent completing steps and waiting for approval">
      <Frame url="agent run" className="mx-auto max-w-md">
        <div className="flex items-center gap-2 text-[0.7rem] font-medium text-fg">
          <Bot className="size-4 text-accent-text" /> Booking agent
          <Pill active className="ml-auto">Running</Pill>
        </div>
        <ol className="mt-4 space-y-2">
          {steps.map(({ label, done, Icon }, i) => (
            <li
              key={label}
              className="flex animate-fade-up items-center gap-2.5 rounded-lg border border-line bg-surface px-3 py-2 text-[0.68rem]"
              style={{ animationDelay: `${i * 250}ms` }}
            >
              <Icon className="size-3.5 text-muted" />
              <span className={done ? "text-fg/90" : "text-fg"}>{label}</span>
              <span className="ml-auto">
                {done ? (
                  <Check className="size-3.5 text-success" />
                ) : (
                  <span className="block size-2 animate-pulse-dot rounded-full bg-accent-text" />
                )}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex gap-2">
          <span className="inline-flex h-7 flex-1 items-center justify-center rounded-full bg-accent text-[0.65rem] font-medium text-white">
            Approve and send
          </span>
          <span className="inline-flex h-7 flex-1 items-center justify-center rounded-full border border-line-strong text-[0.65rem] text-fg">
            Edit draft
          </span>
        </div>
      </Frame>
    </Illustration>
  );
}

function DashboardVisual() {
  return (
    <Illustration label="Illustration of a web application dashboard with charts and records">
      <DashboardPanel />
    </Illustration>
  );
}

function SaasVisual() {
  return (
    <Illustration label="Illustration of a SaaS product with plans, usage and team seats">
      <Frame url="app.yoursaas.com/billing">
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] font-medium text-fg">Workspace usage</span>
          <Pill active>Pro plan</Pill>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-2">
          <span className="block h-full w-[68%] animate-type rounded-full bg-gradient-to-r from-accent to-accent-text" />
        </div>
        <div className="mt-1.5 flex justify-between text-[0.6rem] text-muted">
          <span>AI credits this month</span>
          <span>68%</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {["Starter", "Pro", "Team"].map((p) => (
            <Box key={p} className={p === "Pro" ? "border-accent-line bg-accent-soft p-2.5" : "p-2.5"}>
              <span className="block text-[0.65rem] font-medium text-fg">{p}</span>
              <Line w="60%" className="mt-2" />
              <Line w="80%" className="mt-1.5" />
            </Box>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <span className="flex -space-x-1.5">
            {["bg-accent", "bg-accent-text", "bg-line-strong", "bg-fg/70"].map((c) => (
              <span key={c} className={`size-5 rounded-full border-2 border-bg-elevated ${c}`} />
            ))}
          </span>
          <span className="text-[0.6rem] text-muted">4 of 10 seats in use</span>
        </div>
      </Frame>
    </Illustration>
  );
}

function AutomationVisual() {
  const nodes = [
    { label: "New email", Icon: Mail },
    { label: "AI classifies", Icon: Sparkles, accent: true },
    { label: "CRM updated", Icon: Users },
    { label: "Team notified", Icon: MessageSquare },
  ];
  return (
    <Illustration label="Illustration of an automated workflow from email to CRM and team notification">
      <div className="relative mx-auto grid max-w-md grid-cols-2 gap-x-10 gap-y-12 rounded-xl border border-line bg-bg-elevated p-8 shadow-pop dot-grid">
        <svg aria-hidden className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 400 240" preserveAspectRatio="none">
          <path d="M120 72 H 280 V 168 H 120" fill="none" stroke="var(--accent-text)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" className="animate-draw" />
        </svg>
        {nodes.map(({ label, Icon, accent }, i) => (
          <div
            key={label}
            className={`relative flex animate-fade-up items-center gap-2 rounded-lg border px-3 py-2.5 text-[0.7rem] ${
              accent ? "border-accent-line bg-accent-soft text-accent-text" : "border-line bg-surface text-fg"
            } ${i === 2 ? "col-start-2 row-start-2" : ""} ${i === 3 ? "col-start-1 row-start-2" : ""}`}
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <Icon className="size-3.5" />
            {label}
          </div>
        ))}
      </div>
    </Illustration>
  );
}

function LandingVisual() {
  return (
    <Illustration label="Illustration of a focused landing page with a signup form">
      <Frame url="launch.yourproduct.com">
        <Pill active>New</Pill>
        <span className="heading mt-3 block text-[1.5rem] leading-tight text-fg">The faster way to onboard clients.</span>
        <div className="mt-3 space-y-1.5">
          <Line w="85%" />
          <Line w="60%" />
        </div>
        <div className="mt-5 flex gap-2">
          <span className="flex h-8 flex-1 items-center rounded-full border border-line-strong bg-surface px-3 text-[0.62rem] text-muted">
            you@company.com
          </span>
          <span className="inline-flex h-8 items-center gap-1 rounded-full bg-accent px-3 text-[0.62rem] font-medium text-white">
            Join the waitlist <ArrowRight className="size-3" />
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
          {["Setup in minutes", "Works with your CRM", "Cancel anytime"].map((t) => (
            <span key={t} className="flex items-center gap-1 text-[0.58rem] text-muted">
              <Check className="size-3 shrink-0 text-success" /> {t}
            </span>
          ))}
        </div>
      </Frame>
    </Illustration>
  );
}

function CodeVisual() {
  const lines: [string, string][] = [
    ["text-accent-text", "export default async function Page() {"],
    ["text-muted", "  // Rendered on the server, zero client JS"],
    ["text-fg/85", "  const services = await getServices();"],
    ["text-fg/85", "  return ("],
    ["text-success", "    <ServiceGrid items={services} />"],
    ["text-fg/85", "  );"],
    ["text-accent-text", "}"],
  ];
  return (
    <Illustration label="Illustration of Next.js server component code in an editor">
      <Frame url="app/services/page.tsx" bodyClassName="p-0">
        <div className="flex">
          <div className="hidden w-28 shrink-0 space-y-1.5 border-r border-line p-3 font-mono text-[0.58rem] text-muted sm:block">
            <span className="block">app/</span>
            <span className="block pl-2">layout.tsx</span>
            <span className="block pl-2 text-accent-text">services/</span>
            <span className="block pl-4 text-fg">page.tsx</span>
            <span className="block">components/</span>
            <span className="block">lib/</span>
          </div>
          <pre className="flex-1 overflow-hidden p-4 font-mono text-[0.62rem] leading-6">
            {lines.map(([c, t], i) => (
              <span key={i} className={`block animate-fade-up ${c}`} style={{ animationDelay: `${i * 90}ms` }}>
                <span className="mr-3 inline-block w-3 text-right text-muted">{i + 1}</span>
                {t}
              </span>
            ))}
          </pre>
        </div>
      </Frame>
    </Illustration>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 64 28" className="h-6 w-full text-muted" aria-hidden>
      <path d="M6 20 L10 11 Q12 7 18 7 H40 Q46 7 50 11 L56 16 Q60 17 60 20 V22 H4 V20 Z" fill="currentColor" opacity="0.35" />
      <circle cx="17" cy="22" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="47" cy="22" r="4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function InventoryVisual() {
  return (
    <Illustration label="Illustration of a car dealership inventory with filters and vehicle cards">
      <Frame url="yourdealership.com/inventory">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="flex h-7 flex-1 items-center gap-1.5 rounded-md border border-line bg-surface px-2 text-[0.6rem] text-muted">
            <Search className="size-3" /> Make, model or body style
          </span>
          <Pill active>SUV</Pill>
          <Pill>Under 30k</Pill>
          <Pill>2021+</Pill>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Box key={i} className={`overflow-hidden ${i === 2 ? "hidden sm:block" : ""}`}>
              <div className="flex h-14 items-center bg-surface-2 px-3">
                <CarIcon />
              </div>
              <div className="space-y-1.5 p-2">
                <Line w="80%" className="bg-fg/60" />
                <Line w="50%" />
                <span className="mt-1 flex items-center justify-between">
                  <span className="h-2 w-8 rounded-sm bg-accent-text/80" />
                  <Car className="size-3 text-muted" />
                </span>
              </div>
            </Box>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg border border-accent-line bg-accent-soft px-3 py-2 text-[0.62rem] text-accent-text">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5" /> Book a test drive
          </span>
          <ArrowRight className="size-3" />
        </div>
      </Frame>
    </Illustration>
  );
}

function ListingsVisual() {
  return (
    <Illustration label="Illustration of a property search with a map and listing cards">
      <Frame url="youragency.com/properties" bodyClassName="p-0">
        <div className="grid grid-cols-5">
          <div className="relative col-span-2 hidden min-h-48 border-r border-line bg-surface-2 dot-grid sm:block">
            {[
              ["24%", "30%"],
              ["58%", "46%"],
              ["36%", "70%"],
              ["70%", "20%"],
            ].map(([l, t], i) => (
              <span key={i} className="absolute" style={{ left: l, top: t }}>
                <MapPin className={`size-4 ${i === 1 ? "animate-float text-accent-text" : "text-muted"}`} />
              </span>
            ))}
          </div>
          <div className="col-span-5 space-y-2 p-3 sm:col-span-3">
            <div className="flex gap-1.5">
              <Pill active>3 beds</Pill>
              <Pill>Apartment</Pill>
              <Pill>Garden</Pill>
            </div>
            {[0, 1].map((i) => (
              <Box key={i} className="flex gap-2.5 p-2">
                <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-md bg-surface-2">
                  <Home className="size-4 text-muted" />
                </span>
                <span className="flex-1 space-y-1.5 pt-1">
                  <Line w="85%" className="bg-fg/60" />
                  <Line w="55%" />
                  <span className="block h-2 w-10 rounded-sm bg-accent-text/80" />
                </span>
              </Box>
            ))}
            <span className="flex h-7 items-center justify-center rounded-full bg-accent text-[0.62rem] font-medium text-white">
              Request a viewing
            </span>
          </div>
        </div>
      </Frame>
    </Illustration>
  );
}

function BookingVisual() {
  const days = Array.from({ length: 14 }, (_, i) => i + 8);
  return (
    <Illustration label="Illustration of an online appointment booking calendar">
      <Frame url="yourclinic.com/book">
        <div className="flex items-center gap-2.5">
          <span className="size-8 rounded-full bg-gradient-to-br from-accent-text/70 to-accent/40" />
          <span className="space-y-1">
            <span className="block text-[0.68rem] font-medium text-fg">Choose a time</span>
            <span className="block text-[0.58rem] text-muted">Initial consultation, 30 minutes</span>
          </span>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.58rem]">
          {days.map((d) => (
            <span
              key={d}
              className={`rounded-md py-1.5 ${
                d === 12 ? "bg-accent font-medium text-white" : d % 6 === 0 ? "text-muted line-through" : "bg-surface-2 text-fg/80"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["09:30", "10:00", "11:30", "14:00"].map((t, i) => (
            <Pill key={t} active={i === 1}>
              {t}
            </Pill>
          ))}
        </div>
        <span className="mt-4 flex h-7 items-center justify-center gap-1 rounded-full bg-accent text-[0.62rem] font-medium text-white">
          <Check className="size-3" /> Confirm appointment
        </span>
      </Frame>
    </Illustration>
  );
}

function LegalVisual() {
  return (
    <Illustration label="Illustration of a law firm consultation request with practice areas">
      <Frame url="yourfirm.com/consultation">
        <div className="flex items-center gap-2 text-[0.7rem] font-medium text-fg">
          <Scale className="size-4 text-accent-text" /> Request a consultation
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Corporate", "Employment", "Immigration", "Property"].map((a, i) => (
            <Pill key={a} active={i === 1}>
              {a}
            </Pill>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {["Full name", "Email address", "Briefly describe your matter"].map((f, i) => (
            <span
              key={f}
              className={`flex items-start rounded-md border border-line bg-surface px-2.5 text-[0.6rem] text-muted ${i === 2 ? "h-12 pt-2" : "h-7 items-center"}`}
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-[0.56rem] text-muted">
            <Lock className="size-3" /> Sent securely and kept confidential
          </span>
          <span className="inline-flex h-7 items-center rounded-full bg-accent px-3 text-[0.62rem] font-medium text-white">Send request</span>
        </div>
      </Frame>
    </Illustration>
  );
}

function BusinessVisual() {
  return (
    <Illustration label="Illustration of a professional services website with services and a case study">
      <Frame url="yourcompany.com">
        <span className="heading block text-[1.3rem] leading-tight text-fg">Advisory that moves your business forward.</span>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Strategy", "Finance", "Operations"].map((s) => (
            <Box key={s} className="p-2">
              <span className="block text-[0.6rem] font-medium text-fg">{s}</span>
              <Line w="80%" className="mt-2" />
              <Line w="55%" className="mt-1" />
            </Box>
          ))}
        </div>
        <Box className="mt-3 flex items-center gap-3 p-2.5">
          <span className="h-10 w-14 shrink-0 rounded-md bg-gradient-to-br from-accent/40 to-surface-2" />
          <span className="flex-1 space-y-1.5">
            <span className="block text-[0.6rem] text-accent-text">Case study</span>
            <Line w="90%" className="bg-fg/60" />
          </span>
          <ArrowRight className="size-3.5 text-muted" />
        </Box>
      </Frame>
    </Illustration>
  );
}

function MvpVisual() {
  const cols = [
    { week: "Week 1", items: 3, state: "done" },
    { week: "Week 2", items: 2, state: "done" },
    { week: "Week 3", items: 3, state: "active" },
    { week: "Launch", items: 1, state: "next" },
  ];
  return (
    <Illustration label="Illustration of an MVP roadmap moving week by week toward launch">
      <Frame url="roadmap">
        <div className="grid grid-cols-4 gap-2">
          {cols.map((c) => (
            <div key={c.week} className="space-y-1.5">
              <span className={`block text-[0.6rem] font-medium ${c.state === "active" ? "text-accent-text" : "text-muted"}`}>{c.week}</span>
              {Array.from({ length: c.items }).map((_, i) => (
                <Box
                  key={i}
                  className={`space-y-1 p-1.5 ${c.state === "active" && i === 0 ? "border-accent-line bg-accent-soft" : ""}`}
                >
                  <Line w="85%" className={c.state === "done" ? "bg-success/50" : undefined} />
                  <Line w="55%" />
                </Box>
              ))}
              {c.week === "Launch" ? (
                <span className="flex h-10 items-center justify-center rounded-lg border border-dashed border-accent-line">
                  <Sparkles className="size-3.5 animate-pulse-dot text-accent-text" />
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Frame>
    </Illustration>
  );
}

function RedesignVisual() {
  return (
    <Illustration label="Illustration comparing an outdated website with a redesigned modern version">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <span className="eyebrow">Before</span>
          <div className="mt-2 rounded-lg border border-line bg-surface-2 p-3 opacity-80 grayscale">
            <span className="block h-3 w-full rounded-sm bg-line-strong" />
            <div className="mt-3 grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="h-4 rounded-sm bg-line" />
              ))}
            </div>
            <div className="mt-3 space-y-1">
              <Line w="95%" />
              <Line w="90%" />
              <Line w="92%" />
              <Line w="70%" />
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow text-accent-text">After</span>
          <div className="mt-2 rounded-lg border border-accent-line bg-bg-elevated p-3 shadow-pop">
            <span className="heading block text-[0.95rem] leading-tight text-fg">Clear, fast, credible.</span>
            <Line w="70%" className="mt-2" />
            <span className="mt-3 block h-4 w-14 rounded-full bg-accent" />
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <Box className="h-8" />
              <Box className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </Illustration>
  );
}

const map: Record<VisualKind, () => React.ReactElement> = {
  website: WebsiteVisual,
  chat: ChatVisual,
  agent: AgentVisual,
  dashboard: DashboardVisual,
  saas: SaasVisual,
  automation: AutomationVisual,
  landing: LandingVisual,
  code: CodeVisual,
  inventory: InventoryVisual,
  listings: ListingsVisual,
  booking: BookingVisual,
  legal: LegalVisual,
  business: BusinessVisual,
  mvp: MvpVisual,
  redesign: RedesignVisual,
};

export function Visual({ kind }: { kind: VisualKind }) {
  const Component = map[kind];
  return <Component />;
}

export { WebsitePanel };
