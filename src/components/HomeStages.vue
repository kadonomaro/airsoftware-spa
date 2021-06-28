<script>
    export default {
        name: "HomeStages",
        computed: {
            stages() {
                return [
                    {
                        title: "Интервью и анализ",
                        text:
                            "<p> Первично мы должны понимать все ваши пожелания и цели будущего приложения. </p> <p> Далее проводим глубокий анализ сферы, целевой аудитории, конкурентов и западных аналогов. Мы анализируем, как можно сделать приложения максимально удобным и понятным для ваших посетителей. </p>",
                    },
                    {
                        title: "Прототип и текст",
                        text:
                            "<p> На основе глубокого анализа формируем ключевые тезисы, разделы, продающие триггеры. </p> <p> Создаем прототип (эскиз) всех будущих экранов приложения, учитывая все выявленные нюансы и пожелания заказчика. </p>",
                    },
                    {
                        title: "Дизайн",
                        text:
                            "<p> Разработка общей концепции приложения. Концепция дорабатывается до идеального вида или создается заново, согласно пожеланиям заказчика. </p> <p> Разработка UI, подготовка к верстке. Разработка модальных и выпадающих окон. Визуализация анимации и взаимодействия элементов. </p>",
                    },
                    {
                        title: "Front-end разработка",
                        text:
                            "<p> Создаем шаблоны всех экранов. Адаптируем, чтобы оно удобно смотрелось на любых типах устройств (смартфоны, планшеты, ноутбуки) </p> <p> На данном этапе нам важно понимать, что все экраны корректно отображаются в различных браузерах и на различных устройствах. </p>",
                    },
                    {
                        title: "Back-end разработка",
                        text:
                            "<p> Глубокая интеграция с различными, необходимыми для работы приложения, сервисами. Настройка взаимодействия с API. </p> <p> Проводим финальное тестирование приложения по различным сценариям. </p>",
                    },
                    {
                        title: "Сдача проекта",
                        text:
                            "<p> Презентация финального результата. Показываем основные нюансы при работе. </p> <p> Проводим обучение по работе с приложением. Сюда же входит первичная настройка, наполнение тестовыми данными. </p>",
                    },
                ];
            },
        },
    };
</script>

<template>
    <div class="stages">
        <div class="stages__inner">
            <div class="stages__item" v-for="(stage, index) in stages" :key="index">
                <div class="stage">
                    <h3 class="stage__title">{{ stage.title }}</h3>
                    <div class="stage__text" v-html="stage.text"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .stages {
        counter-reset: stage;
        background-color: $color-dark-gray;
        &__inner {
            display: flex;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
        }
        &__item {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
            padding: 0 10px 20px;
            box-sizing: border-box;
        }
    }

    .stage {
        position: relative;
        height: 100%;
        padding: 30px;
        color: #ffffff;
        background-color: #202020;
        box-sizing: border-box;
        &:hover::before {
            opacity: 0.8;
        }
        &::before {
            content: counter(stage);
            counter-increment: stage;
            position: absolute;
            top: -3px;
            right: 45px;
            width: 30px;
            padding: 50px 0 10px;
            font-size: 18px;
            line-height: 20px;
            text-align: center;
            background-color: $color-accent;
            transition: opacity 0.1s ease-in;
        }
        &::after {
            content: "";
            position: absolute;
            top: -3px;
            right: 42px;
            border-style: solid;
            border-width: 3px 0 0 3px;
            border-color: transparent transparent transparent darken($color-accent, 15%);
        }
        &__title {
            margin: 20px 0 25px;
            padding-right: 50px;
            font-size: 20px;
            line-height: 1.5;
            text-transform: uppercase;
        }
        &__text {
            color: $color-medium-gray;
            line-height: 1.5;
        }
    }

    @media (max-width: $tablet-small) {
        .stages {
            &__item {
                flex-basis: 50%;
                max-width: 50%;
            }
        }

        .stage {
            padding: 30px 20px 30px 30px;
        }
    }

    @media (max-width: $mobile-large) {
        .stages {
            &__inner {
                display: block;
            }
            &__item {
                flex-basis: 100%;
                max-width: 100%;
            }
        }

        .stage {
            padding: 20px 10px 20px 20px;
            &::before {
                padding-top: 30px;
            }
            &__title {
                margin-top: 10px;
                font-size: 16px;
            }
        }
    }
</style>
