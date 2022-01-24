import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
const SwipeableCarousel = () => {
    const items = [
        {ımageUrl: "https://turbologo.com/articles/wp-content/uploads/2020/12/fitness-logo.png.webp"},
        {ımageUrl: "https://turbologo.com/articles/wp-content/uploads/2020/12/fitness-2.png"},
        {ımageUrl: "https://turbologo.com/articles/wp-content/uploads/2020/12/sport-9.png"},
        {ımageUrl: "https://turbologo.com/articles/wp-content/uploads/2020/12/sport-8.png"},
        {ımageUrl: "https://turbologo.com/articles/wp-content/uploads/2020/12/sport-10.png"},
        {ımageUrl: "https://uploads.turbologo.com/uploads/design/preview_image/789925/preview_image20200905-25622-1n83149.png"},
        {ımageUrl: "https://turbologo.com/articles/wp-content/uploads/2020/12/sport-1.png"},
        {ımageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXb3HtpoiJfPn40wA6i4HsiBGfhPvSVFE-bP3Rpbu3QyufQ6fqssdi_kT-mSIrG_88Dg&usqp=CAU"},
    ]
    return (
        <div className="container">
            <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                "clickable": true
            }} breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 5,
                    "spaceBetween": 50
                }
            }} className="mySwiper">
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <img src={item.ımageUrl} className="images-slider"
                                 width={350} height={350} alt=""/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default SwipeableCarousel;