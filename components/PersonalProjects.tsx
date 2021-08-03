import Projects from "./Projects";
import { Project } from '../types';

import logicraftImage1 from '../public/images/logicraft/logicraft-image-1.jpeg'
import logicraftImage2 from '../public/images/logicraft/logicraft-image-2.jpeg'
import logicraftImage3 from '../public/images/logicraft/logicraft-image-3.jpeg'

import automatedHighlightsBotImage1 from '../public/images/automated-highlights-bot/automated-highlights-bot-image-1.png';

import codeQuizImage1 from '../public/images/code-quiz/code-quiz-image-1.png'
import codeQuizImage2 from '../public/images/code-quiz/code-quiz-image-1.png'
import codeQuizImage3 from '../public/images/code-quiz/code-quiz-image-1.png'
import codeQuizImage4 from '../public/images/code-quiz/code-quiz-image-1.png'
import codeQuizImage5 from '../public/images/code-quiz/code-quiz-image-1.png'


const projects: Project[] = [{
  name: 'Logicraft - 1st Place Hackathon Project',
  description: ['The concept of the hackathon was to improve engagement in computer science amoungst kids. We decided to create a project which converts an electronic schematic (a logical representation of an electric circuit) into an equivalent circuit in Minecraft.', 'Minecraft has a powerful concept called Redstone which can be used to emulate electrical circuits. What better way of teaching kids the inner workings of a computer through building interactive circuits in one of the worlds most popular game!'],
  images: [logicraftImage1, logicraftImage2, logicraftImage3]

},
{
  name: 'Code Quiz',
  description: ['Created a web app with a co-student that allows teachers to create programming quizzes for their students.', 'When we were high school students, we would have appreciated a more structured way to learn programming and focus more on problem solving instead of just syntax.', 'An interesting aspect was utilising Docker to run untrusted students code in a sandbox. This project was built with Python (Flask), Vue.js, MySQL and Docker.'],
  images: [codeQuizImage1, codeQuizImage2, codeQuizImage3, codeQuizImage4, codeQuizImage5]
},
{
  name: 'Automated Game Highlights Bot',
  description: ['Automated Highlights Bot is a bot which scrapes the site twitch.tv for the most popular clips for that current day. Since Juke Highlights is built with Golang, I was able to use Golang\'s strong concurrency primitives to download the videos concurrently.', 'The program first downloads the most popular videos for that current day, it will then remove duplicates, encode and concatentate them with ffmpeg and then will automaticaly get uploaded to youtube with an automated thumbnail.', 'I wanted my brother to be able to use juke highlights as well for the days that I couldn\'t so I also created an easy to use web interface for the previous command line application.'],
  images: [automatedHighlightsBotImage1]
}];

export default function PersonalProjects() {
  return (
    <Projects projects={projects} />
  ); 
}