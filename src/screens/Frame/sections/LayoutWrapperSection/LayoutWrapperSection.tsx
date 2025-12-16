import React from "react";
import { Target, Eye, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategic thinking first",
    description: "Problems are solved before pixels are placed.",
  },
  {
    icon: Eye,
    title: "Visual clarity always",
    description: "Beauty and function exist in the same space.",
  },
  {
    icon: TrendingUp,
    title: "Results that matter",
    description: "Design succeeds when it changes behaviour.",
  },
];

export const LayoutWrapperSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#2c2922] to-[#2b2721] py-28 px-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <div className="flex flex-col gap-6">
            <div className="[font-family:'Red_Rose',Helvetica] font-normal text-[#8c96e9] text-sm tracking-widest uppercase">
              Approach
            </div>

            <h2 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-6xl leading-tight">
              What drives every project forward
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#8c96e9] to-transparent" />
          </div>

          <div className="flex items-end">
            <p className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100 text-xl leading-relaxed">
              Strategy shapes form. Research informs decisions. Every element
              serves a purpose, whether it moves or stays still.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-8 p-8 bg-gradient-to-br from-[#2a2520]/50 to-transparent rounded-2xl border border-[#8c96e9]/10 hover:border-[#8c96e9]/30 transition-all hover:scale-105 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#8c96e9] to-[#6a76c9] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <div className="flex flex-col items-start gap-4">
                  <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-3xl leading-tight">
                    {feature.title}
                  </h3>

                  <p className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100/80 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
