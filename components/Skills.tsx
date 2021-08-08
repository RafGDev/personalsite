import { SimpleGrid, Container, Tooltip } from "@chakra-ui/react";
import styles from '../styles/Skills.module.scss';

const skills = [
  {
    title: "Backend",
    data: [
      {
        name: "Node",
        icon: "devicon-nodejs-plain colored",
      },
      {
        name: "C#",
        icon: "devicon-csharp-plain colored",
      },
      {
        name: "Java",
        icon: "devicon-java-plain colored",
      },
      {
        name: "Python",
        icon: "devicon-python-plain-wordmark colored",
      },
      {
        name: "Postgresql",
        icon: "devicon-postgresql-plain colored",
      },
      {
        name: "Golang",
        icon: "devicon-go-plain colored",
      },
      {
        name: "Redis",
        icon: "devicon-redis-plain colored",
      },
      {
        name: "C++",
        icon: "devicon-cplusplus-plain colored",
      },
      {
        name: "C",
        icon: "devicon-c-plain colored",
      },
    ],
  },
  {
    title: "Frontend",
    data: [
      {
        name: "Javascript",
        icon: "devicon-javascript-plain colored",
      },
      {
        name: "Typescript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "React",
        icon: "devicon-react-original-wordmark colored",
      },
      {
        name: "Angular",
        icon: "devicon-angularjs-plain colored",
      },
      {
        name: "Vue",
        icon: "devicon-vuejs-plain colored",
      },
      {
        name: "HTML 5",
        icon: "devicon-html5-plain colored",
      },
      {
        name: "CSS 3",
        icon: "devicon-css3-plain colored",
      },
      {
        name: "Sass",
        icon: "devicon-sass-original colored",
      },
      {
        name: "Jest",
        icon: "devicon-jest-plain colored",
      },
    ],
  },
  {
    title: "Build/Other",
    data: [
      {
        name: "Amazon Web Services",
        icon: "devicon-amazonwebservices-original colored",
      },
      {
        name: "Docker",
        icon: "devicon-docker-plain-wordmark colored",
      },
      {
        name: "Bash",
        icon: "devicon-bash-plain colored",
      },
      {
        name: "Linux",
        icon: "devicon-linux-plain colored",
      },
      {
        name: "Nginx",
        icon: "devicon-nginx-original colored",
      },
      {
        name: "Git",
        icon: "devicon-git-plain colored",
      },
    ],
  },
];

export default function Skills() {
  return (
    <Container maxW="container.lg" className={styles.skills}>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} className={styles.skillsGrid}>
        {skills.map((skillType) => (
          <div key={skillType.title} className={styles.skillType}>
            <b>{skillType.title}</b>

            <SimpleGrid columns={3} className={styles.skill}>
              {skillType.data.map((skill) => (
                <Tooltip key={skill.icon} label={skill.name} aria-label={skill.name}>
                  <div key={skill.icon}>
                    <i className={`${styles.skill} ${skill.icon}`} />
                  </div>
                </Tooltip>
              ))}
            </SimpleGrid>
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}
