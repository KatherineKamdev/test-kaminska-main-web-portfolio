import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationButtons = [
  { label: "View projects", bgColor: "bg-[#969fe9]" },
  { label: "About me", bgColor: "bg-[#b2b8e9]" },
  { label: "FAQ", bgColor: "bg-[#c5c9e9]" },
  { label: "Workflow", bgColor: "bg-[#a8afe9]" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[840px] bg-gradient-to-br from-[#2b2721] via-[#342f28] to-[#2b2721] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(140, 150, 233, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(140, 150, 233, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative container mx-auto px-16 py-32">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="[font-family:'Red_Rose',Helvetica] font-bold text-7xl tracking-tight leading-tight">
              <span className="text-neutral-100">Design </span>
              <span className="text-[#8c96e9]">blueprints</span>
              <span className="text-neutral-100">, better future</span>
            </h1>

            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8c96e9] to-transparent mx-auto" />
          </div>

          <p className="max-w-3xl mx-auto text-neutral-100 text-xl leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal">
            I am a graphic designer who focus on storytelling and clarity. I
            combine visual creativity with strategic thinking—from user research
            through wireframing to final design. I create websites and
            applications that look good, work intuitively, and deliver results.
          </p>

          <nav className="flex flex-wrap justify-center gap-4 pt-8">
            {navigationButtons.map((button) => (
              <Button
                key={button.label}
                className={`${button.bgColor} hover:opacity-90 transition-all hover:scale-105 rounded-xl border border-white/20 px-6 py-3 shadow-lg`}
              >
                <span className="[font-family:'Red_Rose',Helvetica] font-normal text-[#2b2721] text-lg tracking-[0] leading-tight">
                  {button.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
