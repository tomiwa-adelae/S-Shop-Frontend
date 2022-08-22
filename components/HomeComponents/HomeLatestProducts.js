import React, { useState } from 'react';

const HomeLatestProducts = () => {
   const [images] = useState([
      {
         src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg',
         alt: 'Jones Wears Marshmello Printed Hoodie Black',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/195798/1.jpg?9124',
         alt: 'Straight Jeans Mens Pants Trousers High-Quality',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852',
         alt: 'Mens Lace Up Sneakers',
      },
      {
         src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg',
         alt: 'Smart In-ear Bluetooth Sports Headset Wireless Earbuds Touch Contro',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/630338/1.jpg?9822',
         alt: '4 In 1 Mens Underwear Boxer Cotton Underwear',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/195798/1.jpg?9124',
         alt: 'Yemlays Mens Casual Shoe -blue',
      },
      {
         src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg',
         alt: 'Smart In-ear Bluetooth Sports Headset Wireless Earbuds Touch Contro',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/630338/1.jpg?9822',
         alt: '4 In 1 Mens Underwear Boxer Cotton Underwear',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/195798/1.jpg?9124',
         alt: 'Yemlays Mens Casual Shoe -blue',
      },
      {
         src: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/195798/1.jpg?9124',
         alt: 'Yemlays Mens Casual Shoe -blue',
      },
   ]);

   return (
      <div className="home-latest-products section">
         <div className="container">
            <div className="head">
               <h4>Latest products</h4>
               <button className="btn btn-primary">See all</button>
            </div>
            <div className="boxes">
               {images?.map((image) => (
                  <div className="box">
                     <div className="img">
                        <img src={image.src} alt="" />
                     </div>
                     <div className="details">
                        <h5>
                           {' '}
                           {image.alt.length >= 15
                              ? `${image.alt.substring(0, 16)}...`
                              : image.alt}
                        </h5>
                        <h5>#5,000</h5>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default HomeLatestProducts;
