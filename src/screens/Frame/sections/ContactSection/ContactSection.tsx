import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Mail, Phone, Share2, MapPin } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "Direct line to discuss your project",
    detail: "katerina.kaminska@email.cz",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Prefer to talk things through first",
    detail: "+420 605 591 866",
  },
  {
    icon: Share2,
    title: "Social media",
    description: "Linktree",
    detail: null,
    underline: true,
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Google maps link",
    detail: null,
    underline: true,
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#2c2922] to-[#2a2520] py-28 px-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(140, 150, 233, 0.15) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 mb-24 max-w-3xl">
          <div className="[font-family:'Red_Rose',Helvetica] font-bold text-[#8c96e9] text-sm tracking-widest uppercase">
            Reach
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-6xl leading-tight">
              Start here
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#8c96e9] to-transparent" />

            <p className="text-neutral-100 text-xl leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal">
              Fill in your details below
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#2a2520]/50 to-transparent border border-[#8c96e9]/10 hover:border-[#8c96e9]/30 transition-all p-8 rounded-2xl"
              >
                <CardContent className="p-0 flex flex-col gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8c96e9] to-[#6a76c9] rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-2xl leading-tight">
                      {card.title}
                    </h3>

                    <p
                      className={`text-neutral-100/80 text-lg leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal ${
                        card.underline ? "underline" : ""
                      }`}
                    >
                      {card.description}
                    </p>

                    {card.detail && (
                      <p className="[font-family:'Red_Rose',Helvetica] font-normal text-[#8c96e9] text-lg leading-relaxed">
                        {card.detail}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
