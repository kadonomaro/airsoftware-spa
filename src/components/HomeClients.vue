<script>
    export default {
        name: "HomeClients",
    };
</script>

<template>
    <div class="clients">
        <div class="clients__slider">
            <div class="clients-slider">
                <div class="clients-slider__wrapper js-clients-slider">
                    <div class="clients-slider__slide">
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/auto-speed.png"
                            alt="auto speed"
                        />
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/baby-swim.png"
                            alt="baby swim"
                        />
                    </div>

                    <div class="clients-slider__slide">
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/beauty-box.png"
                            alt="beauty box"
                        />
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/fast-banana.png"
                            alt="fast banana"
                        />
                    </div>

                    <div class="clients-slider__slide">
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/greens-food-suppliers.png"
                            alt="greens food suppliers"
                        />
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/james-and-sons.png"
                            alt="james and sons"
                        />
                    </div>

                    <div class="clients-slider__slide">
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/space-cube.png"
                            alt="space cube"
                        />
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/the-dance-studio.png"
                            alt="the dance studio"
                        />
                    </div>

                    <div class="clients-slider__slide">
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/the-web-works.png"
                            alt="the web works"
                        />
                        <img
                            class="clients-slider__image"
                            src="dist/assets/image/clients/yoga-baby.png"
                            alt="yoga baby"
                        />
                    </div>
                </div>
                <!--clients-slider__wrapper-->
            </div>
        </div>

        <div class="clients__order">
            <button class="button" data-target-modal="order-modal">Присоединиться</button>
        </div>
    </div>
    <!-- /.clients-->
</template>

<style lang="scss">
    .clients {
        &__slider {
            margin-bottom: 60px;
        }
        &__order {
            text-align: center;
        }
    }

    .clients-slider {
        &__slide {
            width: 450px;
            margin: 0 10px;
        }
        &__image {
            display: block;
            margin-bottom: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            &:first-child {
                transform: translateX(-50%);
            }
        }
    }

    @media (max-width: $desktop-small) {
        .clients {
            &__slider {
                margin-bottom: 30px;
            }
        }

        .clients-slider {
            &__slide {
                max-width: 300px;
            }
        }
    }

    @media (max-width: $tablet-small) {
        .clients {
            &__slider {
                margin-bottom: 10px;
            }
        }
    }

    @media (max-width: $mobile-large) {
        .clients-slider {
            &__slide {
                max-width: 200px;
                margin: 0 5px;
            }
            &__image {
                margin-bottom: 10px;
            }
        }
    }
</style>
