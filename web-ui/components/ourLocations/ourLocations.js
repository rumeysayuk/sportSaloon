import React from 'react';
import {Card} from "antd";
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';

const {Meta} = Card;

const ourLocations = () => {
    let items = [
        {
            text1: "203 Spor Salonu",
            text2: "İstanbul Spor Salonları",
            text3: "Check-in yaparak salona geldiğini bildir. Unutma! Salona check-in yapabilmek için 200m yakınında olmalısın.",
            imgUrl: "data:image/jpeg;base64,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"
        },
        {
            text1: "8 Spor Salonu",
            text2: "İzmir Spor Salonları",
            text3: "Check-in yaparak salona geldiğini bildir. Unutma! Salona check-in yapabilmek için 200m yakınında olmalısın.",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EcqJSujHbALDcSEwXxMKes9hM8thh6_xIaUFo-PHGOlHMtw1PmEnpIRDsKIxxZ5ltKQ&usqp=CAU"
        },
        {
            text1: "23 Spor Salonu",
            text2: "Ankara Spor Salonları",
            text3: "Check-in yaparak salona geldiğini bildir. Unutma! Salona check-in yapabilmek için 200m yakınında olmalısın.",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Istanbul_asv2020-02_img69_Ma%C3%A7ka_Armory.jpg/300px-Istanbul_asv2020-02_img69_Ma%C3%A7ka_Armory.jpg"
        },
    ]
    return (
        <div className="container">
            <h3 className="text-center mb-3 head">Nerelerdeyiz ?</h3>
            <div className="row d-flex align-items-center justify-content-center pb-5">
                {
                    items.map((item, i) => (
                        <div key={i}
                             className={`col-md-4 col-sm-12 mb-5 d-flex align-items-center justify-content-center ${i > 0 && 'mt-6rem'}`}>
                            <Card className="ourCardS"
                                  hoverable
                                  style={{width: 320}}
                                  cover={<img alt="example" width={300} height={200} style={{objectFit: "cover"}}
                                              src={item.imgUrl}
                                  />}>
                                <Meta title={
                                    <div className="h-auto">
                                        <div
                                            className="image-absolute d-flex text-white font-bold flex-column align-items-start justify-content-start">
                                            <span className="location-shape"><FmdGoodTwoToneIcon/>{item.text1}</span>
                                        </div>
                                        <div
                                            className="d-flex text-black font-bold flex-column align-items-start justify-content-start">
                                            <span className="font-weight-bold pt-5">{item.text2}</span>
                                            <span className="text-black-50 pt-1">{item.text3}</span>
                                        </div>
                                    </div>

                                }/>
                            </Card>
                        </div>
                    ))
                }
                <hr style={{marginTop: "130px"}}/>
            </div>

        </div>
    );
};

export default ourLocations;