import React from "react";
import { CheckCircle2 } from "lucide-react";

const bulletPoints = [
  "Research and strategy",
  "Visual systems and motion",
  "Problem solving mindset",
];

const tags = ["UI/UX DESIGN", "SOCIAL MEDIA", "BRAND DESIGN", "ILLUSTRATION"];

const softwareTools = [
  { name: "Figma", color: "from-purple-500 to-pink-500" },
  { name: "VS Code", color: "from-blue-500 to-cyan-500" },
  { name: "Adobe CC", color: "from-red-500 to-orange-500" },
  { name: "Blender", color: "from-orange-500 to-yellow-500" },
];

export const LayoutSection = (): JSX.Element => {
  return (
    <section className="bg-gradient-to-b from-[#2b2721] to-[#2c2922] relative w-full py-24 px-16">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)`
          }} />
        </div>

        <div className="relative">
          <div className="mb-16 [font-family:'Red_Rose',Helvetica] font-normal text-[#8c96e9] text-sm tracking-widest uppercase">
            About me
          </div>

          <div className="grid lg:grid-cols-2 gap-20 mb-24">
            <div className="flex flex-col gap-6">
              <h2 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-5xl leading-tight">
                Built on research, shaped by knowledge and experience
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#8c96e9] to-transparent" />
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-xl leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal">
                <span className="text-neutral-100">
                  Working on personal or real projects taught me that good
                  design requires both rigorous thinking and genuine empathy. I
                  listen first, solve second, and measure everything that
                  matters. That´s how
                </span>
                <span className="text-[#8c96e9] font-bold"> blueprint </span>
                <span className="text-neutral-100">
                  of your vision takes form.
                </span>
              </p>

              <div className="flex flex-col gap-4">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <CheckCircle2 className="w-5 h-5 text-[#8c96e9] group-hover:scale-110 transition-transform" />
                    <div className="flex-1 [font-family:'Red_Rose',Helvetica] font-normal text-neutral-100 text-lg">
                      {point}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
            <div className="relative rounded-2xl overflow-hidden h-[540px] bg-gradient-to-br from-[#3a3530] to-[#2a2520] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8c96e9]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-neutral-100/30 text-6xl font-bold [font-family:'Red_Rose',Helvetica]">
                  PORTFOLIO
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 flex-wrap">
                {tags.map((tag, index) => (
                  <div key={index} className="px-4 py-2 bg-[#8c96e9]/10 border border-[#8c96e9]/30 rounded-lg [font-family:'Red_Rose',Helvetica] font-normal text-neutral-100 text-sm tracking-wide hover:bg-[#8c96e9]/20 transition-colors">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 bg-[#2a2520]/50 p-6 rounded-xl border border-[#8c96e9]/10">
                <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-xl">
                  Generalist approach to design
                </h3>
                <p className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100/80 text-base leading-relaxed">
                  I take as important use various tools to achieve the best
                  result. My workflow is put under revision time by time for the
                  case of boost efectivity, precision of the output and update
                  of software which leads to the best performance of my design
                  projects.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-xl">
                  Recent software pack
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {softwareTools.map((tool, index) => (
                    <div
                      key={index}
                      className={`h-20 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform`}
                    >
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 bg-[#2a2520]/50 p-6 rounded-xl border border-[#8c96e9]/10">
                <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-xl">
                  AI Mindset
                </h3>
                <p className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100/80 text-base leading-relaxed">
                  Ideas and concepts I am disscussing and prompting with AI for
                  speeding up and iteration of the design process and also for
                  the bug-fix purpose.
                </p>
              </div>

              <div className="flex flex-col gap-3 bg-[#8c96e9]/5 p-6 rounded-xl border-l-4 border-[#8c96e9]">
                <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-xl">
                  Design with story and purpose makes audience actionable
                </h3>
                <p className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100/80 text-base leading-relaxed">
                  I believe design with clear and bold message are way more
                  recognized. In my work I am trying keep engangement,
                  curiosity and clear identification beyond the product and
                  bussiness. I deliver designs which have <span className="text-[#8c96e9] font-bold">blueprint</span> of original vision through visual storytelling. People are
                  not buying products. people are buying that what they
                  believe they need or want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
