import Link from 'next/link';
import { useState } from 'react';

const HomeCategories = () => {
   const [categories] = useState([
      {
         name: 'clothes',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852',
      },
      {
         name: 'shoes',
         image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/205144/1.jpg?0768',
      },
      {
         name: 'electronics',
         image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/794608/1.jpg?4584',
      },
      {
         name: 'bags',
         image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/187259/1.jpg?4497',
      },
   ]);

   return (
      <div className="home-categories-section section">
         <div className="container">
            <div className="boxes">
               {categories?.map((category, index) => (
                  <Link
                     key={index}
                     href="/category/[category]"
                     as={`/category/${category.name}`}
                  >
                     <div className="box">
                        <div className="img">
                           <img src={category.image} alt={category.name} />
                        </div>
                        <div className="details">
                           <h5>{category.name}</h5>
                        </div>
                     </div>
                  </Link>
               ))}
               <Link href="/allproducts">
                  <div className="box">
                     <div className="img">
                        <img
                           src="https://thumbs.dreamstime.com/b/simple-vector-red-scratch-rubber-stamp-sample-transparent-effect-background-155834864.jpg"
                           alt="All Products"
                        />
                     </div>
                     <div className="details">
                        <h5>All</h5>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default HomeCategories;
