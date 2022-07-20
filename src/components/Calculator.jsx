import React, { useState } from "react";
import whiteArrow from "../img/white_arrow.svg";


function Calculator() {
    const [hasResult, setResult] = useState(false)

    const solve = () => {
        setResult(current => !current)
    }

    return (
        <div class="item calculator" id="calculator">
            <div class="calculator-description">
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
            <div class="label">
                <h2>Метод N1</h2>
                <div class="line white"></div>
            </div>
            <p>
                Введите данные в поля:
            </p>
            <div class="calculator-main">
                <div>
                    <h3>Ps</h3>
                    <input type="text" />
                </div>
                <div>
                    <h3>Pd</h3>
                    <input type="text" />
                </div>
                <div>
                    <h3>PWV</h3>
                    <input type="text" />
                </div>
                <div>
                    <h3>Тип PWV</h3>
                    <select id="type-pwv" name="type-pwv">
                        <option value="select" hidden selected>Выберите</option>
                        <option value="CF">CF</option>
                        <option value="BD">BA</option>
                        <option value="HA">HA</option>
                        <option value="EST">EST</option>
                        <option value="AO">AO</option>
                    </select>
                </div>
                <button onClick={solve}>Рассчитать</button>
            </div>
            <div class="score" 
                style={{
                    visibility: hasResult ? '' : 'hidden'
                }}
            >
                <h2>Ваш результат:</h2>
                <div class="score-result">
                    <img src={whiteArrow} alt="blue arrow" />
                    12314
                </div>
            </div>
            <div class="label">
                <h2>Метод N2</h2>
                <div class="line white"></div>
            </div>
            <div>
                <div class="calculator-file-load">
                    <div class="drop-file">
                        <p>Прикрепите свой файл данных в формате .xls или .csv*</p>
                        <div id="drop-area">
                            <form class="my-form">
                                <p>Перетащите файл</p>
                                <p>или</p>
                                <input type="file" id="fileElem" multiple accept="*/*" />
                                <label class="button" for="fileElem">Загрузите</label>
                            </form>
                        </div>
                    </div>
                    <div class="accept">
                        <input type="checkbox" />
                        Отправляя данные Вы соглашаетесь с тем, что полученные результаты не могут быть использованы
                            для
                            постановки диагноза и носят характер предварительного исследования.
                        
                    </div>
                </div>
                <div class="calculator-file-load-bot">
                    <p>* Пример файла (нажмите, чтобы увидеть целиком)</p>
                    <button>Рассчитать и скачать результат</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;