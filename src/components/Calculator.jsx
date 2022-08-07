import React, { useState } from "react";
import whiteArrow from "../img/white_arrow.svg";
import { useMediaQuery } from 'react-responsive';

import templateExcel from "./../files_examples/Template.xlsx";

function Calculator() {
    const [hasResult, setResult] = useState(false)

    const solve = () => {
        setResult(current => !current)
    }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <div className="item calculator" id="calculator">
            <div className="calculator-description">
                <h1>
                    Рассчитайте индекс артериальной жесткости Stelari / Start
                </h1>
                <p>Для расчета вам понадобится минимум данных: Ps, Pd, PWV.</p>
                <p>
                    Если Вы хотите обработать данные одного исследования, воспользуйтесь <b>методом N1</b>. Если у вас
                    большой
                    массив данных воспользуйтесь <b>методом N2</b>.
                </p>
            </div>
            <div className="label">
                <h2>Метод N1</h2>
                <div className="line white"></div>
            </div>
            <p>
                Введите данные в поля:
            </p>
            <div className="calculator-main">
                <div className="calculator-main-text-item">
                    <h3>Ps</h3>
                    <input type="text" />
                </div>
                <div className="calculator-main-text-item">
                    <h3>Pd</h3>
                    <input type="text" />
                </div>
                <div className="calculator-main-text-item">
                    <h3>PWV</h3>
                    <input type="text" />
                </div>
                <div className="calculator-main-text-dropdown">
                    <h3>Тип PWV</h3>
                    <select id="type-pwv" name="type-pwv" defaultValue="Выберите">
                        <optgroup>
                            <option value="select" hidden>Выберите</option>
                            <option value="CF">CF</option>
                            <option value="BD">BA</option>
                            <option value="HA">HA</option>
                            <option value="EST">EST</option>
                            <option value="AO">AO</option>
                        </optgroup>
                    </select>
                </div>
                {
                    isTabletOrMobile &&
                    <div className="score"
                    >
                        <h2>Ваш результат:</h2>
                        <div className="score-result">
                            <img src={whiteArrow} alt="blue arrow" />
                            <p
                                style={{
                                    visibility: hasResult ? '' : 'hidden'
                                }}
                            >123,14</p>
                        </div>
                    </div>
                }
                <button onClick={solve}>Рассчитать</button>
            </div>
            {
                isDesktopOrLaptop &&
                <div className="score"
                >
                    <h2>Ваш результат:</h2>
                    <div className="score-result">
                        <img src={whiteArrow} alt="blue arrow" />
                        <p
                            style={{
                                visibility: hasResult ? '' : 'hidden'
                            }}
                        >123,14</p>
                    </div>
                </div>
            }
            <div className="label">
                <h2>Метод N2</h2>
                <div className="line white"></div>
            </div>
            <div>
                <div className="calculator-file-load">
                    {
                        isDesktopOrLaptop &&
                        <div className="drop-file">
                            <p>Прикрепите свой файл данных в формате .xls или .csv*</p>
                            <div id="drop-area">
                                <form className="calculator-form">
                                    <p>Перетащите файл</p>
                                    <p>или</p>
                                    <input type="file" id="fileElem" multiple accept="*/*" />
                                    <label className="button" htmlFor="fileElem">Загрузите</label>
                                </form>
                            </div>
                        </div>
                    }
                    {
                        isTabletOrMobile &&
                        <p>Прикрепите свой файл данных в формате .xls или .csv*</p>
                    }
                    {
                        isTabletOrMobile &&
                        <form className="calculator-form">
                            <input type="file" id="fileElem" multiple accept="*/*" />
                            <label className="button" htmlFor="fileElem">Загрузите</label>
                        </form>
                    }
                    {
                        isTabletOrMobile &&
                        <div className="calculator-file-load-bot">
                            <p>* Пример файла (нажмите, чтобы увидеть целиком)</p>
                        </div>
                    }
                    <div className="side-item">
                        <div className="calculator-main-text-dropdown">
                            <h3>Выберите тип PWV</h3>
                            <select id="type-pwv" name="type-pwv" defaultValue="CF">
                                <optgroup>
                                    <option value="CF">CF</option>
                                    <option value="BD">BA</option>
                                    <option value="HA">HA</option>
                                    <option value="EST">EST</option>
                                    <option value="AO">AO</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="accept">
                            <input type="checkbox" />
                            Отправляя данные Вы соглашаетесь с тем, что полученные результаты не могут быть использованы
                            для
                            постановки диагноза и носят характер предварительного исследования.
                        </div>
                    </div>
                    {
                        isTabletOrMobile &&
                        <button className="result-button">Рассчитать и скачать результат</button>
                    }
                </div>
                {
                    isDesktopOrLaptop &&
                    <div className="calculator-file-load-bot">
                        <a href={templateExcel}>* Пример файла (нажмите, чтобы скачать шаблон)</a>
                        <button>Рассчитать и скачать результат</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Calculator;