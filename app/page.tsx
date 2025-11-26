import dynamic from "next/dynamic";

import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

// Lazy load heavy components
const Grid = dynamic(() => import("@/components/grid").then((m) => ({ default: m.Grid })), {
  loading: () => <div className="h-96 animate-pulse bg-black-100" />,
});

const RecentProjects = dynamic(
  () => import("@/components/recent-projects").then((m) => ({ default: m.RecentProjects })),
  { loading: () => <div className="h-96 animate-pulse bg-black-100" /> }
);

const Clients = dynamic(
  () => import("@/components/clients").then((m) => ({ default: m.Clients })),
  { ssr: true }
);

const Experience = dynamic(
  () => import("@/components/experience").then((m) => ({ default: m.Experience })),
  { loading: () => <div className="h-64 animate-pulse bg-black-100" /> }
);

const EducationSection = dynamic(
  () => import("@/components/education").then((m) => ({ default: m.EducationSection })),
  { loading: () => <div className="h-64 animate-pulse bg-black-100" /> }
);

const CertificationsSection = dynamic(
  () => import("@/components/certifications").then((m) => ({ default: m.CertificationsSection })),
  { loading: () => <div className="h-64 animate-pulse bg-black-100" /> }
);

const Approach = dynamic(
  () => import("@/components/approach").then((m) => ({ default: m.Approach })),
  { loading: () => <div className="h-64 animate-pulse bg-black-100" /> }
);

const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { ssr: true }
);

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <EducationSection />
        <CertificationsSection />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
