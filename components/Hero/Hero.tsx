"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* col-span 8 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg-text-7xl font-semibold font-poppins">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mycolor-200 to-mycolor-100">
              Merhaba! Ben
            </span>
            <div className="h-2"></div>
            <TypeAnimation
              sequence={[
                "Arif Emin Köklü.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Yazılım Mühendisliği Öğrencisiyim.",
                1000,
                "Mobil Yazılımcıyım.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-mycolor-100">
            Merhaba! Ben Arif Emin Köklü, Samsun Üniversitesi Yazılım
            Mühendisliği bölümünde eğitim alıyorum. Mobil uygulama geliştirme
            alanında tutkulu bir yazılımcıyım. Çeşitli projeler ve stajlarla
            yazılım deneyimimi güçlendirdim ve özellikle React, C#, Python ve
            TypeScript gibi teknolojilerde uzmanlaştım. Kendimi sürekli
            geliştirmeye ve yenilikçi çözümler üretmeye adıyorum.
          </p>

          <div className="mt-5">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full md:w-fit rounded-full bg-gradient-to-r from-mycolor-200 to-mycolor-100 text-white text-center mr-2"
            >
              Bana Ulaş
            </Link>
          </div>
        </motion.div>
        {/* col-span 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center "
        >
          <div className="relative rounded-full bg-gradient-to-bl from-mycolor-100 to-mycolor-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              alt=""
              src="/picture.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={370}
              height={370}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
