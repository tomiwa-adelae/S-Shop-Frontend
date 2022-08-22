import { useState } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
   const { onClick } = props;
   return (
      <div className="icons-right icons" onClick={onClick}>
         <i className="fas fa-angle-right"></i>
      </div>
   );
}

function SamplePrevArrow(props) {
   const { onClick } = props;
   return (
      <div className="icons-left icons" onClick={onClick}>
         <i className="fas fa-angle-left"></i>
      </div>
   );
}

var settings = {
   infinite: true,
   speed: 1000,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,
};

const ProductCarousel = () => {
   const [images] = useState([
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/630338/1.jpg?9822',
         alt: 'Prophetic Encounter With Pastor Adeboye hsgsgs shststeydfnsd sjhshsyshfcdf shsywjfdksd sdhsdjgdshm asdjhajhdjsjsdysdbsd sd sdjhsdhsd',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/195798/1.jpg?9124',
         alt: 'Prophetic Encounter With Pastor Adeboye',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852',
         alt: 'Prophetic Encounter With Pastor Adeboye',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/999895/1.jpg?3932',
         alt: 'Prophetic Encounter With Pastor Adeboye',
      },
   ]);
   return (
      <div className="product-carousel">
         <Slider {...settings}>
            {images.map((image, index) => (
               <div key={index} className="box">
                  <div className="content">
                     <div className="title">
                        <h4>
                           {image.alt.length >= 30
                              ? `${image.alt.substring(0, 31)}...`
                              : image.alt}
                        </h4>
                     </div>
                     <div className="img">
                        <img src={image.src} alt={image.alt} />
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default ProductCarousel;
