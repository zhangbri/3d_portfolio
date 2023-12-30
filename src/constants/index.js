import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    threejs,
    git,
    figma,
    wolverinesoft,
    voidtech,
    tailsofwar,
    photogallery,
    videocontrols,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Emerging Web Developer",
      icon: web,
    },
    {
      title: "3D Web Technology Explorer",
      icon: mobile,
    },
    {
      title: "Beginner Full-Stack Aspirant",
      icon: backend,
    },
    {
      title: "Interactive UI/UX Experimentor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Producer",
      company_name: "WolverineSoft",
      icon: wolverinesoft,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Coordinate studio-wide efforts to ensure on-time feature delivery through cross-department collaboration.",
        "Evaluate project scope and risk, implement new processes, and conduct meetings to promote a positive workplace.",
        "Utilize Jira, Bitbucket, Confluence, and Unity to oversee the General Gameplay team of Project Multiply.",
        "Oversee, playtest, and document the development of the turn-based tactical game Tails of War.",
      ],
    },
    {
      title: "Designer",
      company_name: "VOID Tech",
      icon: voidtech,
      iconBg: "#383E56",
      date: "Sep 2023 - Present",
      points: [
        "Work with diverse teams to improve design, development, and management skills for real-world applications.",
        "Engage in a full development cycle from brainstorming to deployment.",
        "Employ Figma for developing the Current2 website and Park Swift app.",
        "Enhance practical application skills through collaboration and technology use.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Tails of War",
      description:
        "A website dedicated to providing information on gameplay, factions, and buildings in the cat-themed, turn-based tactics game Tails of War, available on Steam.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tailsofwar,
      source_code_link: "https://github.com/zhangbri/tails_of_war",
    },
    {
      name: "Video Controls",
      description:
        "A website demonstrating JavaScript video controls using a video featuring the Michigan Marching Band.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: videocontrols,
      source_code_link: "https://github.com/zhangbri/video_controls",
    },
    {
      name: "Photo Gallery",
      description:
        "A user-interactive photo gallery website featuring categorized directories of pet, travel, and recipe images, each complete with descriptions and captions.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: photogallery,
      source_code_link: "https://github.com/zhangbri/photo_gallery",
    },
  ];
  
  export { services, technologies, experiences, projects };