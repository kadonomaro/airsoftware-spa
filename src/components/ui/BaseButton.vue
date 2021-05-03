<script>
    export default {
        name: "BaseButton",
        props: {
            disabled: Boolean,
            size: {
                type: String,
                validator: (value) => ["small"].includes(value),
            },
        },
        computed: {
            className() {
                return [
                    this.disabled ? "base-button--disabled" : "",
                    this.size ? `base-button--${this.size}` : "",
                ].filter(Boolean);
            },
        },
        methods: {
            clickHandler() {
                this.$emit("click");
            },
        },
    };
</script>

<template>
    <button class="base-button" :class="className" @click="clickHandler">
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .base-button {
        margin: 0;
        padding: 10px 30px;
        color: $color-dark-gray;
        font-family: inherit;
        font-size: 18px;
        background-color: $color-accent;
        border: 2px solid $color-accent;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.1s ease-in, color 0.1s ease-in,
            border-color 0.1s ease-in;
        &:hover {
            color: $color-accent;
            background-color: transparent;
            border-color: $color-accent;
        }
    }
    .base-button--small {
        padding: 5px 20px;
    }
    .base-button--disabled {
        background-color: $color-input;
        border: 2px solid $color-input;
        cursor: initial;
        &:hover {
            color: $color-dark-gray;
            background-color: $color-input;
            border-color: $color-input;
        }
    }

    @media (max-width: $tablet-small) {
        .base-button {
            padding: 15px 25px;
        }
    }

    @media (max-width: $mobile-large) {
        .base-button {
            padding: 10px 20px;
            font-size: 16px;
        }
    }
</style>
