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
    @import "~@/assets/css/hero.scss";
</style>
