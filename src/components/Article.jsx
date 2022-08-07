import React from "react";
import ModalImage from "react-modal-image";
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";

import blueArrow from "../img/blue_arrow.svg";
import firstPicture from "../img/pic_1.jpg";
import secondPicture from "../img/pic_2.jpg";

function Article() {
    const { t } = useTranslation();

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <div className="item article" id="article">
            <h1 className="article-head">
                <img src={blueArrow} alt="blue arrow" />
                Как это работает
            </h1>
            <div class="article-content-first">
                <p>{t("article.firstArticle")}</p>
                <p>
                    В этом случае индекс StArt рассматривается как промежуточный и рассчитывается для конкретного
                    участка
                    артериального русла и в его названии отражается условное буквенное обозначение данного участка
                    русла.
                    <br />Например baStart, haStart и так далее. Для эластичных артерий индекс уже есть.<br /> Это Stelari индекс
                    скорости пульсовой волны «золотого стандарта» cfPWV, измеренный на верифицированных приборах.
                </p>
            </div>
            <h1 className="article-head">
                <img src={blueArrow} alt="blue arrow" />
                Пример расчета и сравнения haStart
            </h1>
            <div className="article-content-second">
                {
                    isTabletOrMobile &&
                    <div className="image-list">
                        <img className="image-list-picture" src={firstPicture} alt="first" />
                        <div className="picture-label">
                            <div className="picture-label-line"></div>
                            <h3>рис. 1</h3>
                        </div>
                    </div>
                }
                <p>
                    Мы Рассчитали haPWV по исходным данным отчетов Vasera VS1500n для более 900
                    пациентов, принимавших участие в исследованиях нескольких научных центров,
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
                <div className="image-list">
                    {
                        isDesktopOrLaptop &&
                        <ModalImage
                            className="image-list-picture"
                            small={firstPicture}
                            large={firstPicture}
                            alt="second"
                        />
                    }
                    {
                        isDesktopOrLaptop &&
                        <div className="picture-label">
                            <div className="picture-label-line"></div>
                            <h3>рис. 1</h3>
                        </div>
                    }
                    {
                        isDesktopOrLaptop &&
                        <ModalImage
                            className="image-list-picture"
                            small={secondPicture} А
                            large={secondPicture}
                            alt="second"
                        />
                    }
                    {
                        isTabletOrMobile &&
                        <img className="image-list-picture" src={secondPicture} alt="second" />
                    }
                    <div className="picture-label">
                        <div className="picture-label-line"></div>
                        <h3>рис. 2</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Article;