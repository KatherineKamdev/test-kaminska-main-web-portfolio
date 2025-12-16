import React from "react";
import { Button } from "../../../../components/ui/button";
import { Clock, Rocket, Palette, Target, MessageCircle, Phone } from "lucide-react";

const faqItems = [
  {
    icon: Clock,
    question: "How long does a project take?",
    answer:
      "Timeline depends on scope—discovery through delivery typically spans four to twelve weeks. It´s crucial set realistic expectations from the start of collaboration.",
  },
  {
    icon: Rocket,
    question: "Do you work with startups?",
    answer:
      "Startups are ideal collaborators; constraints breed clarity and innovation.",
  },
  {
    icon: Palette,
    question: "What's your design philosophy?",
    answer:
      "Design serves strategy first, aesthetics second—form follows function, always.",
  },
  {
    icon: Target,
    question: "Can you handle full branding?",
    answer:
      "Yes, from logo through brand systems, social presence to product design.",
  },
  {
    icon: MessageCircle,
    question: "How do you approach revisions?",
    answer:
      "Revisions are part of refinement; feedback shapes the work until it's right.",
  },
  {
    icon: Phone,
    question: "Get in touch and let's discuss your project.",
    answer:
      "Reach out with your brief and we'll map the path forward together.",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#2c2922] to-[#2b2721] py-28 px-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <header className="flex flex-col gap-6 items-center mb-24">
          <h2 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-6xl text-center leading-tight">
            FAQ
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#8c96e9] to-transparent" />

          <p className="text-neutral-100 text-xl text-center leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal max-w-2xl">
            Questions about process, collaboration, and what comes next.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {faqItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={index}
                className="flex flex-col items-start gap-6 p-8 bg-gradient-to-br from-[#2a2520]/50 to-transparent rounded-2xl border border-[#8c96e9]/10 hover:border-[#8c96e9]/30 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8c96e9] to-[#6a76c9] rounded-xl flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-xl leading-tight">
                    {item.question}
                  </h3>

                  <p className="text-neutral-100/80 text-lg leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-5xl leading-tight">
              Ready to start?
            </h3>

            <p className="text-neutral-100 text-xl leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal">
              Questions? Let's talk.
            </p>
          </div>

          <Button className="bg-[#8c96e9] hover:bg-[#7a85d8] rounded-xl border border-[#c5c9e9]/30 px-8 py-4 shadow-lg hover:scale-105 transition-transform">
            <span className="[font-family:'Red_Rose',Helvetica] font-normal text-white text-lg">
              Contact
            </span>
          </Button>
        </footer>
      </div>
    </section>
  );
};
