import React from "react";
import logo from "../img/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
    return (
        <div className="item footer">
            <div className="footer-nav">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer-nav-list">
                    <Link to="#article">en/ru</Link>
                    <Link to="#article">об индексе</Link>
                    <Link to="#calculator">калькулятор</Link>
                    <Link to="#contacts">контакты</Link>
                </div>
            </div>
            <p className="white policy">
                Privacy policy. Cookie policy. © 2022. All Rights Reserved.
                <br />Designed by <a href="https://margaritte.com">Margarita</a>
                <br />Developed by <a href="https://github.com/Dindonpingpong">Rkina</a>
            </p>
        </div>
    )
}

export default Footer;