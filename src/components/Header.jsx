import React from "react";
import logo from "../img/logo.svg";
import cone from "../img/log.png";
import whiteArrow from "../img/white_arrow.svg";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
    return (
        <div class="item header" >
            <div class="header-nav">
                <div class="logo">
                    <img src={logo} alt="cone" />
                </div>
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="header-nav-hamburger toggle">&#9776;</label>
                <label for="checkbox_toggle" class="header-nav-hamburger cross">&#10006;</label>
                <div class="header-nav-list">
                    <Link to="#article">об индексе</Link>
                    <Link to="#calculator">калькулятор</Link>
                    <Link to="#contacts">контакты</Link>
                </div>
            </div>
            <div class="header-content">
                <article>
                    <h1>
                        Stelari <img src={whiteArrow} alt="white arrow"/> Stifness of Elastic
                    </h1>
                    <p>
                        Stelari /Start - это индекс жесткости артерий, основанный на теории обратимых разрывов при
                        движении
                        жидкости в протяжённом пространстве, ограниченном эластичными стенками, а также фундаментальных
                        законах сохранения импульса и массы.
                    </p>
                </article>
                <img src={cone} alt="cone" />
            </div>
        </div >
    )
}

export default Header;