// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import cdac from './assets/company_logo/CDAC.jpg';
import pratanik from './assets/company_logo/pratanik_infotech2.png';


// Education Section Logo's
import jnv from './assets/education/jnv.png';
import mca from './assets/education/mca_logo.png';
import sr from './assets/education/sr_clg.jpg';

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';

import aiprep from './assets/work_logo/ai-prep.png'
import taskFlow from './assets/work_logo/taskFlow.png'
import wanderlust  from './assets/work_logo/wanderlust.png'
import threeD from './assets/work_logo/threeD.png'
import url from './assets/work_logo/url.png'
import tm from './assets/work_logo/TaskManager.png'
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    //  { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
       { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
   
      {
      id: 0,
      img: pratanik,
      role: "Fullstack Developer Intern",
      company:"Pratinik Infotech",
      date: "June - July 2025",
      desc: "Built TaskFlow a full-stack Task Management & Project Collaboration Tool to improve team collaboration and task tracking. Designed user-friendly interfaces and developed backend logic for task assignments, status tracking, and real-time updates.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "MongoDB",
        "Node.js",
        "Socket.IO",
      ],
    },
    {
      id: 1,
      img: cdac,
      role: "Project Intern",
      company: "CDAC, Noida",
      date: "Sep - Oct 2024",
      desc: "Worked on phishing detection techniques, simulated attacks using Kali Linux, and proposed security measures using IOA and IOC analysis.",
      skills: [
         "Cybersecurity",
        "Phishing Simulation",
        "Kali Linux",
        "Network Security",
        "IOA & IOC Analysis"
      ],
    },
 
    // {
    //   id: 2,
    //   img: pratanik,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: mca,
      school: "Indira Gandhi Delhi Technical University For Women",
      date: "Aug 2024 - July 2026",
      grade: "8.19 CGPA",
      desc: "I am doing my Master's in Computer Applications (MCA) from IGDTUW, where I built a strong foundation in programming, data structures, algorithms, OOP, DBMS, web development, and software engineering. I actively engaged in workshops and technical events that helped sharpen my skills and contributed to my professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: sr,
      school: "SR Government College For Women Amritsar",
      date: "Aug 2021 - July 2024",
      grade: "7.49 CGPA",
      desc: "I completed my Bachelor's of Computer Application (BCA) from SR Government College for Women, Amritsar. During my time there, I built a solid foundation in programming, algorithms, and web development, and worked on academic projects that connected theory with real-world applications.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: jnv,
      school: "Jawahar Navodaya Vidyalaya Awan Amritsar",
      date: "Apr 2020 - March 2021",
      grade: "93%",
      desc: "I completed my class 12 education from Jawahar Navodaya Vidyalaya Awan Amritsar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: jnv,
      school: "Jawahar Navodaya Vidyalaya Awan Amritsar",
      date: "Apr 2018 - March 2019",
      grade: "90%",
      desc: "I completed my class 10 education from Jawahar Navodaya Vidyalaya Awan Amritsar under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "TaskFlow-Task Management & Project Collaboration Tool",
      description:
        "A full-stack Task Management and Project Collaboration Tool designed for teams and admins to efficiently manage, assign, track, and complete tasks.",
      image: taskFlow,
      tags: ["React.js", "Tailwind CSS","Socket.IO", "JavaScript","Node.js","Express.js", "MongoDB "],
      github: "https://github.com/Swati-Kumari-Das/TaskFlow",
      webapp: "https://taskflow-nu-taupe.vercel.app",
    },
    {
      id: 1,
      title: "AI-powered Interview Preparation Website",
      description:
        "Built an AI-powered Interview Preparation App using the MERN stack and Gemini API for smart question-answer generation.",
      image: aiprep,
      tags: ["React.js", "Tailwind CSS", "JavaScript","Node.js","Express.js", "MongoDB ","Gemini API"],
      github: "https://github.com/Swati-Kumari-Das/InterViewPrep-AI",
      webapp: "https://interview-prep-ai-tau.vercel.app/",
    },

     {
      id: 2,
      title: "WanderLust-Travel Accommodation Website",
      description:
        "A full-stack web application inspired by Airbnb, where users can list their own accommodations or browse stays offered by others. The platform supports secure authentication, rich image uploads, and a review system for better trust and experience.",
      image: wanderlust,
      tags: ["HTML", "CSS", "Node.js","Express.js", "MongoDB ","RESTful APIs"],
      github: "https://github.com/Swati-Kumari-Das/TravelAccomodationPlatform",
      webapp: "https://wanderlust-j4gh.onrender.com/listings",
    },

    {
      id: 3,
      title: "3D Gaming Landing Page",
      description:
        "A futuristic 3D gaming website. This site features smooth scroll-based animations, interactive 3D elements, and modern design principles to create an engaging user experience.",
      image: threeD,
     
      tags: ["React", "Tailwind CSS", "Motion","Spline"],
      github: "https://github.com/Swati-Kumari-Das/GamingWebsite",
      webapp: "https://gamingui.netlify.app/",
    },
     {
      id: 4,
      title: "URL Shortener",
      description:
        "A full-stack URL shortener web app built using the MERN stack.",
      image: url,
     
      tags: ["React", "Tailwind CSS","Redux" ,"Node.js","Express.js","MongoDB"],
      github: "https://github.com/Swati-Kumari-Das/Url-Shortner",
      webapp: "https://github.com/Swati-Kumari-Das/Url-Shortner",
    },

     {
      id: 5,
      title: "Task Manager ",
      description:"A simple full-stack task management application built with React (frontend) and Express (backend).Users can add, view, update status, and delete tasks. Now with basic offline support via localStorage caching .",
      image: tm,
     
      tags: ["React", "Tailwind CSS" ,"Node.js","Express.js","MongoDB"],
      github: "https://github.com/Swati-Kumari-Das/TaskManager",
      webapp: "https://github.com/Swati-Kumari-Das/TaskManager",
    },
   
   
    
   

  ];  