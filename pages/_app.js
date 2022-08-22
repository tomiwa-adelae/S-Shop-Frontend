import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Meta from '../components/Meta';
import '../styles/style.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Meta />
         <Header />
         <Component {...pageProps} />
         <Footer />
      </>
   );
}

export default MyApp;
