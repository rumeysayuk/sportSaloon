import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Head from "next/head";
import 'antd/dist/antd.css';
import "swiper/css/bundle";
import "../styles/header.css";
import "../styles/AnyGymInThreeSteps.css"
import "../styles/ourLocations.css"
import "../styles/popularPlaces.css"
import "../styles/globalStyles.css"
import "../styles/homeSlider.css"
import "../styles/SwipeableCarousel.css"
import "../styles/Footer.css"
import "../styles/signup.css"
import "../styles/signin.css"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "../store/reducers/"
import {devToolsEnhancer} from "redux-devtools-extension";
import {Provider} from "react-redux";
import "moment/locale/tr";
import locale from "antd/lib/locale/tr_TR"
import {ConfigProvider} from "antd"
const store = createStore(reducers, compose(applyMiddleware(thunk), devToolsEnhancer()))
function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}> <App {...pageProps} Component={Component}/></Provider>
    )
}
const App = ({Component, pageProps}) => {
    const Layout = Component.layout || (({children}) => <>{children}</>);
    return (
        <ConfigProvider locale={locale}>
            <>
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                    <title>Rumo Card</title>
                </Head>
                <Component {...pageProps} />
                <ToastContainer position="top-center" autoClose="3000" closeOnClick rtl={false}
                                pauseOnFocusLoss draggable pauseOnHover/>
                <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
                <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
                <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            </>
        </ConfigProvider>
    )
}
export default MyApp;