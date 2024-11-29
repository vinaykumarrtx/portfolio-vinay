import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ccet
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiVuedotjs,
  SiMicrosoftazure,
  SiPowerbi,
  SiMicrosoftexcel,
  SiLaravel
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "";
export const repoLink = "https://github.com/vinaykumarrtx";

export const callToAction = "https://www.linkedin.com/in/vinay-kumar-511914224/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  
 
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: ccet,
    title: "Chandigarh College of Engineering and Technology",
    degree: "Bachelor of Engineering",
    duration: "November 2020 - June 2024",
    content1: "Major: Mechanical Engineering",
    content2: "Minor: Information Technology",
  },

];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: cluboard,
    event: "Ideathon | Apartim 2023 | CCET",
    position: "Winner",
    content1: "Designed an innovative door lock mechanism using Arduino, integrating smart IoT solutions.",
    content2: "Won 1st position among a competitive field of participants.",
    content3: "Recognized for creativity and technical execution.",
   
},
{
    id: "a-2",
    icon: cash_flow,
    event: "Technical Competition | ZEITGEIST Fest | IIT ROPAR",
    position: "2nd Runner Up in the Competition",
    content1: "Achieved 2nd Runner Up position among Top 12 winners out of 20k+ registrations.",
    content2: "ZEITGEIST is one of the largest technical fests in India.",
    content3: "Showcased exceptional problem-solving and innovation skills.",
   
},
{
    id: "a-3",
    icon: cluboard,
    event: "Thinkthon | Apartim 2023 | CCET",
    position: "1st Position",
    content1: "Presented ideas through structured paper representation.",
    content2: "Secured 1st position for demonstrating innovative thinking and feasibility.",
    content3: "Commended for clarity and presentation skills.",
},
{
  "id": "a-4",
  "icon": dennisivy,  // Add the appropriate icon for IIT Delhi
  "event": "Cultural Fest | Rendezvous | IIT Delhi",
  "position": "2nd Prize Winner",
  "content1": "Secured 2nd position in a prestigious event at IIT Delhi's annual cultural fest.",
  "content2": "One of India's largest and most celebrated college fests with thousands of participants.",
  "content3": "",
}


];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      // {
      //   id: "pl-1",
      //   icon: DiRuby,
      //   name: "Ruby",
      // },
      // {
      //   id: "pl-2",
      //   icon: SiPython,
      //   name: "Python",
      // },
      // {
      //   id: "pl-3",
      //   icon: SiCplusplus,
      //   name: "C++",
      // },
      // {
      //   id: "pl-4",
      //   icon: FaGolang,
      //   name: "Go",
      // },
      // {
      //   id: "pl-5",
      //   icon: FaRust,
      //   name: "Rust",
      // },
      // {
      //   id: "pl-6",
      //   icon: DiJava,
      //   name: "Java",
      // },
      // {
      //   id: "pl-7",
      //   icon: SiC,
      //   name: "C",
      // },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      // {
      //   id: "pl-11",
      //   icon: SiSolidity,
      //   name: "Solidity",
      // }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      // {
      //   id: "f-1",
      //   icon: SiDjango,
      //   name: "Django",
      // },
      // {
      //   id: "f-2",
      //   icon: SiRubyonrails,
      //   name: "Ruby on Rails",
      // },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiVuedotjs,
        name: "Vue.js",
      },
      {
        id: "f-8",
        icon: SiLaravel,
        name: "Laravel",
      },
    ],
  },
  {
    title: "Tools",
    items: [
     
      {
        id: "t-2",
        icon: SiPowerbi,
        name: "POWERBI",
      },  {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiMicrosoftexcel,
        name: "MySQL",
      },
    
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
    
    
      
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Infoway IT Solutions",
    logo: cdc,
    link: "https://www.infowayit.com",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "Jan 2024 - Aug 2024",
        content: [
          {
            text: "Developed and optimized ERP solutions using Vue.js, Laravel, and SQL, focusing on enhancing system efficiency and user experience.",
            link: "",
          },
          {
            text: "Worked on the complete SDLC of multiple ERP modules, including creating database structures, developing front-end interfaces, and handling integrations.",
            link: "",
          }
        ],
      },
    ],
  },
 
  {
    organisation: "Personifwy",
    logo: nitk,
    link: "https://www.personify.com",
    positions: [
      {
        title: "Data Analyst Intern",
        duration: "Oct 2022 - Nov 2022",
        content: [
          {
            text: "Worked as a Data Analyst Intern, where I assisted in analyzing customer data and generating insights to improve customer satisfaction.",
            link: "",
          },
          {
            text: "Utilized SQL and Excel for data cleaning, transformation, and analysis, contributing to the optimization of customer engagement strategies.",
            link: "",
          },
          {
            text: "Collaborated with the team to create interactive reports and visualizations, helping stakeholders make data-driven decisions.",
            link: "",
          }
        ],
      },
    ],
  }
,  

];


// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Gym Management Application",
   
    image: comicify_ai,
    content:
      "A comprehensive gym management application that includes modules like Dashboard, Members, Billing, Membership, Attendance, Programs, Staff, and more, for managing gym operations efficiently.",
    stack: [
      {
        id: "icon-1",
         icon: SiVuedotjs,
        name: "Vue.JS"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiLaravel,
        name: "Laravel"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Chart"
      },
      {
        id: "icon-5",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-6",
        icon: SiJquery,
        name: "jQuery"
      },
    ],
  },
  {
    id: "project-2",
    title: "Santan Dharma ERP",
  
    image: lightspeed,
    content:
      "A comprehensive ERP system with modules like Inventory, Items, Vendor, Purchases, Salary, Site Management, and more, designed for a religious organization.",
    stack: [
      {
        id: "icon-1",
         icon: SiVuedotjs,
        name: "Vue.JS"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiLaravel,
        name: "Laravel"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Chart"
      },
      {
        id: "icon-5",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-6",
        icon: SiJquery,
        name: "jQuery"
      },

    ],
  },
  {
    id: "project-3",
    title: "Orane International ERP",
   
    image: polkadot,
    content:
      "An ERP solution for managing various aspects of student management, inventory, and receipts, designed for Orane International.",
    stack: [
      {
        id: "icon-1",
         icon: SiVuedotjs,
        name: "Vue.JS"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiLaravel,
        name: "Laravel"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Chart"
      },
      {
        id: "icon-5",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-6",
        icon: SiJquery,
        name: "jQuery"
      },
    ],
  },
  {
    id: "project-4",
    title: "Bank Management System",

    image: placeicon,
    content:
      "A comprehensive system for managing a bank's operations, including customer accounts, transactions, loans, and reports. It helps automate the process of banking services, improving efficiency and security.",
    stack: [
      {
        id: "icon-1",
        icon: SiVuedotjs,
        name: "Vue.JS"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiLaravel,
        name: "Laravel"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Chart"
      },
      {
        id: "icon-5",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-6",
        icon: SiJquery,
        name: "jQuery"
      },
    
    ],
  },
  {
    id: "project-5",
    title: "Customer Satisfaction Power BI Dashboard",
    github: "",
    // link: "http://recruitment.nitk.ac.in/",
    image: recruitment,
    content:
      "A Power BI dashboard that analyzes customer satisfaction data, helping businesses understand satisfaction trends and identify improvement areas.",
    stack: [
      {
        id: "icon-1",
        icon: SiPowerbi,
        name: "Power BI"
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "MYSQL"
      },
      {
        id: "icon-5",
        icon: SiMicrosoftexcel,
        name: "Excel"
      },
   
    ],
  },
  {
    id: "project-6",
    title: "Sales Performance Power BI Dashboard",
    github: "",
    // link: "https://www.ccet.ac.in/",
    image: greentrust,
    content:
      "A Power BI dashboard to track and analyze sales data, helping businesses evaluate performance, identify trends, and optimize sales strategies.",
    stack: [
      {
        id: "icon-1",
        icon: SiPowerbi,
        name: "Power BI"
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "MYSQL"
      },
      {
        id: "icon-5",
        icon: SiMicrosoftexcel,
        name: "Excel"
      },
   
    
    ],
  },

];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/vinay-kumar-511914224/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/vinaykumarrtx",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:vinaykumarparth99@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiOutlineTwitter,
  //   link: "https://www.twitter.com/mittalparth_",
  // },
  // {
  //   id: "social-media-5",
  //   icon: AiFillInstagram,
  //   link: "https://www.instagram.com/mittalparth_",
  // },
];

// Your professional summary
export const aboutMe = {
    name: "Vinay Kumar",
    githubUsername: 'vinay kumar',
    tagLine: "Full Stack Developer Infoway IT Solutions| ex-Data Analyst Intern @Personifwy | CCET'24",
    intro: "Software Developer from India who is either busy improving his craft or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];