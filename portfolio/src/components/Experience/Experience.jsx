// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;





// import React from "react";
// import { experiences } from "../../constants";

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[5vw] sm:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-12 sm:mb-16">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
//         <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold max-w-3xl mx-auto">
//           A collection of my work experience and the roles I have taken in various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line - only visible on medium+ screens */}
//         <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         <div className="space-y-12 sm:space-y-16">
//           {experiences.map((experience, index) => (
//             <div
//               key={experience.id}
//               className={`relative flex ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
//             >
//               {/* Timeline Circle - centered on mobile, positioned on desktop */}
//               <div className="absolute sm:left-1/2 left-0 transform sm:-translate-x-1/2 -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10">
//                 <img
//                   src={experience.img}
//                   alt={experience.company}
//                   className="w-full h-full object-cover rounded-full p-1"
//                 />
//               </div>

//               {/* Content Section */}
//               <div
//                 className={`w-full sm:w-[calc(50%-40px)] ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}`}
//               >
//                 <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.4)]">
//                   {/* Flex container for image and text */}
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     {/* Company Logo/Image - hidden on mobile since we have the timeline dot */}
//                     <div className="hidden sm:block w-16 h-16 bg-white rounded-md overflow-hidden">
//                       <img
//                         src={experience.img}
//                         alt={experience.company}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Role, Company Name, and Date */}
//                     <div className="flex-1">
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//                         <div>
//                           <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
//                           <h4 className="text-gray-300">{experience.company}</h4>
//                         </div>
//                         <p className="text-sm text-gray-500">{experience.date}</p>
//                       </div>

//                       <p className="mt-4 text-gray-400">{experience.desc}</p>
                      
//                       <div className="mt-4">
//                         <h5 className="font-medium text-white mb-2">Skills:</h5>
//                         <div className="flex flex-wrap gap-2">
//                           {experience.skills.map((skill, skillIndex) => (
//                             <span
//                               key={skillIndex}
//                               className="bg-[#8245ec]/80 text-gray-200 px-3 py-1 text-xs rounded-full border border-gray-600"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import React from "react";
// import { experiences } from "../../constants";

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[5vw] sm:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-12 sm:mb-16">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
//         <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold max-w-3xl mx-auto">
//           A collection of my work experience and the roles I have taken in various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line - only visible on medium+ screens */}
//         <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         <div className="space-y-12 sm:space-y-16">
//           {experiences.map((experience, index) => (
//             <div
//               key={experience.id}
//               className={`relative flex ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
//             >
//               {/* Timeline Circle - centered on mobile, positioned on desktop */}
//               <div className="absolute sm:left-1/2 left-0 transform sm:-translate-x-1/2 -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10">
//                 <img
//                   src={experience.img}
//                   alt={experience.company}
//                   className="w-full h-full object-cover rounded-full p-1"
//                 />
//               </div>

//               {/* Content Section */}
//               <div
//                 className={`w-full sm:w-[calc(50%-40px)] ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}`}
//               >
//                 <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.4)]">
//                   {/* Flex container for image and text */}
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     {/* Company Logo/Image - hidden on mobile since we have the timeline dot */}
//                     <div className="hidden sm:block w-16 h-16 bg-white rounded-md overflow-hidden">
//                       <img
//                         src={experience.img}
//                         alt={experience.company}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Role, Company Name, and Date */}
//                     <div className="flex-1">
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//                         <div>
//                           <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
//                           <h4 className="text-gray-300">{experience.company}</h4>
//                         </div>
//                         <p className="text-sm text-gray-500">{experience.date}</p>
//                       </div>

//                       <p className="mt-4 text-gray-400 text-sm sm:text-base">{experience.desc}</p>
                      
//                       <div className="mt-4">
//                         <h5 className="font-medium text-white mb-2">Skills:</h5>
//                         <div className="flex flex-wrap gap-2">
//                           {experience.skills.map((skill, skillIndex) => (
//                             <span
//                               key={skillIndex}
//                               // className="bg-[#8245ec]/80 text-gray-200 px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-600
//                               // transition-all duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(130,69,236,0.7)] hover:border-white"

//                               className="bg-[#8245ec]/80 text-gray-200 px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-600
//                           transition-all duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(130,69,236,0.7)] hover:border-white
//                           active:scale-105 active:shadow-[0_0_10px_2px_rgba(130,69,236,0.7)] active:border-white
//                           touch-manipulation"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] sm:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold max-w-3xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line - always visible but positioned differently */}
        <div className="absolute left-4 sm:left-1/2 w-0.5 sm:w-1 bg-white h-full transform sm:-translate-x-1/2"></div>

        {/* Experience Entries */}
        <div className="space-y-12 sm:space-y-16">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
            >
              {/* Timeline Circle - always visible on left side */}
              <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-8 h-8 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full p-1"
                />
              </div>

              {/* Content Section */}
              <div
                className={`w-full sm:w-[calc(50%-40px)] ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}`}
              >
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.4)]">
                  {/* Flex container for image and text */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Company Logo/Image - hidden on mobile since we have the timeline dot */}
                    <div className="hidden sm:block w-16 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Role, Company Name, and Date */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                          <h4 className="text-gray-300">{experience.company}</h4>
                        </div>
                        <p className="text-sm text-gray-500">{experience.date}</p>
                      </div>

                      <p className="mt-4 text-gray-400 text-sm sm:text-base">{experience.desc}</p>
                      
                      <div className="mt-4">
                        <h5 className="font-medium text-white mb-2">Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-[#8245ec]/80 text-gray-200 px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-600
                          transition-all duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(130,69,236,0.7)] hover:border-white
                          active:scale-105 active:shadow-[0_0_10px_2px_rgba(130,69,236,0.7)] active:border-white
                          touch-manipulation"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;