// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const rydeRef = useRef(null);
//   const libraryRef = useRef(null);
//   const ycDirectoryRef = useRef(null);

//   useGSAP(() => {
//     // Animation for the main section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     // Animations for each app showcase
//     const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3 * (index + 1),
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom-=100",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <div className="showcaselayout">
//           <div ref={rydeRef} className="first-project-wrapper">
//             <div className="bg-[#fbeedc] p-8 rounded-[24px] flex items-center justify-center shadow-lg">
//               <img src="/images/project1.png" alt="Ryde App Interface" />
//             </div>
//             <div className="text-content">
//               <h2>
//                 TaskMaster Pro – Full-Stack TypeScript Task Manager
//               </h2>
//               <p className="text-white-50 md:text-xl">
//                 Built a scalable full-stack task management app with TypeScript, React, Tailwind CSS, and +5 advanced tools.  
// Features include task creation, updates, priorities, due dates, and real-time synchronization.

//               </p>
//             </div>
//           </div>

//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={libraryRef}>
//               <div className="image-wrapper bg-[#FFEFDB]">
//                 <img
//                   src="/images/project2.png"
//                   alt="Library Management Platform"
//                 />
//               </div>
//               <h2>The Library Management Platform</h2>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <div className="image-wrapper bg-[#FFE7EB]">
//                 <img src="/images/project3.png" alt="YC Directory App" />
//               </div>
//               <h2>YC Directory - A Startup Showcase App</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppShowcase;
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const rydeRef = useRef(null);
//   const libraryRef = useRef(null);
//   const ycDirectoryRef = useRef(null);

//   useGSAP(() => {
//     // Animation for the main section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     // Animations for each app showcase
//     const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3 * (index + 1),
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom-=100",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <div className="showcaselayout">
//           {/* === TaskMaster Pro Project === */}
//           <div ref={rydeRef} className="first-project-wrapper">
//             <div className="bg-[#fbeedc] p-8 rounded-[24px] flex items-center justify-center shadow-lg">
//               <img src="/images/project1.png" alt="Ryde App Interface" />
//             </div>
//             <div className="text-content">
//               <h2>TaskMaster Pro – Full-Stack TypeScript Task Manager</h2>
//               <p className="text-white-50 md:text-xl">
//                 Built a scalable full-stack task management app with TypeScript,
//                 React, Tailwind CSS, and +5 advanced tools.  
//                 Features include task creation, updates, priorities, due dates,
//                 and real-time synchronization.
//               </p>

//               {/* 🔗 Project Links */}
//               <div className="flex gap-4 mt-4">
//                 <a
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 rounded-lg bg-[#FF6B6B] text-white font-medium shadow hover:bg-[#ff5252] transition"
//                 >
//                   Live Demo
//                 </a>
//                 <a
//                   href="https://github.com/MuzzaiyyanHussain/ts-fullstack"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 rounded-lg bg-[#4A90E2] text-white font-medium shadow hover:bg-[#357ABD] transition"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* === Other Projects === */}
//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={libraryRef}>
//               <div className="image-wrapper bg-[#FFEFDB]">
//                 <img
//                   src="/images/project2.png"
//                   alt="Library Management Platform"
//                 />
//               </div>
//               <h2>The Library Management Platform</h2>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <div className="image-wrapper bg-[#FFE7EB]">
//                 <img src="/images/project3.png" alt="YC Directory App" />
//               </div>
//               <h2>YC Directory - A Startup Showcase App</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppShowcase;
// export default AppShowcase;
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* === TaskMaster Pro Project === */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="bg-[#fbeedc] p-8 rounded-[24px] flex items-center justify-center shadow-lg">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>NoteForge – Full-Stack Notes App</h2>
              <p className="text-white-50 md:text-xl">
                NoteForge is a modern full-stack application built with Next.js 15, Tailwind, Shadcn UI, and Drizzle ORM. It features secure authentication with Better Auth, rich-text editing powered by Tiptap, and a clean, responsive UI with Radix components. Users can sign up, log in, and manage their notes seamlessly with a fast, serverless PostgreSQL backend on Neon.
              </p>

              {/* 🔗 Project Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://note-forge-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#FF6B6B] text-white font-medium shadow hover:bg-[#ff5252] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MuzzaiyyanHussain/note-forge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#4A90E2] text-white font-medium shadow hover:bg-[#357ABD] transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>3D Portfolio</h2>

              <div className="flex gap-4 mt-3">
                <a
                  href="muzzaiyyan.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#34D399] text-white font-medium shadow hover:bg-[#10B981] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/yourusername/library-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#4A90E2] text-white font-medium shadow hover:bg-[#357ABD] transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* === YC Directory Project (No Links) === */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project4.png" alt="YC Directory App" />
              </div>
              <h2>Taskmaster Pro:- Full stack task app</h2>
               <p className="text-white-50 md:text-xl">
                Full stack task app in TypeScript and integrated mongoDB database
              </p>
              <a
                  href="https://ts-fullstack-kappa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#34D399] text-white font-medium shadow hover:bg-[#10B981] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MuzzaiyyanHussain/ts-fullstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#4A90E2] text-white font-medium shadow hover:bg-[#357ABD] transition"
                >
                  GitHub
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
