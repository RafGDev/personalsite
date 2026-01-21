/* eslint-disable @next/next/no-img-element */
import { Button, Container, Icon } from "@chakra-ui/react";
import styles from '../styles/Project.module.scss';
import { Project } from "../types";
import Slider from "react-slick";
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

interface Props {
  project: Project;
}

interface ArrowProps {
  onClick?: () => void;
  disabled?: boolean;
}

function PrevArrow({ onClick, disabled }: ArrowProps) {
  return (
    <Icon
      className={disabled ? styles.carouselArrowDisabled : styles.carouselArrow}
      as={AiFillLeftCircle}
      onClick={onClick}
      style={{ position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 1, cursor: 'pointer' }}
    />
  );
}

function NextArrow({ onClick, disabled }: ArrowProps) {
  return (
    <Icon
      className={disabled ? styles.carouselArrowDisabled : styles.carouselArrow}
      as={AiFillRightCircle}
      onClick={onClick}
      style={{ position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 1, cursor: 'pointer' }}
    />
  );
}

export default function ProjectInstance(props: Props) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

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

        {props.project.link && (
          <Button variant="outline" color="secondary.500" borderColor="secondary.500" onClick={() => (window.location.href = props.project.link!)}>
            Visit Project
          </Button>
        )}
        {props.project.codeLink && (
          <Button variant="outline" color="secondary.500" borderColor="secondary.500" onClick={() => (window.location.href = props.project.codeLink!)}>
            View Code
          </Button>
        )}
      </div>

      {props.project.images && props.project.images.length && (
        <div className={styles.carousel}>
          <Slider {...sliderSettings}>
            {props.project.images.map((image, index) => (
              <div key={`image-${index}`} className={styles.carouselImageContainer}>
                <img src={image.src} key={index} alt="Project" className={styles.carouselImage} loading="lazy" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </Container>
  );
}
