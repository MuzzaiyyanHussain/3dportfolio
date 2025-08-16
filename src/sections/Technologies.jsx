// import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb, SiWeb3Dotjs } from "react-icons/si";
// import { FaNodeJs, FaRust, FaHardHat } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { SiSolidity, SiTypescript, SiExpress, SiPostman } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div id="skills" className="border-b justify-items-center justify-between border-neutral-800 pb-16 md:pb-24">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-12 text-center text-3xl md:text-4xl lg:text-5xl"
//       >
//         Technologies
//       </motion.h1>

//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10 lg:px-16"
//       >
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <RiReactjsLine className="text-6xl md:text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <TbBrandNextjs className="text-6xl md:text-7xl" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <SiMongodb className="text-6xl md:text-7xl text-green-500" />
//         </motion.div>

//         <motion.div
//           variants={iconVariants(6)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <FaNodeJs className="text-6xl md:text-7xl text-green-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <SiSolidity className="text-6xl md:text-7xl text-blue-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <FaHardHat className="text-6xl md:text-7xl text-red-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <SiTypescript className="text-6xl md:text-7xl text-blue-300" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <FaRust className="text-6xl md:text-7xl text-orange-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <SiExpress className="text-6xl md:text-7xl text-white" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <RiTailwindCssFill className="text-6xl md:text-7xl text-blue-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <SiPostman className="text-6xl md:text-7xl text-orange-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <VscVscode className="text-6xl md:text-7xl text-blue-800" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-400 p-4"
//         >
//           <SiWeb3Dotjs className="text-6xl md:text-7xl text-amber-800" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;


// import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb, SiWeb3Dotjs, SiSolidity, SiTypescript, SiExpress, SiPostman } from "react-icons/si";
// import { FaNodeJs, FaRust, FaHardHat } from "react-icons/fa";
// import { VscVscode } from "react-icons/vsc";
// import { FaLinux } from "react-icons/fa";
// import { SiKubernetes } from "react-icons/si";
// import { SiAnsible } from "react-icons/si";
// import { FaJenkins } from "react-icons/fa";
// import { FaDocker } from "react-icons/fa";
// import { SiTerraform } from "react-icons/si";
// import { motion } from "framer-motion";
// import { FaGitAlt } from "react-icons/fa";
// import { FaAws } from "react-icons/fa";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const categories = {
//   "Web Development": [
//     { icon: <RiReactjsLine className="text-6xl md:text-7xl text-cyan-400" /> },
//     { icon: <TbBrandNextjs className="text-6xl md:text-7xl" /> },
//     { icon: <SiMongodb className="text-6xl md:text-7xl text-green-500" /> },
//     { icon: <FaNodeJs className="text-6xl md:text-7xl text-green-400" /> },
//     { icon: <SiTypescript className="text-6xl md:text-7xl text-blue-300" /> },
//     { icon: <FaRust className="text-6xl md:text-7xl text-orange-400" /> },
//     { icon: <SiExpress className="text-6xl md:text-7xl text-white" /> },
//     { icon: <RiTailwindCssFill className="text-6xl md:text-7xl text-blue-500" /> },
//     { icon: <SiPostman className="text-6xl md:text-7xl text-orange-500" /> },
//     { icon: <VscVscode className="text-6xl md:text-7xl text-blue-800" /> },
//   ],
//   "Web3 & Blockchain": [
//     { icon: <SiSolidity className="text-6xl md:text-7xl text-blue-400" /> },
//     { icon: <FaHardHat className="text-6xl md:text-7xl text-red-400" /> },
//     { icon: <SiWeb3Dotjs className="text-6xl md:text-7xl text-amber-800" /> },
//   ],

//   "DevOps":[
//     {icon:<FaDocker className="text-6xl md:text-7xl text-blue-400" />},
//     {icon:<FaLinux className="text-6xl md:text-7xl text-amber-800"/> },
//     {icon:<SiKubernetes className="text-6xl md:text-7xl text-amber-800"/>},
//     {icon:<FaAws className="text-6xl md:text-7xl text-amber-800"/>},
//     {icon:<SiTerraform className="text-6xl md:text-7xl text-amber-800"/>},
//     {icon:<SiAnsible className="text-6xl md:text-7xl text-amber-800"/>},
//     {icon:<FaJenkins className="text-6xl md:text-7xl text-amber-800"/>},
//     {icon:<FaGitAlt className="text-6xl md:text-7xl text-amber-800"/>}
//   ]
// };

// const Technologies = () => {
//   return (
//     <div id="skills" className="border-b justify-items-center border-neutral-800 pb-16 md:pb-24">
//       {/* Main Title */}
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-12 text-center text-3xl md:text-4xl lg:text-5xl"
//       >
//         Technologies
//       </motion.h1>

//       {/* Categories */}
//       {Object.entries(categories).map(([category, items]) => (
//         <div key={category} className="mb-12">
//           {/* Category Title */}
//           <motion.h2
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -50 }}
//             transition={{ duration: 1 }}
//             className="text-center text-2xl md:text-3xl font-semibold mb-8"
//           >
//             {category}
//           </motion.h2>

//           {/* Icons Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10 lg:px-16">
//             {items.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={iconVariants(3 + index * 0.3)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-400 p-4"
//               >
//                 {item.icon}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Technologies;

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiWeb3Dotjs, SiSolidity, SiTypescript, SiExpress, SiPostman, SiKubernetes, SiAnsible, SiTerraform } from "react-icons/si";
import { FaNodeJs, FaRust, FaHardHat, FaLinux, FaDocker, FaJenkins, FaGitAlt, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import { PiFileCppFill } from "react-icons/pi";
import { FaAnchor } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiSolana } from "react-icons/si";
import { motion } from "framer-motion";
import { FaGolang } from "react-icons/fa6";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const categories = {
  "Web Development": [
    { icon: <RiReactjsLine className="text-6xl md:text-7xl text-cyan-400" /> },
    { icon: <TbBrandNextjs className="text-6xl md:text-7xl text-black dark:text-white" /> },
    { icon: <SiMongodb className="text-6xl md:text-7xl text-green-500" /> },
    { icon: <FaNodeJs className="text-6xl md:text-7xl text-green-400" /> },
    { icon: <SiTypescript className="text-6xl md:text-7xl text-blue-500" /> },
    { icon: <SiExpress className="text-6xl md:text-7xl text-gray-300" /> },
    { icon: <RiTailwindCssFill className="text-6xl md:text-7xl text-sky-400" /> },
    { icon: <SiPostman className="text-6xl md:text-7xl text-orange-500" /> },
    { icon: <VscVscode className="text-6xl md:text-7xl text-blue-600" /> },
    { icon: <SiMysql className="text-6xl md:text-7xl text-blue-600" /> },
    { icon: <DiPostgresql className="text-6xl md:text-7xl text-blue-600" /> },


  ],
  "Web3 & Blockchain": [
    { icon: <SiSolidity className="text-6xl md:text-7xl text-gray-400" /> },
    { icon: <FaHardHat className="text-6xl md:text-7xl text-yellow-400" /> },
    { icon: <SiWeb3Dotjs className="text-6xl md:text-7xl text-purple-600" /> },
    { icon: <SiSolana className="text-6xl md:text-7xl text-purple-600" /> },
    { icon: <FaAnchor className="text-6xl md:text-7xl text-purple-600" /> },
  ],
  "DevOps & Tools": [
    { icon: <FaDocker className="text-6xl md:text-7xl text-blue-500" /> },
    { icon: <SiKubernetes className="text-6xl md:text-7xl text-sky-600" /> },
    { icon: <FaAws className="text-6xl md:text-7xl text-orange-400" /> },
    { icon: <SiTerraform className="text-6xl md:text-7xl text-indigo-600" /> },
    { icon: <SiAnsible className="text-6xl md:text-7xl text-red-500" /> },
    { icon: <FaJenkins className="text-6xl md:text-7xl text-red-600" /> },
    { icon: <FaGitAlt className="text-6xl md:text-7xl text-red-500" /> },
    { icon: <FaLinux className="text-6xl md:text-7xl text-yellow-600" /> },
  ],

  "System Programming":[
     { icon: <PiFileCppFill className="text-6xl md:text-7xl text-yellow-600" /> },
    { icon: <FaRust className="text-6xl md:text-7xl text-orange-500" /> },
    { icon: <FaGolang className="text-6xl md:text-7xl text-blue-600" /> },
  ]
};

const Technologies = () => {
  return (
    <div id="skills" className="border-b justify-items-center border-neutral-800 pb-16 md:pb-24">
      {/* Main Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 text-center text-3xl md:text-4xl lg:text-5xl font-bold"
      >
        Technologies
      </motion.h1>

      {/* Categories */}
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="mb-16">
          {/* Category Title */}
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-center text-2xl md:text-3xl font-semibold mb-10"
          >
            {category}
          </motion.h2>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-6 md:px-12 lg:px-20">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={iconVariants(3 + index * 0.3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-600 p-6 flex justify-center items-center bg-neutral-900 shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
