import React from "react";
import { Separator } from "../../../../components/ui/separator";

const topLinks = [
  "View projects",
  "Case studies",
  "Portfolio",
  "All work",
  "Recent projects",
];

const bottomLeftLinks = ["Terms of service", "Cookie settings", "Copyright"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-gradient-to-t from-[#1f1d1a] to-[#2a2724] py-20 px-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 11px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <nav className="flex flex-wrap items-start gap-8 mb-8">
          {topLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100 text-base tracking-[0] leading-relaxed hover:text-[#8c96e9] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="relative mt-32">
          <Separator className="bg-neutral-100/20 mb-8" />

          <div className="flex justify-between items-start flex-wrap gap-6">
            <nav className="flex items-start gap-6">
              {bottomLeftLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100/60 text-sm tracking-[0] leading-relaxed hover:text-neutral-100 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            <a
              href="#"
              className="[font-family:'Red_Rose',Helvetica] font-normal text-neutral-100/60 text-sm tracking-[0] leading-relaxed hover:text-neutral-100 transition-colors"
            >
              Privacy policy
            </a>
          </div>

          <div className="absolute w-24 h-24 -top-32 right-0 bg-gradient-to-br from-[#8c96e9]/20 to-transparent rounded-full blur-xl" />
        </div>
      </div>
    </footer>
  );
};
