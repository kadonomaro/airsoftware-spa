<script>
    import Swiper from "swiper/swiper-bundle.min";
    export default {
        name: "HomeClients",
        data() {
            return {
                slider: null,
                slides: [
                    ["auto-speed", "baby-swim"],
                    ["beauty-box", "fast-banana"],
                    ["greens-food-suppliers", "james-and-sons"],
                    ["space-cube", "the-dance-studio"],
                    ["the-web-works", "yoga-baby"],
                ],
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.slider = new Swiper(".js-clients-slider", {
                    autoplay: true,
                    slidesPerView: 4,
                    spaceBetween: 20,
                });
            });
        },
    };
</script>

<template>
    <div class="clients">
        <div class="clients__slider">
            <div class="clients-slider">
                <div class="clients-slider__wrapper js-clients-slider">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(group, groupIndex) in slides"
                            :key="groupIndex"
                        >
                            <div class="clients-slider__slide">
                                <div
                                    v-for="(slide, slideIndex) in group"
                                    :key="slideIndex"
                                    class="clients-slider__image"
                                >
                                    <img
                                        :src="require(`@/assets/images/clients/${slide}.png`)"
                                        :alt="slide"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="clients__order">
            <button class="button" data-target-modal="order-modal">Присоединиться</button>
        </div>
    </div>
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
        &__image {
            position: relative;
            padding-bottom: 75%;
            margin-bottom: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            &:first-child {
                transform: translateX(-50%);
            }
            img {
                position: absolute;
                top: 50%;
                padding: 10px;
                transform: translateY(-50%);
                box-sizing: border-box;
            }
        }
    }

    @media (max-width: $desktop-small) {
        .clients {
            &__slider {
                margin-bottom: 30px;
            }
        }

        //.clients-slider {
        //    &__slide {
        //        max-width: 300px;
        //    }
        //}
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
