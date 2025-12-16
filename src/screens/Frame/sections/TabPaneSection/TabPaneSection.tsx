import React from "react";

export const TabPaneSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[845px] bg-gradient-to-br from-[#2c2922] to-[#2a2520] py-24 px-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(140, 150, 233, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto flex gap-16">
        <div className="flex flex-col items-center gap-[400px] w-32 flex-shrink-0">
          <div className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100 text-5xl text-center tracking-wide leading-tight">
            01
          </div>

          <div className="[writing-mode:vertical-lr] rotate-180 [font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-3xl tracking-wide whitespace-nowrap">
            Listen and understand
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-12 max-w-3xl">
          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-5xl leading-tight">
              Deliver with confidence
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#8c96e9] to-transparent" />

            <p className="text-neutral-100 text-xl leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal">
              I begin by listening. Understanding your challenge, your audience,
              and what success looks like shapes everything that follows.
            </p>
          </div>

          <div className="relative h-[480px] bg-gradient-to-br from-[#3a3530] to-[#2a2520] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8c96e9]/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-neutral-100/20 text-7xl font-bold [font-family:'Red_Rose',Helvetica]">
                STEP 01
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
