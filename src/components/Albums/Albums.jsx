import React from 'react';
import './Albums.css';

const Albums = () => {

    return (
        <div className='albums'>

            <section className='notPsycho'>
                <a href='https://music.yandex.ru/album/18371188'>
                    <img src='https://avatars.yandex.net/get-music-content/4399834/6e0110eb.a.18371188-1/m400x400' alt='Я не псих' />
                    <h1>Я не псих (EP) (2013)</h1>
                </a>
            </section>

            <section className='reflections'>
                <a href='https://music.yandex.ru/album/18381011'>
                    <img src='https://avatars.yandex.net/get-music-content/5559490/d7bf5fc2.a.18381011-1/m400x400' alt='Отражения' />
                    <h1>Отражения (EP) (2014)</h1>
                </a>
            </section>

            <section className='sommeoneElse'>
                <a href='https://music.yandex.ru/album/3886442'>
                    <img src='https://avatars.yandex.net/get-music-content/113160/2acdc411.a.3886442-2/m400x400' alt='Кто-то Ещё' />
                    <h1>Кто-то Ещё (2018)</h1>
                </a>
            </section>

            <section className='dancesSingle'>
                <a href='https://music.yandex.ru/album/11403109'>
                    <img src='https://avatars.yandex.net/get-music-content/2442093/f38c290d.a.11403109-1/m400x400' alt='Танцы Single' />
                    <h1>Танцы (Single) (2020)</h1>
                </a>

            </section>

            <section className='dancesMax'>
                <a href='https://music.yandex.ru/album/11456742'>
                    <img src='https://avatars.yandex.net/get-music-content/3071110/9b7aa921.a.11456742-2/m400x400' alt='Танцы Maxi-Single' />
                    <h1>Танцы (Maxi-Single) (2020)</h1>
                </a>

            </section>

        </div>
    )
}

export default Albums;
