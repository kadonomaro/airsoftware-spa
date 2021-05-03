<script>
    export default {
        name: "SectionWrapper",
        props: {
            title: String,
            subtitle: String,
            theme: {
                type: String,
                default: "light",
                validator: (value) => ["light", "dark"].includes(value),
            },
        },
    };
</script>

<template>
    <section class="section" :class="[theme ? `section--${theme}` : '']">
        <header class="section__header">
            <h2 v-if="title" class="section__title">{{ title }}</h2>
            <span v-if="subtitle" class="section__subtitle">{{ subtitle }}</span>
        </header>
        <slot></slot>
    </section>
</template>

<style lang="scss">
    .section {
        padding: 60px 0;
        &__header {
            margin-bottom: 40px;
            padding: 0 10px;
            text-align: center;
        }
        &__title {
            margin: 0 0 15px;
            color: #ffffff;
            font-size: 48px;
        }
        &__title--dark {
            color: $color-dark-gray;
        }
        &__subtitle {
            display: block;
            color: $color-medium-gray;
            font-size: 28px;
        }
        &__subtitle--dark {
            color: $color-medium-dark-gray;
        }
    }
    .section--dark {
        background-color: $color-dark-gray;
    }

    @media (max-width: $desktop-small) {
        .section {
            padding: 30px 0;
            &__header {
                margin-bottom: 20px;
            }
            &__title {
                font-size: 32px;
            }
            &__subtitle {
                font-size: 20px;
            }
        }
    }

    @media (max-width: $mobile-large) {
        .section {
            padding: 20px 0;
            &__header {
                margin-bottom: 10px;
            }
            &__title {
                font-size: 24px;
            }
            &__subtitle {
                font-size: 18px;
            }
        }
    }
</style>
