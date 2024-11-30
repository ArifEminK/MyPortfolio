"use client";

import React from "react";

import { FiActivity, FiAward, FiUsers, FiClock } from "react-icons/fi";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
const ListArchive = [
  {
    metric: "Projeler",
    value: "7",
    icon: FiActivity,
  },
  {
    metric: "Ağ",
    value: "378",
    icon: FiUsers,
  },
  {
    metric: "Ödüller",
    value: "5",
    icon: FiAward,
  },
  {
    metric: "Yıl",
    value: "4",
    icon: FiClock,
  },
];
const Archive = () => {
  return (
    <div className="py-8 px-4 mt-0 md:mt-5 lg:mt-12 xl:gap-16">
      <div className="py-6 px-16 flex flex-col md:flex-row items-center justify-between">
        {ListArchive.map((arc, index) => {
          const IconComponent = arc.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 md:my-0"
            >
              <div className="flex items-center justify-center">
                <IconComponent className="text-white text-4xl mr-3" />
                <h2 className="text-white text-4xl font-semibold flex flex-row">
                  <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={parseInt(arc.value)}
                    className="text-white text-4xl font-semibold"
                  />
                </h2>
              </div>
              <p className="text-mycolor-700 text-base font-mono">
                {arc.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Archive;
