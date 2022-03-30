import React from "react";
import './Footer.css'

const Footer = () => {

    return (
        <footer>
            <a href="https://music.yandex.ru/artist/4700727">
                <img className='YandexLabel' src='https://ext-cachev2-marrt09.cdn.yandex.net/download.cdn.yandex.net/from/yandex.ru/support/ru/music/files/button_white.svg?lid=1520' alt='karl kust на Яндекс.музыке' />
            </a>
            <a href='https://vk.com/karlkust'>
                <img className="vkLabel" src='../img/VK_Monochrome_Full_Logo.svg' alt='karl kust ВКонтакте' />
            </a>
        </footer>
    )
}

export default Footer;
