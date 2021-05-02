<script>
    import Canvas2D from "../libs/Canvas2D";

    export default {
        name: "HomeHero",
        data() {
            return {
                isAnimatedText: false,
            };
        },
        mounted() {
            setTimeout(() => (this.isAnimatedText = true), 100);
            this.canvasAnimation();
        },
        methods: {
            canvasAnimation() {
                const canvas = new Canvas2D({
                    canvas: this.$refs["hero-canvas"],
                    width: window.innerWidth,
                    height: window.innerHeight,
                });

                canvas.drawText({
                    font: "bold 16px Roboto",
                    ASCIICharRange: [65, 122],
                    cell: {
                        width: 20,
                        height: 20,
                    },
                    colors: ["#9b9b9b", "#828282", "#696969", "#505050"],
                    delay: window.innerWidth <= 767 ? 50 : 10,
                });
            },
        },
    };
</script>

<template>
    <section class="hero">
        <canvas class="hero__canvas" ref="hero-canvas"></canvas>
        <div class="hero__body">
            <h1 class="hero__title" :class="{ 'hero__title--fade-in': isAnimatedText }">
                Airsoftware
            </h1>
            <span class="hero__subtitle" :class="{ 'hero__subtitle--fade-in': isAnimatedText }"
                >Современные решения для бизнеса</span
            >
        </div>
    </section>
</template>

<style lang="scss">
    .hero {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin-top: -80px;
        &__canvas {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            max-width: 100%;
            height: 100%;
            background-color: #101010;
        }
        &__body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-grow: 1;
            overflow: hidden;
        }
        &__title,
        &__subtitle {
            width: 100%;
            max-width: 600px;
            padding: 10px 15px;
            text-align: center;
            transition: transform 0.7s ease-in, opacity 1.2s ease-in;
            opacity: 0;
            box-sizing: border-box;
        }
        &__title {
            margin: 0 auto;
            color: #303030;
            font-size: 44px;
            background-color: #ffffff;
            transform: translateX(-100%);
        }
        &__title--fade-in {
            transform: translateX(-10%);
            opacity: 1;
        }
        &__subtitle {
            display: block;
            margin: 0 auto;
            color: #ffffff;
            font-size: 28px;
            background-color: #303030;
            transform: translateX(100%);
            transition-delay: 0.7s;
        }
        &__subtitle--fade-in {
            transform: translateX(10%);
            opacity: 1;
        }
        &__404 {
            position: absolute;
            bottom: 60px;
            width: 100%;
            padding: 0 10px;
            color: $color-light-gray;
            text-align: center;
            box-sizing: border-box;
        }
        &__title-404 {
            margin: 0 0 20px;
        }
        &__subtitle-404 {
            display: block;
            font-size: 20px;
        }
    }

    @media (max-width: $tablet-small) {
        .hero {
            &__title,
            &__subtitle {
                max-width: 400px;
            }
        }
    }

    @media (max-width: $mobile-large) {
        .hero {
            &__title,
            &__subtitle {
                max-width: 100%;
            }
            &__title {
                font-size: 30px;
            }
            &__subtitle {
                font-size: 20px;
            }
            &__title--fade-in,
            &__subtitle--fade-in {
                transform: translateX(0);
            }
            &__title-404 {
                font-size: 24px;
            }
            &__subtitle-404 {
                font-size: 18px;
            }
            &__body {
                padding: 10px;
            }
        }
    }
</style>
