<script>
    import BaseButton from "@/components/ui/BaseButton";
    import BaseTabs from "@/components/ui/BaseTabs";
    import BaseTable from "@/components/ui/BaseTable";
    export default {
        name: "HomeProducts",
        components: { BaseTable, BaseTabs, BaseButton },
    };
</script>

<template>
    <div class="products section">
        <div class="container">
            <div class="products__inner">
                <div class="products__tabs">
                    <base-tabs
                        :initial-tab-index="1"
                        active-tab-class="products__tabs-trigger--active"
                        inactive-tab-class="products__tabs-trigger"
                    >
                        <template slot="tab-trigger-1">Address Book</template>
                        <template slot="tab-panel-1">
                            <div class="products-item">
                                <span class="products-item__title">
                                    <a
                                        class="products-item__link"
                                        href="https://address-book-2020.web.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        >Address Book</a
                                    >
                                </span>
                                <span class="products-item__subtitle">
                                    Веб-приложение для управления контактами
                                </span>
                                <div class="products-item__info">
                                    <base-table>
                                        <tr>
                                            <td></td>
                                            <td>Наше приложение</td>
                                            <td>Многие другие приложения</td>
                                        </tr>
                                        <tr>
                                            <td>Удобный интерфейс</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Высокая производительность</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Большой встроенный функционал</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Бесплатное использование</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                    </base-table>
                                </div>
                            </div>
                        </template>
                        <template slot="tab-trigger-2">To-do Application</template>
                        <template slot="tab-panel-2">
                            <div class="products-item">
                                <span class="products-item__title">
                                    <a
                                        class="products-item__link"
                                        href="https://kadonomaro.github.io/todo-app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        >To-do Application</a
                                    >
                                </span>
                                <span class="products-item__subtitle">
                                    Веб-приложение «Список дел»
                                </span>
                                <div class="products-item__info">
                                    <base-table>
                                        <tr>
                                            <td></td>
                                            <td>Наше приложение</td>
                                            <td>Многие другие приложения</td>
                                        </tr>
                                        <tr>
                                            <td>Удобство использования</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Адаптировано под мобильные устройства</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Подробная документация</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Бесплатное использование</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                    </base-table>
                                </div>
                            </div>
                        </template>
                        <template slot="tab-trigger-3">Airganizer</template>
                        <template slot="tab-panel-3">
                            <div class="products-item">
                                <span class="products-item__title">
                                    <a
                                        class="products-item__link"
                                        href="https://airganizer.web.app/"
                                        target="_blank"
                                        >Airganizer</a
                                    >
                                </span>
                                <span class="products-item__subtitle">
                                    Система для управлением личным временем
                                </span>
                                <div class="products-item__info">
                                    <base-table>
                                        <tr>
                                            <td></td>
                                            <td>Наше приложение</td>
                                            <td>Многие другие приложения</td>
                                        </tr>
                                        <tr>
                                            <td>Современный интерфейс</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Сохранение в локальное хранилище или базу
                                                данных
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Круглосуточная техподдержка</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Отсутствие любых платежей</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                    </base-table>
                                </div>
                            </div>
                        </template>
                        <template slot="tab-trigger-4">Photo Finder</template>
                        <template slot="tab-panel-4">
                            <div class="products-item">
                                <span class="products-item__title">
                                    <a
                                        class="products-item__link"
                                        href="https://kadonomaro.github.io/photo-finder/"
                                        target="_blank"
                                        >Photo Finder</a
                                    >
                                </span>
                                <span class="products-item__subtitle">
                                    Поиск тематических изображений
                                </span>
                                <div class="products-item__info">
                                    <base-table>
                                        <tr>
                                            <td></td>
                                            <td>Наше приложение</td>
                                            <td>Многие другие приложения</td>
                                        </tr>
                                        <tr>
                                            <td>Современный интерфейс</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Высокая скорость обработки запросов</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Различные способы поиска(название, тег)</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Отсутствие любых платежей</td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#check"
                                                    ></use>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg width="24" height="24">
                                                    <use
                                                        href="@/assets/images/sprite.svg#decline"
                                                    ></use>
                                                </svg>
                                            </td>
                                        </tr>
                                    </base-table>
                                </div>
                            </div>
                        </template>
                    </base-tabs>
                </div>

                <footer class="products__footer">
                    <div class="products__order">
                        <base-button @click="$popup.show('modal-order')">
                            Присоединиться
                        </base-button>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .products {
        background-color: $color-light-gray;
        &__tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
        }
        &__tabs-trigger {
            margin-bottom: 10px;
            padding: 7px 15px;
            color: $color-dark-gray;
            font-family: inherit;
            font-size: 18px;
            text-decoration: none;
            background-color: transparent;
            border: none;
            border-radius: 5px;
            transition: color 0.1s ease-in, background-color 0.1s ease-in;
            cursor: pointer;
            &:hover {
                background-color: lighten($color-medium-gray, 30%);
            }
        }
        &__tabs-trigger--active {
            color: #ffffff;
            background-color: $color-medium-gray;
            &:hover {
                color: #ffffff;
                background-color: $color-medium-gray;
            }
        }
        &__order {
            text-align: center;
        }
        &__footer {
            padding: 0 10px;
            text-align: center;
        }
    }

    .products-item {
        &__title,
        &__subtitle {
            display: block;
            margin-bottom: 10px;
            text-align: center;
        }
        &__title {
            font-size: 24px;
        }
        &__subtitle {
            font-size: 20px;
        }
        &__link {
            color: inherit;
        }
    }

    @media (max-width: $mobile-large) {
        .products {
            &__tabs {
                margin-bottom: 10px;
            }
            &__resume {
                font-size: 16px;
                margin-bottom: 10px;
            }
        }

        .products-item {
            &__link {
                font-size: 18px;
            }
            &__subtitle {
                font-size: 16px;
            }
        }
    }
</style>
