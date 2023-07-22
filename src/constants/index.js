import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
    uni,
    iris,
    ltuc,
    Gerchint,
    BookHeaven,
    EliteSands
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
      title: "Frontend Developer",
      icon: web,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "Balqa Applied Uiversity",
      icon: uni,
      iconBg: "#383E56",
      date: "OCT 20 19- FEB 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Intern",
      company_name: "IRIS Technology",
      icon:iris,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Javascript Bootcamp",
      company_name: "Luminus Technical University College",
      icon: ltuc,
      iconBg: "#000",
      date: "APRIL 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to  other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Elite Sands",
      description:
        "During My Academic journey at Code fellows, we had the opportunity to work on multiple projects , Elite Sands was the first one and the most exciting because it was the first team project.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "Express js",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image:EliteSands,
      source_code_link: "https://github.com/orgs/prep-course-project/repositories",
    },
    {
      name: "GERICHT",
      description:
        "The GERICHT website is a visually stunning and user-friendly platform that echoes the elegance and charm of the restaurant itself. With a modern and intuitive design, visitors are immediately drawn into the culinary world of GERICHT. The website's layout is thoughtfully organized, making it easy for users to navigate through various sections seamlessly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: Gerchint,
      source_code_link: "https://github.com/Armada6199/resturant",
    },
    {
      name: "Book Heaven",
      description:
        "BookHeaven is an innovative online platform designed for book lovers and avid readers alike. Our mission is to connect like-minded individuals, recommending thought-provoking reads, and facilitating book trades to foster a vibrant and engaged reading community. Whether you're seeking your next literary adventure or hoping to share your favorite books with others, BookHeaven is the ultimate destination to immerse yourself in the world of books.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Spring",
          color: "pink-text-gradient",
        },
      ],
      image: BookHeaven,
      source_code_link: "https://github.com/Armada6199/Book-heaven",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };