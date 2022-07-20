import React from "react";
import logo from "../img/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
    return (
        <div class="item footer">
            <div class="header-nav">
                <div class="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div class="header-nav-list">
                    <Link to="#article">об индексе</Link>
                    <Link to="#calculator">калькулятор</Link>
                    <Link to="#contacts">контакты</Link>
                </div>
                <p class="white">Privacy policy. Cookie policy. © 2022. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;