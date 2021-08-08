import Projects from "./Projects";
import { Project } from '../types';
import epexImage1 from '../public/images/epex/epex-image-1.png';
import epexImage2 from '../public/images/epex/epex-image-2.png'
import epexImage3 from '../public/images/epex/epex-image-3.png'
import epexImage4 from '../public/images/epex/epex-image-4.png'

import chillPassImage1 from '../public/images/chill-pass/chill-pass-image-1.png';
import chillPassImage2 from '../public/images/chill-pass/chill-pass-image-2.png';
import chillPassImage3 from '../public/images/chill-pass/chill-pass-image-3.png';
import chillPassImage4 from '../public/images/chill-pass/chill-pass-image-4.png';


const projects: Project[] = [
  {
    name: "Full Stack Engineer at Verizon Connect",
    description: [
      "As a full stack developer in the Compliance Team, I primarily develop new features and maintain an app used by around 25k unique drivers daily to automatically record their trip details under the Hours of Service Regulations.",
      "A significant feature that my team developed is called Unidentified Driving. This feature automatically generates driving history when a driver fails to log into the app. This feature automated a task that was previously tracked by 20 full-time staff of one of our customers.",
      "I generally work on backend features using microservice and event driven architectures. Technologies that I have used across Verizon Connect include .Net Core, Typescript, Node, Postgresql, Angular and many more.",
    ],
  },
  {
    name: "Part-Time Developer at EPEX LTD",
    description: [
      "As a student I was part of a team of three developers, contracted by two real estate veterans to found and develop a peer-to-peer platform. The site was launched in 2020 and enables people to buy and sell residential properties online without the need for real estate agents."
    ],
    link: "https://epex.co.nz",
    images: [epexImage1, epexImage2, epexImage3, epexImage4],
  },
  {
    name: "Part-Time Developer at Chill Studio",
    description: ["Worked on a web app for ski pass tracking/management software for a client. I was the sole developer to create a digital ski pass that automated the purchase and processing of previously paper-based ski passes.", "I also integrated the client's Shopify point of sale system into the ski pass software so passes were automatically added after a sale was made through Shopify.", "Technologies used include Typescript, Node, Vue.js, React Native, Postgresql and AWS."],
    images: [chillPassImage1, chillPassImage2, chillPassImage3, chillPassImage4],
  },
];

export default function WorkExperience() {
  return (
    <Projects projects={projects} />
  ); 
}