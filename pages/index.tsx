import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import React from 'react';
import WorkExperience from '../components/WorkExperience';
import PersonalProjects from '../components/PersonalProjects';

export default function Home() {
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div className={styles.container}>
      <Header refToScrollTo={aboutRef}/>

      <section ref={aboutRef} className={styles.section}>
        <h3 className={styles.sectionTitle}>About Me</h3>
        <About />
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Skills</h3>
        <Skills />
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Work Experience</h3>
        <WorkExperience />
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Personal Projects</h3>
        <PersonalProjects />
      </section>
    </div>
  )
}