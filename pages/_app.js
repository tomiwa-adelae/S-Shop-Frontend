import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Meta from '../components/Meta';
import '../styles/style.css';
import Footer from '../components/Footer';
import { store, wrapper } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <Meta />
         <Header />
         <Component {...pageProps} />
         <Footer />
      </Provider>
   );
}

export default wrapper.withRedux(MyApp);
