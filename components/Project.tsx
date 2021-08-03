import Image from 'next/image'
import { Button, Container, Icon } from "@chakra-ui/react";
import styles from '../styles/Project.module.scss';
import { Project } from "../types";
import dynamic from "next/dynamic";
import { useState } from 'react';
import { arrowsPlugin } from "@brainhubeu/react-carousel";
import { AiFillLeftCircle, AiFillRightCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });

interface Props {
  project: Project;
}

export default function ProjectInstance(props: Props) {
  const [ carouselIndex, setCarouselIndex ] = useState(0);

  return (
    <Container className={styles.project} maxW="container.xl">
      <div className={styles.info}>
        <h4 className={styles.name}>{props.project.name}</h4>
        <div className={styles.description}>
          {props.project.description.map((d) => (
            <>
              <p key={d}>{d}</p>
              <br />
            </>
          ))}
        </div>

        {props.project.link && <Button variant="outline" color="secondary.500" borderColor="secondary.500" onClick={() => (window.location.href = props.project.link!)}>Visit Project</Button>}
        {props.project.codeLink && <Button onClick={() => (window.location.href = props.project.codeLink!)}>View Code</Button>}
      </div>

      {props.project.images && props.project.images.length && (
        <>
          <Carousel
            plugins={[
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <Icon className={styles.carouselArrow} as={AiFillLeftCircle} />,
                  arrowRight: <Icon className={styles.carouselArrow} as={AiFillRightCircle} />,
                  addArrowClickHandler: true
                },
              },
            ]}
            value={carouselIndex}
            onChange={setCarouselIndex}
            className={styles.carousel}
          >
            {props.project.images.map((image, index) => (
              <div key={`image-${index}`} className={styles.carouselImageContainer}>
                <Image priority={index === 0} src={image} key={index} alt="Project" className={styles.carouselImage} />
              </div>
            ))}
          </Carousel>
        </>
      )}
    </Container>
  );
}