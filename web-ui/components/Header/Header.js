import React from 'react';
import Link from "next/link";

const Header = () => {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <container className="container ">
                <div className="menu__icon">
                    <h3 className="logo">LOGO</h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" style={{border: "none"}}>
                        <span className="navbar-toggler-icon" style={{color: "white"}}></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto animate__backInDown">
                        <li className="nav-item btn">Spor Salonları</li>
                        <li className="nav-item btn">Nasıl Çalışır?</li>
                        <li className="nav-item btn">Blog</li>
                        <li className=" btn  my-2 my-sm-0">
                           <Link href="/signin"> Üye Girişi</Link></li>
                        <button type="button" className=" nav-item btn btn-outline-warning signup">
                            <Link href="/signup" className="link-warning">Hemen Üye Ol</Link>
                        </button>
                    </ul>
                </div>
            </container>
        </nav>

    </div>);
};

export default Header;