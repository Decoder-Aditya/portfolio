import project1 from "../assets/projects/pr12.png";

import kiitbot from "../assets/projects/bot.jpg"



export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Currently pursuing my fourth year of B.Tech, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_TEXT = `I am  a dedicated Computer Science Engineering student, on a quest to excel as a versatile software engineer adept in both front-end and full-stack development. Driven by an insatiable curiosity for cutting-edge technologies, I thrive on sculpting elegant solutions to real-world challenges. With a formidable arsenal of problem-solving skills and an unwavering attention to detail, I am committed to continuous growth and innovation. Currently navigating my fourth year of B.Tech in Computer Science and Engineering, I find profound joy in programming, identifying myself as a Full Stack Developer with an ardent dedication to mastering the intricacies of web development.`;



export const PROJECTS = [
  {
    title: "KIIT Bot",
    image: kiitbot,
    description:
      "KIIT Bot is a Python and machine learning-based Telegram bot created to assist college students by providing daily class schedules, job opportunities in specified categories, and predicting placement outcomes and expected salaries.",
    technologies: ["Python"],
  },


  {
    title: "Edu-AI",
    image: project1,
    description:
      "Edu AI is a web development project that enables users to post and reply to queries with document uploads, featuring an AI agent that monitors replies to ensure they adhere to guidelines. It includes user authentication and is designed to facilitate a supportive, regulated educational environment.",
    technologies: ["EJS", "CSS", "Node", "Express", "MongoDB", "Javascript"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7667761832",
  email: "ravikumar16208062@gmail.com",
};
