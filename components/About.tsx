import styles from '../styles/About.module.scss';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import profilePicture from '../public/profile-picture.jpg';

export default function About() {
  return (
    <div className={styles.about}>
      <Box className={styles.info}>
        <div className={styles.profilePic}>
          <Image src={profilePicture} alt="Profile Picture" />
        </div>          

        <div className={styles.description}>
          <p>I am a highly motivated student currently completing a Computer Science degree at the University of Canterbury. I consider myself an eager programmer with a high level of professionalism and a commitment to producing high quality maintainable, scalable and robust technology solutions.</p>
          <br />
          <p>I am excited to work with a company that has a real passion for their product/service. I also highly value being able to contribute to the companies goals while expanding my own skills at the same time.</p>
        </div>
      </Box>
    </div>
  );
}