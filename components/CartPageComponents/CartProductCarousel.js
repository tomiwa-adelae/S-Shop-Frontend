import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { addToCart } from '../../store/actions/cartActions';

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

const CartProductCarousel = ({ id, size, qty }) => {
   const dispatch = useDispatch();

   const cartState = useSelector((state) => state.cart);
   const { cartItems } = cartState;

   useEffect(() => {
      if (id) {
         dispatch(addToCart(id, size, Number(qty)));
      }
   }, [dispatch, id, size, qty]);

   return (
      <>
         {cartItems.length !== 0 && (
            <div className="product-carousel">
               <Slider {...settings}>
                  {cartItems?.map((product) => (
                     <Link
                        key={product.id}
                        href="/product/[id]"
                        as={`/product/${product.id}`}
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
                                 <img
                                    src={product.productImage}
                                    alt={product.name}
                                 />
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </Slider>
            </div>
         )}
      </>
   );
};

export default CartProductCarousel;
