import React from 'react';
import Header from "../components/Header/Header"
import AnyGymInThreeSteps from "../components/AnyGymInThreeSteps/AnyGymInThreeSteps";
import OurLocations from "../components/ourLocations/ourLocations";
import PopularPlaces from "../components/PopularPlaces/PopularPlaces";
import HomeSlider from "../components/HomeSlider/homeSlider";
import SwipeableCarousel from "../components/SwipeableCarousel/SwipeableCarousel";
import Footer from "../components/Footer/Footer"

export const Layout = () => {
    return (
        <>
            <Header/>
            <HomeSlider/>
            <AnyGymInThreeSteps/>
            <OurLocations/>
            <PopularPlaces/>
            <SwipeableCarousel/>
            <Footer/>
        </>
    )
}