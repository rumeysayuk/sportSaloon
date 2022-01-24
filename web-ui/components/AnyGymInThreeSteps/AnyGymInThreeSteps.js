import React from 'react';
import {Badge, Card} from "antd";
import Image from "next/image";

const AnyGymInThreeSteps = () => {
    let items = [
        {
            text1: "Adım 1",
            text2: "Gideceğin Salonu Seç!",
            span: "Yüzlerce salon arasından spor yapmak istediğin salonu bul.",
            imgUrl: "/gym.png"
        },
        {
            text1: "Adım 2",
            text2: "Salona Doğru Yola Çık!",
            span: "Seçtiğin spor salonunun yakınına gel.",
            imgUrl: "/runner.png"
        },
        {
            text1: "Adım 3",
            text2: "Check-in Yap!",
            span: "Check-in yaparak salona geldiğini bildir. Unutma! Salona check-in yapabilmek için 200m yakınında olmalısın.",
            imgUrl: "/map.png"
        },

    ];
    return (
        <div className="container">
            <h3 className="text-center mt-5 animate__animated animate__bounce animate__repeat-2 head">3 Adımda Dilediğin
                Salonda Spor Yap</h3>
            <div className=" row d-flex align-items-center justify-content-between pb-5">
                {
                    items.map((item, i) => (
                        <div key={i} className=" col-md-4 col-sm-12 mt-2 mb-1">
                            <Badge.Ribbon text={item.text1} color="purple">
                                <Card className="card" title={item.text2} size="small">
                                    <Image className="card-img text-center d-block step-img" width={90} height={90}
                                           src={item.imgUrl}/>
                                    <span
                                        className="d-block mt-3">{item.span}</span>
                                </Card>
                            </Badge.Ribbon>
                        </div>
                    ))
                }

            </div>
            <hr/>
        </div>
    );
};

export default AnyGymInThreeSteps;