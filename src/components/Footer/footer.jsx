import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";


function Footer() {
    const links = [
        "Help",
        "Privacy Policy",
        "Terms of service",
        "Cookies",
    ];

    return (
        <div className="footer-container">
            <p className="footer-title">© 2020 Happee company. All rights reserved</p>
            <div>
                {links.map((link, i) => {
                    return (
                        <Link key={i} to={`/${link}`}>
                            <p style={{ display: "inline-block" }}> {link}{" "}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Footer;