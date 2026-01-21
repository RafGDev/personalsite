import Projects from "./Projects";
import { Project } from "../types";

import logicraftImage1 from "../public/images/logicraft/logicraft-image-1.jpeg";
import logicraftImage2 from "../public/images/logicraft/logicraft-image-2.jpeg";
import logicraftImage3 from "../public/images/logicraft/logicraft-image-3.jpeg";

import automatedHighlightsBotImage1 from "../public/images/automated-highlights-bot/automated-highlights-bot-image-1.png";

import codeQuizImage1 from "../public/images/code-quiz/code-quiz-image-1.png";
import codeQuizImage2 from "../public/images/code-quiz/code-quiz-image-1.png";
import codeQuizImage3 from "../public/images/code-quiz/code-quiz-image-1.png";
import codeQuizImage4 from "../public/images/code-quiz/code-quiz-image-1.png";
import codeQuizImage5 from "../public/images/code-quiz/code-quiz-image-1.png";

import amioImage1 from "../public/images/amio/amio-image-1.png";
import amioImage2 from "../public/images/amio/amio-image-2.png";
import amioImage3 from "../public/images/amio/amio-image-3.png";

const projects: Project[] = [
  {
    name: "Roamio",
    description: [
      "Roamio is a startup that I helped get the initial infrastructure set up for. This includes hosting, continious deployment with AWS, authentication via firebase and initial UI development.",
    ],
    images: [amioImage1, amioImage2, amioImage3],
  },
  {
    name: "Logicraft - 1st Place Hackathon Project at UC Computer Society",
    description: [
      "The goal of the hackathon was to improve engagement in computer science amongst children. We decided to create a project which converts an electronic schematic (a logical representation of an electric circuit) into an equivalent circuit in Minecraft.",
      "Minecraft has a powerful concept called Redstone which can be used to emulate electrical circuitry. What better way of teaching kids the inner workings of a computer through building interactive circuits in one of the worlds most popular game!",
    ],
    images: [logicraftImage1, logicraftImage2, logicraftImage3],
    codeLink: "https://github.com/logic-craft/LogiCraft",
  },
  {
    name: "Code Quiz",
    description: [
      "Created a web app with a co-student that allows teachers to create programming quizzes for their students.",
      "When I was a high school student, I would have appreciated a more structured way to learn how to program by focusing more on problem solving instead of just learning syntax.",
      "An interesting aspect was utilising Docker to run untrusted code in a sandbox. This project was built with Python (Flask), Vue.js, MySQL and Docker.",
    ],
    images: [
      codeQuizImage1,
      codeQuizImage2,
      codeQuizImage3,
      codeQuizImage4,
      codeQuizImage5,
    ],
    codeLink: "https://github.com/marvin-raf/codequiz",
  },
  {
    name: "Automated Game Highlights Bot",
    description: [
      "I created a bot which automatically creates a youtube video from the top Twitch.tv clips for a specific game every day.",
      "I wanted my brother to be able to use the bot as well for the days that I couldn't so I also created an easy to use web interface.",
      "Since the bot is built with Golang, I was able to use Golang's strong concurrency primitives to download the videos concurrently.",
    ],
    images: [automatedHighlightsBotImage1],
    codeLink: "https://github.com/RafGDev/juke-highlights-bot",
  },
];

export default function PersonalProjects() {
  return <Projects projects={projects} />;
}
