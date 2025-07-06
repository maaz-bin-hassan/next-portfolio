import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Flutter App Developer
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Ideas into Intuitive Mobile Experiences"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m {links.ownerName},  Flutter App developer and Full Stack Developer based in Pakistan.
          </p>

          {/* Social Media Links */}
          <div className="my-6 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/maaz-bin-hassan/"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-blue-600"
            >
              <FaLinkedinIn className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://github.com/maaz-bin-hassan"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-gray-600"
            >
              <FaGithub className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://www.instagram.com/maazzz.exe/"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-pink-600"
            >
              <FaInstagram className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>

          <Link href="#about" className="md:mt-10">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>

        {/* Profile Image Section with Floating Elements - Now shows on mobile too */}
        <div className="relative mt-10 lg:mt-0 lg:ml-8 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Floating React Logo */}
            <div className="absolute -left-8 -top-4 lg:-left-16 lg:-top-8 animate-float">
              <Image
                src="/re.svg"
                alt="React"
                width={48}
                height={48}
                className="lg:w-16 lg:h-16 animate-spin-slow opacity-80"
                unoptimized
              />
            </div>
            
            {/* Floating Flutter Logo */}
            <div className="absolute -right-6 -top-2 lg:-right-12 lg:-top-4 animate-float-delayed">
              <Image
                src="/flutter.png"
                alt="Flutter"
                width={36}
                height={36}
                className="lg:w-12 lg:h-12 opacity-80"
                unoptimized
              />
            </div>
            
            {/* Main Profile Image */}
            <Image
              src="/pic.png"
              alt="Profile"
              width={240}
              height={240}
              className="lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl"
              priority
              unoptimized
            />
            
            {/* Floating Firebase Logo */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:-bottom-4 animate-float">
              <Image
                src="/firebase.svg"
                alt="Firebase"
                width={42}
                height={42}
                className="lg:w-14 lg:h-14 opacity-80"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
