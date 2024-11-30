"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Beceriler",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C#</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Flutter</li>
        <li>HTML</li>
      </ul>
    ),
  },
  {
    title: "Eğitim",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Samsun Üniversitesi</li>
      </ul>
    ),
  },
  {
    title: "Sertifikalar",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Nesne Yönelimli Programlama</li>
        <li>Arduino</li>
        <li>Cisco</li>
        <li>MSSQL Orta Seviye Eğitim</li>
        <li>React Kodlama</li>
      </ul>
    ),
  },
];
const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white" id="about">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4">
        <Image alt="" src="/2.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Programlama Dilleri ve Teknolojiler: React, C#, JavaScript,
            TypeScript, Python, HTML, Flutter
          </p>
          <p className="text-base lg:text-lg">
            Araçlar ve Platformlar: Visual Studio, Photoshop
          </p>
          <p className="text-base lg:text-lg">
            Proje Deneyimi: Mobil uygulamalar ve otomasyon yazılım geliştirme
            projeleri
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleChange("skills")}
              active={tab == "skills"}
            >
              Beceriler
            </TabButton>
            <TabButton
              selectTab={() => handleChange("education")}
              active={tab == "education"}
            >
              Eğitim
            </TabButton>
            <TabButton
              selectTab={() => handleChange("certifications")}
              active={tab == "certifications"}
            >
              Sertifikalar
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
