import Link from 'next/link';
import Slider from 'react-slick';
import { SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';

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

const HomeProductCarousel = ({ loading, mostRatedProducts }) => {
   return (
      <div className="product-carousel">
         {loading && <PrimarySpinner />}
         {mostRatedProducts?.length === 0 && (
            <div className="container">
               <SuccessMessageBox msg="No products to display!" />
            </div>
         )}
         <Slider {...settings}>
            {mostRatedProducts?.slice(0, 20)?.map((product) => (
               <Link
                  key={product._id}
                  href="/product/[id]"
                  as={`/product/${product._id}`}
               >
                  <div className="box">
                     <div className="content">
                        <div className="title">
                           <h4>
                              {product.name.length >= 30
                                 ? `${product.name.substring(0, 31)}...`
                                 : product.name}
                           </h4>
                        </div>
                        <div className="img">
                           <img src={product.productImage} alt={product.name} />
                        </div>
                     </div>
                  </div>
               </Link>
            ))}
         </Slider>
      </div>
   );
};

export default HomeProductCarousel;
