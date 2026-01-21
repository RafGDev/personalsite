import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';


interface Props {
  images: StaticImageData[];
}

export default function App(props: Props) {
     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div style={{border: '1px solid black'}}>
        <Slider {...settings}>
          {props.images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
}
