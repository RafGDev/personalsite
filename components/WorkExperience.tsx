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
import chillPassImage5 from '../public/images/chill-pass/chill-pass-image-4.png';


const projects: Project[] = [{
    name: 'Full Stack Engineer at Verizon Connect',
    description: ['Working as a full stack developer in the Compliance team. Primarily developer new features/maintaining an app used by Truck drivers to automatically record their hours of service mandated by the ELD mandate.', 'I am using various different technologies including .Net Core, Typescript, Node, Postgresql and Angular.', 'An interesting project that my team works on is called the Unidentified Driving Service which automatically detects driving done when a driver is not logged into the app.'],
  },
  {
    name: 'Part-Time Developer at EPEX LTD',
    description: ['Worked part-time to create a peer-to-peer platform for people to buy and sell houses completely online without real estate agents.',  'The project was developed in Typescript Node, React + Postgresql.'],
    link: 'https://epex.co.nz',
    images: [epexImage1, epexImage2, epexImage3, epexImage4]
  },
  {
    name: 'Part-Time Developer at Chill Studio',
    description: ['Worked part-time on a web app/native app for ski pass tracking/management software for a client. ', 'Technologies used include Typescript, Node, Vue.js, React Native and Postgresql. This service automated a task that a customer had 20 people employed full-time to manage.'],
    images: [chillPassImage1, chillPassImage2, chillPassImage3, chillPassImage4, chillPassImage5],
  }
];

export default function WorkExperience() {
  return (
    <Projects projects={projects} />
  ); 
}