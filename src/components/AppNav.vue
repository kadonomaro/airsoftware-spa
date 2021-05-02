<script>
    export default {
        name: "AppNav",
    };
</script>

<template>
    <nav class="main-nav">
        <button class="main-nav__toggle js-menu-toggle" aria-label="menu">
            <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                    class="main-nav__toggle-icon main-nav__toggle-icon--left"
                    cx="15"
                    cy="4"
                    r="3"
                    stroke="#fff"
                    stroke-width="2"
                />
                <circle
                    class="main-nav__toggle-icon main-nav__toggle-icon--left"
                    cx="15"
                    cy="15"
                    r="3"
                    stroke="#fff"
                    stroke-width="2"
                />
                <circle
                    class="main-nav__toggle-icon main-nav__toggle-icon--left"
                    cx="15"
                    cy="26"
                    r="3"
                    stroke="#fff"
                    stroke-width="2"
                />
                <circle
                    class="main-nav__toggle-icon main-nav__toggle-icon--right"
                    cx="15"
                    cy="4"
                    r="3"
                    stroke="#fff"
                    stroke-width="2"
                />
                <circle
                    class="main-nav__toggle-icon main-nav__toggle-icon--right"
                    cx="15"
                    cy="15"
                    r="3"
                    stroke="#fff"
                    stroke-width="2"
                />
                <circle
                    class="main-nav__toggle-icon main-nav__toggle-icon--right"
                    cx="15"
                    cy="26"
                    r="3"
                    stroke="#fff"
                    stroke-width="2"
                />
            </svg>
        </button>
        <ul class="main-nav__list js-menu-navigation">
            <li class="main-nav__item">
                <a href="/products" class="main-nav__link">Продукты</a>
            </li>
            <li class="main-nav__item main-nav__item--sub">
                <a href="javascript:void(0);" class="main-nav__link">Информация</a>
                <ul class="main-nav__submenu">
                    <li class="main-nav__item">
                        <a href="/about" class="main-nav__link main-nav__link--sub"
                            >О компании</a
                        >
                    </li>
                    <li class="main-nav__item">
                        <a href="/internship" class="main-nav__link main-nav__link--sub"
                            >Стажировка</a
                        >
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .main-nav {
        &__toggle {
            display: none;
            width: 30px;
            height: 30px;
            padding: 0;
            background-color: transparent;
            border: none;
        }
        &__list {
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 24px;
        }
        &__item {
            position: relative;
            margin: 0 12px;
        }
        &__item--sub {
            &:hover > .main-nav__submenu,
            &:focus-within > .main-nav__submenu {
                display: block;
            }
        }
        &__link {
            display: block;
            padding-bottom: 15px;
            color: inherit;
            font-family: "Roboto Mono", monospace;
            font-size: inherit;
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: border-color 0.1s ease-in, opacity 0.1s ease-in;
            opacity: 0.7;
            &:hover,
            &:focus {
                opacity: 1;
            }
        }
        &__link--active {
            border-color: $color-accent;
            opacity: 1;
        }
        &__link--sub {
            padding-bottom: 5px;
            margin-bottom: 10px;
        }
        &__submenu {
            position: absolute;
            display: none;
            margin: -1px 0 0;
            padding: 10px;
            white-space: nowrap;
            list-style: none;
            font-size: 20px;
            background-color: rgba(#000000, 0.7);
        }
    }

    @media (max-width: $tablet-small) {
        .main-nav {
            &__toggle {
                position: absolute;
                display: block;
                z-index: 1000;
                top: 15px;
                right: 15px;
                &:focus {
                    outline: none;
                }
            }
            &__toggle-icon {
                transition: fill 0.1s ease-in, transform 0.1s ease-in;
                transform-origin: center;
            }
            &__toggle--opened .main-nav__toggle-icon {
                stroke: $color-accent;
            }
            &__toggle--opened .main-nav__toggle-icon--left {
                transform: rotate(-45deg);
            }
            &__toggle--opened .main-nav__toggle-icon--right {
                transform: rotate(45deg);
            }
            &__list {
                position: fixed;
                z-index: 999;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: block;
                padding: 15px 25px;
                background-color: $color-dark-gray;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in;
                will-change: transform;
            }
            &__list--opened {
                transform: translateX(0);
            }
            &__link {
                display: inline-block;
                margin-bottom: 10px;
                font-size: 16px;
                padding-bottom: 5px;
            }
            &__submenu {
                background-color: transparent;
            }
        }
    }
</style>
