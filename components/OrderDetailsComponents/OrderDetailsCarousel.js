import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useEffect } from 'react';
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

const OrderDetailsCarousel = ({ orderItems }) => {
   const router = useRouter();

   //    const createOrderState = useSelector((state) => state.createOrder);
   //    const { order, orderItems } = createOrderState;

   //    useEffect(() => {
   //       if (!order) {
   //          router.push('/confirmorder');
   //       }
   //    }, [router]);

   return (
      <>
         <div className="product-carousel">
            <Slider {...settings}>
               {orderItems?.map((product) => (
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
                              <img src={product.image} alt={product.name} />
                           </div>
                        </div>
                     </div>
                  </Link>
               ))}
            </Slider>
         </div>
      </>
   );
};

export default OrderDetailsCarousel;
