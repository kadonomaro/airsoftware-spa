<script>
    export default {
        name: "FormWrapper",
    };
</script>

<template>
    <form class="form" @submit.prevent>
        <slot></slot>
    </form>
</template>

<style lang="scss">
    .form {
        &__title {
            display: block;
            margin-bottom: 10px;
            font-size: 24px;
            font-weight: bold;
        }
        &__subtitle {
            display: block;
            margin-bottom: 20px;
            font-size: 18px;
        }
        &__label {
            position: relative;
            display: block;
            width: 100%;
            margin-bottom: 20px;
        }
        &__error {
            position: absolute;
            z-index: 99;
            top: 100%;
            display: none;
            width: 100%;
            padding: 2px 5px;
            color: #ffffff;
            font-size: 12px;
            background-color: $color-danger;
            transform: translateY(-2px);
            box-sizing: border-box;
        }
        &__error--visible {
            display: block;
        }
        &__input,
        &__select {
            width: 100%;
        }
        &__textarea {
            display: block;
            width: 100%;
            min-height: 150px;
            font-size: 16px;
            resize: vertical;
        }
        &__policy {
            vertical-align: middle;
        }
    }

    @media (max-width: $mobile-small) {
        .order {
            &__label {
                margin-bottom: 10px;
            }
        }
    }
</style>
