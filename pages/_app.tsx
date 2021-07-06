import '../styles/globals.scss';
import '../styles/variables.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {Provider} from "react-redux";
import store from "../redux/store/store";

function MyApp({Component, pageProps}) {
    return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
