import Link from 'next/link';
import { useState } from 'react';

const HomeCategories = () => {
   const [categories] = useState([
      {
         name: 'bags',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/155456/1.jpg?8470',
      },
      {
         name: 'caps',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/698956/1.jpg?2468',
      },
      {
         name: 'clothes',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852',
      },
      {
         name: 'frangrances',
         image: 'https://m.media-amazon.com/images/I/716rEXN4htL._AC_UL320_.jpg',
      },
      {
         name: 'glasses',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/464268/1.jpg?8220',
      },
      {
         name: 'phones',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/8976501/1.jpg?6296',
      },
      {
         name: 'shoes',
         image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/205144/1.jpg?0768',
      },
      {
         name: 'skins',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/8272741/1.jpg?9703',
      },
      {
         name: 'watches',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/0290601/1.jpg?9745',
      },
      {
         name: 'wallpapers',
         image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/216128/1.jpg?3730',
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
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxM0Jpq3WOACdTv7_DnxI_HnjITcWjGRDdPq81efSPtw&s"
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
