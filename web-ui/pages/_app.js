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

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
            </Head>
            <Component {...pageProps} />
            <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </>
    );
}