import { Container } from '@chakra-ui/react';
import ProjectInstance from "./Project";
import { Project } from '../types';

interface Props {
  projects: Project[];
}

export default function Projects(props: Props) {
  return (
    <div>
      {props.projects.map((project, index) => 
      (
          <ProjectInstance key={project.name} project={project} />
      ))}
    </div>
  );
}