import Image from "next/image";
import { Education } from "@/data";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 md:grid-cols-1">
        {Education.map((edu) => (
          <div
            key={edu.id}
            className="relative flex flex-col items-center rounded-3xl border border-white/[0.1] bg-black-100 p-6 lg:p-10"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple/10 via-transparent to-blue/10" />
            
            <div className="relative z-10 flex w-full flex-col items-center lg:flex-row lg:items-start">
              {/* University Logo */}
              <div className="mb-6 flex-shrink-0 lg:mb-0 lg:mr-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 p-2 shadow-lg lg:h-32 lg:w-32">
                  <Image
                    src={edu.icon}
                    alt={edu.institution}
                    width={128}
                    height={128}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-xl font-bold text-white lg:text-2xl">
                  {edu.institution}
                </h2>
                <p className="mt-1 text-sm text-white-200 lg:text-base">
                  {edu.location}
                </p>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-purple lg:text-xl">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-white-200 lg:text-base">
                    {edu.duration}
                  </p>
                </div>

                {/* Relevant Coursework */}
                <div className="mt-6">
                  <h4 className="mb-3 text-base font-semibold text-white lg:text-lg">
                    Relevant Coursework:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                    {edu.coursework.map((course, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-purple/20 px-3 py-1 text-xs text-purple lg:text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
