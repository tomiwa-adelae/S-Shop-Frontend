import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getMostRatedProducts } from '../../store/actions/productActions';
import { WhiteSpinner } from '../Spinner';

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

const HomeProductCarousel = () => {
   const dispatch = useDispatch();

   const getMostRatedProductsState = useSelector(
      (state) => state.getMostRatedProducts
   );
   const { loading, mostRatedProducts } = getMostRatedProductsState;

   useEffect(() => {
      dispatch(getMostRatedProducts());
   }, [dispatch]);

   return (
      <div className="product-carousel">
         {loading && <WhiteSpinner />}
         <Slider {...settings}>
            {mostRatedProducts?.map((product) => (
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
                           <img src={product.image} alt={product.name} />
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
