<script>
    import AppLogo from "@/components/AppLogo";
    export default {
        name: "AppFooter",
        components: { AppLogo },
        computed: {
            currentYear() {
                return new Date().getFullYear();
            },
            routes() {
                return [
                    { title: "Главная", name: "Home" },
                    { title: "Продукты", name: "Products" },
                    { title: "О компании", name: "About" },
                    { title: "Стажировка", name: "Internship" },
                ];
            },
        },
    };
</script>

<template>
    <footer class="page-footer">
        <div class="page-footer__top">
            <span class="page-footer__text">Мы всегда готовы к сотрудничеству</span>
            <a class="page-footer__phone" href="tel:88006001212">8-800-600-12-12</a>
            <a class="page-footer__email" href="mailto:info@airsoftware.ru.com">
                info@airsoftware.ru.com
            </a>
        </div>
        <div class="page-footer__bottom">
            <span class="page-footer__year">© 1998 - {{ currentYear }}</span>
            <div class="page-footer__nav">
                <nav class="footer-nav">
                    <ul class="footer-nav__list">
                        <li
                            class="footer-nav__item"
                            v-for="(route, index) in routes"
                            :key="index"
                        >
                            <router-link :to="{ name: route.name }" class="footer-nav__link">
                                {{ route.title }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="page-footer__logo">
                <app-logo></app-logo>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .page-footer {
        padding: 10px 30px 5px;
        color: $color-medium-gray;
        font-size: 18px;
        background-color: $color-darkest;
        &__top {
            padding: 10px 0;
            border-bottom: 2px solid $color-medium-gray;
            text-align: center;
        }
        &__text {
            display: block;
            margin-bottom: 5px;
            font-size: 16px;
            line-height: 1;
        }
        &__phone,
        &__email {
            display: inline-block;
            margin: 0 5px;
            font-size: 18px;
            color: $color-light-gray;
            text-decoration: none;
            transition: color 0.1s ease-in;
            &:hover,
            &:focus {
                color: darken($color-light-gray, 10%);
            }
        }
        &__bottom {
            display: flex;
            align-items: center;
            padding: 10px 0;
        }
        &__year {
            margin-right: 25px;
        }
        &__nav {
            margin-right: auto;
        }
        &__logo {
            max-width: 70px;
        }
    }

    .footer-nav {
        &__list {
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
        }
        &__item {
            &:not(:last-child) {
                margin-right: 10px;
            }
        }
        &__link {
            color: inherit;
            transition: color 0.1s ease-in;
            &:hover,
            &:focus {
                color: #ffffff;
            }
        }
    }

    @media (max-width: $mobile-large) {
        .page-footer {
            padding: 5px 10px;
            &__bottom {
                justify-content: space-between;
                flex-wrap: wrap;
            }
            &__year,
            &__nav,
            &__logo {
                margin: 0 5px;
            }
            &__nav {
                margin-bottom: 10px;
            }
            &__year {
                order: 2;
                text-align: center;
            }
        }

        .footer-nav {
            &__list {
                display: block;
            }
            &__link {
                display: block;
                padding-bottom: 10px;
                font-size: 16px;
            }
        }
    }
</style>
