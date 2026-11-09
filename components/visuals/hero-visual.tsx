import { Bot, Check, Gauge, Mail, Sparkles, Users } from "lucide-react";
import { ChatPanel, DashboardPanel, WebsitePanel } from "./mockups";
import { Illustration } from "./parts";

/**
 * Hero composition: a website, an AI assistant, a product dashboard and an
 * automation trail working together. Pure HTML and CSS, rendered on the server.
 */
export function HeroVisual() {
  return (
    <Illustration
      label="Illustration of a connected digital ecosystem: a website, an AI assistant, a SaaS dashboard and an automated workflow"
      className="mx-auto w-full max-w-xl lg:max-w-none"
    >
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(124_58_237/0.28),transparent)] blur-2xl" />

      {/* Connection lines */}
      <svg aria-hidden className="absolute inset-0 -z-0 hidden size-full lg:block" viewBox="0 0 600 560" preserveAspectRatio="none">
        <path d="M300 120 C 420 120, 470 180, 520 250" fill="none" stroke="var(--accent-text)" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" className="animate-draw" />
        <path d="M200 420 C 260 500, 380 500, 460 470" fill="none" stroke="var(--accent-text)" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" className="animate-draw [animation-delay:0.8s]" />
      </svg>

      <div className="relative grid gap-4 lg:block lg:h-[560px]">
        <div className="animate-fade-up lg:absolute lg:left-0 lg:top-4 lg:w-[68%]">
          <WebsitePanel url="yourcompany.com" />
        </div>

        <div className="hidden animate-fade-up [animation-delay:250ms] lg:absolute lg:right-0 lg:top-[150px] lg:block lg:w-[52%]">
          <div className="animate-float">
            <ChatPanel />
          </div>
        </div>

        <div className="hidden animate-fade-up [animation-delay:450ms] sm:block lg:absolute lg:bottom-2 lg:left-[6%] lg:w-[56%]">
          <DashboardPanel compact />
        </div>

        {/* Automation trail */}
        <div className="hidden animate-fade-up [animation-delay:650ms] lg:absolute lg:bottom-10 lg:right-[2%] lg:block lg:w-[34%]">
          <div className="space-y-1.5 rounded-xl border border-line-strong/80 bg-bg-elevated p-3 shadow-pop">
            <p className="flex items-center gap-1.5 text-[0.62rem] font-medium text-fg">
              <Bot className="size-3.5 text-accent-text" /> Lead workflow
            </p>
            {[
              { Icon: Mail, t: "Inquiry received" },
              { Icon: Sparkles, t: "Summarized and scored" },
              { Icon: Users, t: "Sent to sales" },
            ].map(({ Icon, t }) => (
              <p key={t} className="flex items-center gap-1.5 rounded-md bg-surface px-2 py-1.5 text-[0.6rem] text-fg/85">
                <Icon className="size-3 text-muted" /> {t}
                <Check className="ml-auto size-3 text-success" />
              </p>
            ))}
          </div>
        </div>

        <div className="absolute -top-3 right-[30%] hidden items-center gap-1.5 rounded-full border border-line-strong bg-bg-elevated px-3 py-1.5 text-[0.62rem] text-fg shadow-pop lg:inline-flex">
          <Gauge className="size-3.5 text-success" /> Server rendered, fast by default
        </div>
      </div>
    </Illustration>
  );
}
