import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import {ArrowUpwardOutlined} from "@mui/icons-material";

const Footer = () => {
    let companies = ["Laravel", "Vue", "React"]
    let helps = ["Sıkça Sorulan Sorular", "Bize Ulaşın"]
    let centers = ["İzmir Salonları", "İstanbul Salonları", "Erzurum Salonları"]

    return (
        <footer className="text-center position-relative text-lg-start mt-3 text-muted pt-3 text-white"
                style={{backgroundColor: "#132d59"}}>
            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white">Destek</h6>
                            {
                                helps.map((help, i) => (
                                    <p key={i}>
                                        <a href="#!" className="text-white-50 footer-links">{help}</a>
                                    </p>
                                ))
                            }
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white">Hakkımızda</h6>
                            {
                                companies.map((company, i) => (
                                    <p key={i}>
                                        <a href="#!" className="text-white-50 footer-links">{company}</a>
                                    </p>
                                ))
                            }
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white">Popüler</h6>
                            {
                                centers.map((center, i) => (
                                    <p key={i}>
                                        <a href="#!" className="text-white-50 footer-links">{center}</a>
                                    </p>
                                ))
                            }
                        </div>

                        <h3 className="text-center mt-2 head">Bizi Takip Edin!</h3>
                        <div className="d-flex col-12 justify-content-center align-items-center mb-5 text-white-50 "
                             style={{gap: "15px"}}>
                            <FacebookIcon className="footer-icon"/>
                            <TwitterIcon className="footer-icon"/>
                            <YouTubeIcon className="footer-icon"/>
                            <InstagramIcon className="footer-icon"/>
                        </div>
                    </div>

                </div>
            </section>
            <div className="text-center p-4 text-white mr-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2021 Copyright: &nbsp;
                <a className="fw-bold text-white" href="https://mdbootstrap.com/">Kedi Annesi,Balıkçı,Güneş Rümo</a>
            </div>
            <ArrowUpwardOutlined onClick={() => window.scrollTo({ behavior: "smooth", top: 0})} className="backToTop"/>
        </footer>
    );
};

export default Footer;