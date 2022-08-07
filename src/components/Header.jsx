import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../img/logo.svg";
import cone from "../img/log.png";
import whiteArrow from "../img/white_arrow.svg";


function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="item header">
            <div className="header-nav">
                <div className="logo">
                    <img src={logo} alt="cone" />
                </div>
                <input type="checkbox" id="checkbox_toggle" onClick={() => setToggle(!toggle)} />
                <label htmlFor="checkbox_toggle" className="header-nav-hamburger toggle">&#9776;</label>
                <label htmlFor="checkbox_toggle" className="header-nav-hamburger cross">&#10006;</label>
                <div className="header-nav-list">
                    <Link to="#article">en/ru</Link>
                    <Link to="#article">об индексе</Link>
                    <Link to="#calculator">калькулятор</Link>
                    <Link to="#contacts">контакты</Link>
                </div>
            </div>
            <div className="header-content">
                <article
                    style={{
                        top: !toggle ? "300px" : "390px"
                    }}>
                    <h1>
                        Stelari <img src={whiteArrow} alt="white arrow" /> Stifness of Elastic
                    </h1>
                    {
                        !toggle &&
                        <p>
                            Stelari /Start - это индекс жесткости артерий, основанный на теории обратимых разрывов при
                            движении
                            жидкости в протяжённом пространстве, ограниченном эластичными стенками, а также фундаментальных
                            законах сохранения импульса и массы.
                        </p>
                    }
                </article>
                <img src={cone} alt="cone"
                    style={{
                        top: !toggle ? "100px" : "480px"
                    }}
                />
            </div>
        </div >
    )
}

export default Header;