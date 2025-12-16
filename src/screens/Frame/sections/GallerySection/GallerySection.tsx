import React from "react";

const galleryProjects = [
  { title: "Project Alpha", color: "from-blue-600 to-purple-600" },
  { title: "Project Beta", color: "from-purple-600 to-pink-600" },
  { title: "Project Gamma", color: "from-pink-600 to-red-600" },
];

export const GallerySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#2c2922] to-[#2b2721] py-28 px-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(140, 150, 233, 0.15) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mx-auto max-w-4xl mb-20">
          <h2 className="[font-family:'Red_Rose',Helvetica] font-bold text-neutral-100 text-6xl text-center leading-tight">
            Let's turn vision into reality
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8c96e9] to-transparent" />

          <p className="text-neutral-100 text-xl text-center leading-relaxed [font-family:'Red_Rose',Helvetica] font-normal">
            Ready to build something remarkable together? These are my recent
            projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {galleryProjects.map((project, index) => (
            <div
              key={index}
              className={`relative h-[400px] bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-3xl font-bold [font-family:'Red_Rose',Helvetica] text-center">
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
