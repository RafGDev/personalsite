import Image from 'next/image';
import Slider from 'react-slick';


interface Props {
  images: StaticImageData[];
};

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
          <div style={{backgroundColor: 'purple'}}></div>
        </Slider>
      </div>
    );
}
