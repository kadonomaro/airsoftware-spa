<script>
    export default {
        name: "BlogSubscribe",
    };
</script>

<template>
    <section class="blog">
        <div class="blog__text">
            <h2 class="blog__title">Index Word</h2>
            <span class="blog__subtitle">Очередной ИТ блог обо всем</span>
            <a
                class="base-button base-button--small blog__link"
                href="https://index-word.web.app/"
                rel="noopener noreferrer"
                target="_blank"
                >Читать</a
            >
        </div>
    </section>
</template>

<style lang="scss">
    .blog {
        position: relative;
        color: #ffffff;
        background-color: $color-darkest;
        border: solid #000000;
        border-width: 2px 0 2px 0;
        &::before {
            content: "";
            position: absolute;
            left: 40%;
            right: 0;
            height: 100%;
            background-image: url("~@/assets/images/social-media.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }
        &__text {
            position: relative;
            z-index: 5;
            max-width: 40%;
            padding: 60px 10px;
            text-align: center;
            box-sizing: border-box;
        }
        &__title {
            margin: 0 0 10px;
            font-size: 30px;
        }
        &__subtitle {
            display: block;
            margin-bottom: 30px;
            color: $color-medium-gray;
            font-size: 18px;
        }
        &__link {
            text-decoration: none;
        }
    }

    @media (max-width: $mobile-large) {
        .blog {
            &::before {
                left: 0;
            }
            &__text {
                max-width: 100%;
            }
        }
    }
</style>
