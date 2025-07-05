import { Certifications } from "@/data";

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative flex flex-col rounded-3xl border border-white/[0.1] bg-black-100 p-6 transition-all duration-300 hover:border-purple/50 hover:shadow-xl hover:shadow-purple/20"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple/5 via-transparent to-blue/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Certification Provider Logo */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 p-2">
                <img
                  src={cert.icon}
                  alt={cert.provider}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Certification Title */}
              <h3 className="mb-2 text-lg font-bold text-white">
                {cert.title}
              </h3>

              {/* Provider and Year */}
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-purple/20 px-3 py-1 text-sm text-purple">
                  {cert.provider}
                </span>
                <span className="text-sm text-white-200">
                  {cert.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-white-200 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple to-blue opacity-0 transition-opacity duration-300 group-hover:opacity-20" 
                 style={{ 
                   background: 'linear-gradient(90deg, transparent, transparent), linear-gradient(90deg, #8B5CF6, #3B82F6)',
                   backgroundClip: 'padding-box, border-box',
                   backgroundOrigin: 'padding-box, border-box'
                 }} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};
