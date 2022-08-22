import { useState } from 'react';

const HomeCategories = () => {
   const [images] = useState([
      {
         src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg',
         alt: 'Clothes',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/195798/1.jpg?9124',
         alt: 'Cars',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852',
         alt: 'Shoes',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/999895/1.jpg?3932',
         alt: 'Bags',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/630338/1.jpg?9822',
         alt: 'Clothes',
      },
   ]);
   return (
      <div className="home-categories-section section">
         <div className="container">
            <div className="boxes">
               {images?.map((image) => (
                  <div className="box">
                     <div className="img">
                        <img src={image.src} alt={image.alt} />
                     </div>
                     <div className="details">
                        <h5>{image.alt}</h5>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default HomeCategories;
