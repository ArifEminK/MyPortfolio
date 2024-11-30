"use client";

import {  useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectTag from "./ProjectTag";
import { motion } from "motion/react";
import ProjectCart from "./ProjectCart";

const ProjectsData = [
  {
    id: 1,
    title: "Nar Evim",
    description:
      "NarEvim adlı e-ticaret sitesinin react üzerinden yazılan klon uygulamasıdır.",
    image: "/projects/narevim.png",
    tag: ["React", "Backend", "Frontend", "Hepsi"],
    gitUrl: "https://github.com/ArifEminK/NarEvim-Mobil-Uygulamas-",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Atmosvera Yer Istasyonu",
    description:
      "Teknofest 2023 Uluslararası İHA yarışmasında 8. olan Atmosvera Havacılık Takımı için kendi yazdığım Yer Kontrol İstasyonu.",
    image: "/projects/atmosvera.png",
    tag: ["C#", "Firebase", "Arduino", "Hepsi"],
    gitUrl: "https://github.com/ArifEminK/AtmosveraYerIstasyonu",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "C# Sözlüğü",
    description: "Giriş seviye C# sözlüğü.",
    image: "/projects/csharp.png",
    tag: ["C#", "Hepsi"],
    gitUrl: "https://github.com/ArifEminK/BeginnerLevelCSharpDictionary",
    previewUrl: "/",
  },
];

const Project = () => {
  const [tag, setTag] = useState("Hepsi");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChance = (newTag: any) => {
    setTag(newTag);
  };
  const filtredProject = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-white font-semibold mt-4 mb-8 lg:mt-8 lg:mb-12">
        Projeler
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-5 py-6">
        <ProjectTag
          name="Hepsi"
          onClick={handleTagChance}
          isSelected={tag === "Hepsi"}
        />
        <ProjectTag
          name="React"
          onClick={handleTagChance}
          isSelected={tag === "React"}
        />
        <ProjectTag
          name="C#"
          onClick={handleTagChance}
          isSelected={tag === "C#"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10">
        {filtredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCart
              description={project.description}
              gitUrl={project.gitUrl}
              image={project.image}
              previewUrl={project.previewUrl}
              title={project.title}
              key={project.id}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
