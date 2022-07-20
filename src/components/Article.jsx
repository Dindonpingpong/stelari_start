import React from "react";
import blueArrow from "../img/blue_arrow.svg";
import firstPicture from "../img/pic_1.jpg";
import secondPicture from "../img/pic_2.jpg";

function Article() {
    return (
        <div class="item article" id="article">
            <h1 class="article-head">
                <img src={blueArrow} alt="blue arrow" />
                Как это работает
            </h1>
            <div class="article-content-first">
                <p>При вычислении индекса использованы нелинейные уравнения и коэффициент лучше описывает упругие стенки
                    сосуда при большой разнице систолического и диастолического давления. Индекс жесткости не привязан к
                    конкретному устройству и может быть применен для коррекции влияния высокого артериального давления
                    на
                    скорость пульсовой волны, полученной на любых устройствах на любом участке артериального русла.
                </p>
                <p>
                    В этом случае индекс StArt рассматривается как промежуточный и рассчитывается для конкретного
                    участка
                    артериального русла и в его названии отражается условное буквенное обозначение данного участка
                    русла.
                    Например baStart, haStart и так далее. Для эластичных артерий индекс уже есть. Это Stelari индекс
                    скорости пульсовой волны «золотого стандарта» cfPWV, измеренный на верифицированных приборах.
                </p>
            </div>
            <h1 class="article-head">
                <img src={blueArrow} alt="blue arrow" />
                Пример расчета и сравнения haStart
            </h1>
            <div class="article-content-second">
                <p>
                    Мы Рассчитали haPWV по исходным данным исследований на Vasera VS1500n для более 900 случайных
                    пациентов,
                    а также учли данные BP в момент измерения. Получили haStart и сравнили его с CAVI (cardio-ankle
                    vascular
                    index), рассчитанным Vasera и классическим индексом жесткости β, рассчитанным на тех же данных у тех
                    же
                    пациентов. Мы увидели достаточно высокую корреляцию индексов ha Start, CAVI и β. Это, с учетом
                    абсолютно
                    разных подходов к методам расчета Start и индекса жёсткости β, а также производного от него индекса
                    CAVI, позволяет сделать вывод о взаимном подтверждении Start и β, как методов устранения влияния
                    артериального давления на скорость пульсовой волны.
                </p>
                <div class="image-list">
                    <img src={firstPicture} alt="first" />
                    <div class="picture-label">
                        <div class="line blue"></div>
                        <h3>рис. 1</h3>
                    </div>
                    <img src={secondPicture} alt="second" />
                    <div class="picture-label">
                        <div class="line blue"></div>
                        <h3>рис. 2</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Article;