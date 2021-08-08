import styles from '../styles/Header.module.scss';
import { Icon } from '@chakra-ui/react';
import { AiOutlineFilePdf, AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin, AiOutlineArrowDown } from 'react-icons/ai';

interface Props {
  refToScrollTo: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Header(props: Props) {
  const goToAbout = () => {
    props.refToScrollTo.current!.scrollIntoView({behavior: 'smooth'});
  }

	return (
    <div className={styles.header}>
      <h1 className={styles.title}>Rafael Goesmann</h1>
      <h2 className={styles.subtitle}>Full Stack Developer</h2>

      <div className={styles.links}>
        <a href="/resume.pdf">
          <Icon as={AiOutlineFilePdf} />
        </a>
        <a href="mailto:rafaelgoesmann@gmail.com">
          <Icon as={AiOutlineMail} />
        </a>
        <a href="https://github.com/RafGDev">
          <Icon as={AiOutlineGithub} />
        </a>
        <a href="https://www.linkedin.com/in/rafael-goesmann-083349130">
          <Icon as={AiOutlineLinkedin} />
        </a>
      </div>

      <Icon as={AiOutlineArrowDown} className={styles.arrowDown} onClick={goToAbout}/>
    </div>
  );
}