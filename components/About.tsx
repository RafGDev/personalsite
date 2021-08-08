/* eslint-disable @next/next/no-img-element */
import styles from '../styles/About.module.scss';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import profilePicture from '../public/profile-picture.jpg';

export default function About() {
  return (
    <div className={styles.about}>
      <Box className={styles.info}>
        <div className={styles.profilePic}>
          <img src={profilePicture.src} alt="Profile Picture" />
        </div>          

        <div className={styles.description}>
          <p>I am a software engineer based in Christchurch, New Zealand currently working as a Full Stack Developer for Verizon Connect.</p>
          <br />
          <p>While I am experienced across both frontend and backend development, my passion is creating high performance backend systems using cloud tools and microservice architectures with tools like C#, Typescript, Postgres and AWS.</p>
          <br />
        </div>
      </Box>
    </div>
  );
}