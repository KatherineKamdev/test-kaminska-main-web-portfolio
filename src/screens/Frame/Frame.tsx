import React from "react";
import { ContactSection } from "./sections/ContactSection";
import { ContentSection } from "./sections/ContentSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection";
import { LayoutSection } from "./sections/LayoutSection";
import { LayoutWrapperSection } from "./sections/LayoutWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { TabPaneSection } from "./sections/TabPaneSection";
import { TabPaneWrapperSection } from "./sections/TabPaneWrapperSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#2b2721] via-[#2c2922] to-[#2b2721]">
      <HeaderSection />
      <LayoutSection />
      <LayoutWrapperSection />
      <TabPaneSection />
      <TabPaneWrapperSection />
      <MainContentSection />
      <ContentSection />
      <GallerySection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
