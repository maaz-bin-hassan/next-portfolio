import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 css-grid-pattern",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Trading App with AI features",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 css-grid-pattern",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 5,
    title: "UNI-verse FYP - Collaborative University Communication Platform",
    des: "A Student communication app with real-time notifications, Social media like posts and job opportunities.",
    img: "/p5.svg",
    iconLists: ["/flutter.png", "/firebase.svg", "/huggingface.svg", "/cloud.svg"],
    sourceCode: "https://github.com/maaz-bin-hassan/FYP-UNI-verse-F21",
  },
  {
    id: 8,
    title: "MaazPDF APP - Smart PDF App",
    des: "A PDF document management system with features like voice notes, annotation, highlighting, and real-time collaboration.",
    img: "/p8.png",
    iconLists: ["/flutter.png", "/firebase.svg"],
    sourceCode: "https://github.com/maaz-bin-hassan/MaazPDF",
  },
  {
    id: 9,
    title: "Cardify App - Smart Business Card and Contacts",
    des: "A Smart Business Card and Contacts app",
    img: "/p9.png",
    iconLists: ["/flutter.png", "/firebase.svg"],
    sourceCode: "https://github.com/maaz-bin-hassan/Cardify",
  },
  {
    id: 10,
    title: "Oleo Organics - Hair Oil E-commerce Website",
    des: "A hair oil e-commerce website with modern design, product catalog, and seamless shopping experience.",
    img: "/P10.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://oleo-organics.vercel.app/",
    sourceCode: "https://github.com/maaz-bin-hassan/Oleo-Organics",
  },
  {
    id: 1,
    title: "Gadget Groove - E Commerce Platform",
    des: "A full-stack e-commerce platform with a modern UI, real-time notifications  and a secure payment system.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://gadget-groove.vercel.app/home",
    sourceCode: "https://github.com/Web-Development-Project-Series/GadgetGroove-Semester-Project-",
  },
  {
    id: 2,
    title: "Quickbite cafe",
    des: "Online cafe website which supports html, css, and js code with admin panel",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://023-21-0231-maaz-bin-hassan-cafe.vercel.app/"              ,
    sourceCode: "https://github.com/maaz-bin-hassan/023-21-0231-maaz-bin-hassan-cafe",
  },
  {
    id: 3,
    title: "Movie Finder",
    des: "Online Movie Finder website which is made in react js and uses the TMDB API to fetch the movies and display them on the website",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://movie-finder-psi-three.vercel.app/#/",
    sourceCode: "https://github.com/maaz-bin-hassan/Movie-Finder",
  },
  {
    id: 4,
    title: "Portfolio in react js ",
    des: "Built personal portfolio in react js, using HTML CSS and JS added  functionality for ease of read",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://portfolio-maaz-lyart.vercel.app/",
    sourceCode: "https://github.com/maaz-bin-hassan/portfolio-in-react",
  },
  {
    id: 6,
    title: "Note-Heaven APP",
    des: "AI powered note taking app . Built with flutter and gemini API with firebase as storage capable of holding notes recording audios and drawings and instant share with same network",
    img: "/p6.svg",
     iconLists: ["/flutter.png", "/firebase.svg", "/cloud.svg"],
    sourceCode: "https://github.com/maaz-bin-hassan/NoteHeaven",
  },
  {
    id: 7,
    title: "Custom sales and inventory management App",
    des: "Created a custom sales and inventory management app for a client, using Flutter and Firebase, with features like real-time updates, user authentication, and data analytics.",
    img: "/p7.svg",
    iconLists: ["/flutter.png", "/firebase.svg", "/huggingface.svg", "/cloud.svg"],
    sourceCode: "https://github.com/maaz-bin-hassan/muzamil_communication",
  },
] as const;

export const Certifications = [
  {
    id: 1,
    title: "Project Management",
    provider: "Coursera",
    year: "2025",
    icon: "/coursera.png",
    description: "Project Management certification covering essential skills and methodologies."
  },
  {
    id: 2,
    title: "Flutter Masterclass (Dart, APIs, Firebase & More)",
    provider: "Udemy",
    year: "2024",
    icon: "/udemy.png",
    description: "Comprehensive Flutter development course covering Dart, APIs, Firebase integration, and advanced mobile app development techniques."
  },
  {
    id: 3,
    title: "Google Cybersecurity Specialization",
    provider: "Coursera",
    year: "2024",
    icon: "/Coursera.png",
    description: "Professional certification in cybersecurity fundamentals, risk management, and security operations."
  },
  {
    id: 4,
    title: "Blockchain Specialization",
    provider: "Coursera", 
    year: "2025",
    icon: "/Coursera.png",
    description: "Comprehensive specialization covering blockchain technology, smart contracts, and decentralized applications."
  }
] as const;

export const Education = [
  {
    id: 1,
    institution: "SUKKUR IBA UNIVERSITY",
    location: "Sukkur, Sindh",
    degree: "Bachelor of Science in Software Engineering",
    duration: "2021-2025",
    icon: "/iba.png",
    coursework: [
      "Software Engineering",
      "Mobile Application Development", 
      "Software Testing",
      "Web Development",
      "Machine Learning and Artificial Intelligence"
    ]
  }
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  
  {
    id: 3,
    name: "Firebase",
    img: "/firebase.svg",
    nameImg: "/firebaseName.svg",
  },
  {
    id: 4,
    name: "Flutter",
    img: "/flutter.svg",
    nameImg: "/flutterName.svg",
  },
   {
    id: 4,
    name: "Hugging Face",
    img: "/huggingface.svg",
    nameImg: "/huggingfaceName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Associate Mobile App Developer",
    desc: "Working as React Native Developer for cross platform mobile app development on multiple projects.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  
  {
    id: 3,
    title: "Flutter APP Developer",
    desc: "Developed and maintained user-facing features for mobile applications using Flutter.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "QA Engineer",
    desc: "Conducted thorough testing and debugging of web and mobile applications to ensure high quality and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/maaz-bin-hassan",
  },
  
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/maaz-bin-hassan",
  },
] as const;

export const techStack = {
  stack1: ["Flutter", "Firebase", "MongoDB", "Dart", "Node.js", "Express.js"],
  stack2: ["React.js", "Next.js", "Typescript"],
} as const;

