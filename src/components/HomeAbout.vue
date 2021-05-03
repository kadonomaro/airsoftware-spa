<script>
    export default {
        name: "HomeAbout",
    };
</script>

<template>
    <div class="about">
        <div class="about__inner">
            <div class="about__side">
                <div class="about__image">
                    <picture>
                        <source
                            type="image/webp"
                            media="(max-width: 450px)"
                            :srcset="require('@/assets/images/about/company450w.webp')"
                        />
                        <source
                            media="(max-width: 450px)"
                            :srcset="require('@/assets/images/about/company450w.jpg')"
                        />
                        <source
                            type="image/webp"
                            :srcset="require('@/assets/images/about/company.webp')"
                        />
                        <img
                            class="about__image-img"
                            :src="require('@/assets/images/about/company.jpg')"
                            alt="офис Airsoftware"
                        />
                    </picture>
                </div>
            </div>
            <div class="about__main">
                <h3 class="about__title">Коротко о компании</h3>
                <div class="about__text">
                    <p>
                        Компания Airsoftware основана в 1998 году Олегом Комаровым и Давидом
                        Денисовым.
                    </p>
                    <p>
                        В данный момент мы занимаем лидирующие позиции на рынке для малого и
                        среднего бизнеса. В нашем штате сотни сотрудников со всего мира,
                        профессионалы с большим опытом работы в сфере разработки программного
                        обеспечения. Мы проделали большой путь и продолжаем расти, чтобы
                        помогать другим людям организовывать свой бизнес.
                    </p>
                </div>
            </div>
        </div>

        <div class="about__inner">
            <div class="about__side about__side--ordered">
                <div class="about__image">
                    <picture>
                        <source
                            type="image/webp"
                            media="(max-width: 450px)"
                            :srcset="require('@/assets/images/about/development450w.webp')"
                        />
                        <source
                            media="(max-width: 450px)"
                            :srcset="require('@/assets/images/about/development450w.jpg')"
                        />
                        <source
                            type="image/webp"
                            :srcset="require('@/assets/images/about/development.webp')"
                        />
                        <img
                            class="about__image-img"
                            :src="require('@/assets/images/about/development.jpg')"
                            alt="разработка программного обеспечения"
                        />
                    </picture>
                </div>
            </div>
            <div class="about__main">
                <h3 class="about__title">Основное направление</h3>
                <div class="about__text">
                    <p>
                        Основным направлением нашей деятельности является создание
                        современного, удобного и функционального программного обеспечения.
                        Своей продукцией мы покрываем все возникающие потребности для
                        осуществления непрерывной работы предприятий.
                    </p>
                    <p>
                        Среди наших продуктов есть как полностью бесплатные, но полноценные
                        программы без ограничения функционала, так и их платные аналоги с
                        круглосуточной техподдержкой.
                    </p>
                    <p>Сюда входит:</p>
                    <Ul>
                        <li>Помощь в установке и настройке</li>
                        <li>Онлайн консультант</li>
                        <li>Подробная документация по продуктам</li>
                        <li>Выезд специалиста для устранения проблем</li>
                    </Ul>
                </div>
            </div>
        </div>

        <div class="about__inner">
            <div class="about__side">
                <div class="about__image">
                    <picture>
                        <source
                            type="image/webp"
                            media="(max-width: 450px)"
                            :srcset="require('@/assets/images/about/internship450w.webp')"
                        />
                        <source
                            media="(max-width: 450px)"
                            :srcset="require('@/assets/images/about/internship450w.jpg')"
                        />
                        <source
                            type="image/webp"
                            :srcset="require('@/assets/images/about/internship.webp')"
                        />
                        <img
                            class="about__image-img"
                            :src="require('@/assets/images/about/internship.jpg')"
                            alt="ежегодная стажировка"
                        />
                    </picture>
                </div>
            </div>
            <div class="about__main">
                <h3 class="about__title">Рост вместе с нами</h3>
                <div class="about__text">
                    <p>Ежегодно мы проводим стажировки для всех желающих.</p>
                    <p>Требования:</p>
                    <ul>
                        <li>Студент последнего курса по соотвествующему направлению</li>
                        <li>Базовые знания в той сфере, в которой вы хотите стажироваться</li>
                        <li>
                            Проживание в городе проведения стажировки или готовность к переезду
                        </li>
                        <li>Огонь в глазах</li>
                        <li>Тяга к познанию всего неизведанного</li>
                    </ul>
                    <router-link :to="{ name: 'Internship' }">Подробнее</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .about {
        &__inner {
            display: flex;
            flex-wrap: wrap;
        }
        &__main {
            flex-basis: 65%;
            max-width: 65%;
            padding: 20px 30px 10px 60px;
            color: #ffffff;
            box-sizing: border-box;
        }
        &__side {
            flex-basis: 35%;
            max-width: 35%;
        }
        &__side--ordered {
            order: 1;
        }
        &__title {
            margin: 0 0 15px;
            font-size: 28px;
        }
        &__text {
            color: $color-medium-gray;
            font-size: 18px;
            line-height: 1.3;
            p {
                margin: 0 0 10px;
            }
            ul {
                margin: 0 0 10px;
                padding-left: 30px;
            }
            a {
                color: inherit;
                transition: color 0.1s ease-in;
                &:hover,
                &:focus {
                    color: #ffffff;
                }
            }
        }
    }

    @media (max-width: $desktop-small) {
        .about {
            &__main {
                padding: 10px 10px 10px 20px;
            }
        }
    }

    @media (max-width: $tablet-small) {
        .about {
            &__title {
                font-size: 20px;
            }
            &__text {
                font-size: 16px;
            }
        }
    }

    @media (max-width: $mobile-large) {
        .about {
            &__inner {
                display: block;
            }
            &__main,
            &__side {
                max-width: 100%;
            }
            &__main {
                padding: 10px;
            }
            &__title {
                margin-bottom: 5px;
                text-align: center;
            }
        }
    }
</style>
