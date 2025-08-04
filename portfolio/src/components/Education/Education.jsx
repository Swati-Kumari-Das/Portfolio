// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;



// import React from "react";
// import { education } from "../../constants";

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line - centered on mobile, left-aligned on desktop */}
//         <div className="absolute left-1/2 sm:left-8 transform -translate-x-1/2 sm:translate-x-0 w-0.5 sm:w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className="relative pl-8 sm:pl-16 mb-16"
//           >
//             {/* Timeline Circle - positioned absolutely */}
//             <div className="absolute left-0 sm:left-8 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-8 h-8 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div className="w-full p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-[1.02]">
//               {/* Flex container for image and text */}
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
//                 {/* School Logo/Image - smaller on mobile */}
//                 <div className="w-16 h-12 sm:w-24 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-contain p-1"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex-1">
//                   <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
//                     <div>
//                       <h3 className="text-lg sm:text-xl font-semibold text-white">
//                         {edu.degree}
//                       </h3>
//                       <h4 className="text-sm sm:text-md text-gray-300">
//                         {edu.school}
//                       </h4>
//                     </div>
//                     <p className="text-xs sm:text-sm text-gray-500">{edu.date}</p>
//                   </div>

//                   <p className="mt-2 text-sm sm:text-base text-purple-400 font-medium">
//                     Grade: {edu.grade}
//                   </p>
//                   <p className="mt-3 text-sm sm:text-base text-gray-400">
//                     {edu.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;



import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line - positioned with proper spacing */}
        <div className="absolute left-4 sm:left-8 w-0.5 sm:w-1 bg-white h-full top-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative pl-12 sm:pl-16 mb-16 ml-2 sm:ml-0" // Added ml-2 for mobile spacing
          >
            {/* Timeline Circle - properly aligned */}
            <div className="absolute left-0 sm:left-8 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-8 h-8 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full p-1"
              />
            </div>

            {/* Content Section with adjusted spacing */}
            <div className="w-full p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-[1.02] ml-2 sm:ml-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* School Logo/Image */}
                <div className="w-16 h-12 sm:w-24 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm sm:text-md text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500">{edu.date}</p>
                  </div>

                  <p className="mt-2 text-sm sm:text-base text-purple-400 font-medium">
                    Grade: {edu.grade}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-gray-400">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;