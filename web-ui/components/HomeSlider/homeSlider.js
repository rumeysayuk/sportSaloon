import React from 'react';
import Image from "next/image";
import {Carousel} from 'antd';

const HomeSlider = () => {
    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    let items = [
        {
            text1: "Sporcardlılar Yüzlerce Spor Salonunu Aylık Üyelik ile Sınırsız Kullanıyor!",
            imgUrl: "https://p4.wallpaperbetter.com/wallpaper/163/606/534/ball-workout-fitness-gym-wallpaper-preview.jpg"
        }
        , {
            text1: "Sadece Aylık Üyelik, Taahhüt Yok!",
            imgUrl: "https://www.santabanta.com/images/wallpapers/sports/a-male-body-builder-showing-his-muscular-body_1024-768.jpg"
        }
        , {
            text1: "Tek Salona Üyelikten Daha Uygun Fiyata!",
            imgUrl: "https://img.grouponcdn.com/iam/4HeXLEu8pxmmXbqwxnmXw6QF5Ro6/4H-2048x1229/v1/c870x524.jpg"
        }
        , {
            text1: "Tüm Salonlara Sınırsız Giriş!",
            imgUrl: "https://images.hdqwalls.com/download/fitness-gym-girl-nb-1920x1080.jpg"
        }
    ]
    return (
        <div className="container-fluid img-fluid">
            <Carousel className="head">
                {
                    items.map((item, i) => (
                        <div key={i} style={{position: "relative"}}>
                            <img
                                src={item.imgUrl}
                                style={{height: "91vh", width: "100%", objectFit: "cover"}}/>
                            {/*<h3 className="carousel">{item.text1}</h3>*/}
                        </div>
                    ))
                }

            </Carousel>
        </div>
    );
};

export default HomeSlider;