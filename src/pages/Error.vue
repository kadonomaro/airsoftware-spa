<script>
    import Canvas2D from "@/libs/Canvas2D";

    export default {
        name: "Error",
        mounted() {
            this.canvasAnimation();
        },
        methods: {
            canvasAnimation() {
                const canvas = new Canvas2D({
                    canvas: document.querySelector(".js-404-canvas"),
                    width: window.innerWidth,
                    height: window.innerHeight,
                });

                const isDesktop = window.innerWidth > 767;

                canvas.drawFromImage({
                    image: isDesktop ? "/static/404.jpg" : "/static/404__mobile.jpg",
                    font: isDesktop ? "bold 14px Roboto" : "bold 8px Roboto",
                    ASCIICharRange: isDesktop ? [65, 122] : [7, 7],
                    cell: {
                        width: isDesktop ? 15 : 5,
                        height: isDesktop ? 15 : 5,
                    },
                    colors: ["#cdcdcd", "#b4b4b4", "#9b9b9b", "#828282"],
                    delay: 10,
                });
            },
        },
    };
</script>

<template>
    <main class="hero">
        <canvas class="hero__canvas js-404-canvas"></canvas>
        <div class="hero__404">
            <h1 class="hero__title-404">К сожалению запрашиваемая страница не найдена</h1>
            <span class="hero__subtitle-404"
                >Пока мы работаем над этой проблемой вы можете посетить другие страницы</span
            >
        </div>
    </main>
</template>

<style lang="scss">
    @import "~@/assets/css/hero.scss";
</style>
