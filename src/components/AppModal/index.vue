<script>
    import { scrollState } from "@/utils/scrollState";
    export default {
        name: "AppModal",
        data() {
            return {
                opened: false,
                name: null,
                props: null,
            };
        },
        methods: {
            show({ nameOrComponent, props }) {
                this.name = nameOrComponent;
                this.props = props;
                this.opened = true;
                window.addEventListener("keyup", this.onEscapeKeyUp);
                scrollState.disable();
            },
            close() {
                this.opened = false;
                window.removeEventListener("keyup", this.onEscapeKeyUp);
                scrollState.enable();
            },
            onEscapeKeyUp({ key }) {
                if (key === "Escape") {
                    this.close();
                }
            },
        },
        mounted() {
            this.$eventBus.$on("popup-show", this.show);
            this.$eventBus.$on("popup-close", this.close);
            window.addEventListener("popstate", () => {
                this.close();
            });
        },
        beforeDestroy() {
            this.$eventBus.$off("popup-show", this.show);
            this.$eventBus.$off("popup-close", this.close);
            window.removeEventListener("popstate ", () => {});
        },
    };
</script>

<template>
    <transition name="popup">
        <div v-if="opened" class="base-popup-overlay">
            <div class="base-popup-container" @click.self="close">
                <div class="base-popup">
                    <button class="base-popup__close" @click="close">
                        <svg
                            fill="#303030"
                            width="100%"
                            height="100%"
                            viewBox="0 0 18 18"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <path
                                d="M10.415 9L15 13.584 13.587 15 9 10.415 4.413 15 3 13.584 7.585 9 3 4.416 4.413 3 9 7.585 13.587 3 15 4.416 10.415 9z"
                            ></path>
                        </svg>
                    </button>
                    <div class="base-popup__content">
                        <div :is="name" v-bind="props"></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .base-popup-overlay {
        position: fixed;
        z-index: 2001;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(#000000, 0.7);
    }
    .base-popup-container {
        width: 100%;
        height: 100%;
        padding: 10px;
        outline: none;
        overflow-y: auto;
        box-sizing: border-box;
    }
    .base-popup {
        position: relative;
        max-width: 350px;
        margin: 30px auto 10px;
        padding: 25px;
        background-color: #fff;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
    }
    .base-popup__close {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        padding: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .base-popup__header {
        padding-right: 10px;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 24px;
    }
    .base-popup__body {
        margin-bottom: 10px;
    }
    .popup-enter-active,
    .popup-leave-active {
        transition: opacity 0.2s;
    }
    .popup-enter,
    .popup-leave-to {
        opacity: 0;
    }
</style>
