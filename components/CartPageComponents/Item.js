import Link from 'next/link';
import React from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { addToCart, removeFromCart } from '../../store/actions/cartActions';
import { useDispatch } from 'react-redux';

const Item = ({ item }) => {
   const dispatch = useDispatch();
   const decreaseQty = (qty) => {
      dispatch(addToCart(item.id, item.size, Number(qty) - 1));
   };

   const increaseQty = (qty) => {
      dispatch(addToCart(item.id, item.size, Number(qty) + 1));
   };

   const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
   };

   return (
      <div className="item my-0">
         <div className="img">
            <img src={item.image} alt={item.name} />
         </div>
         <div className="details p-0">
            <div className="col-one">
               <div className="name">
                  <Link href="/product/[id]" as={`/product/${item.id}`}>
                     <h5 className="my-0">{item.name}</h5>
                  </Link>
                  <h6>
                     Brand: {item.brand}
                     <span>
                        {item.category === 'clothes' && ` | Size: ${item.size}`}
                     </span>
                     <span>
                        {item.category === 'shoes' && ` | Size: ${item.size}`}
                     </span>
                  </h6>
               </div>
               <div
                  onClick={() => removeFromCartHandler(item.id)}
                  className="my-0"
               >
                  <button className="btn btn-outline-danger">remove</button>
               </div>
            </div>
            <div className="col-two">
               <h4 className="my-0">#{item.price}</h4>

               <div className="qty-btns">
                  <button
                     onClick={() => decreaseQty(item.qty)}
                     disabled={Number(item.qty) === 1}
                     className="btn btn-secondary p-0"
                  >
                     <TiMinus />
                  </button>
                  <h6 className="mx-0">{item.qty}</h6>
                  <button
                     onClick={() => increaseQty(item.qty)}
                     className="btn btn-secondary p-0"
                  >
                     <TiPlus />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Item;
