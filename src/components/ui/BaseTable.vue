<script>
    export default {
        name: "BaseTable",
    };
</script>

<template>
    <div class="table-wrapper">
        <table class="table">
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
    .table-wrapper {
        width: 100%;
        overflow-x: auto;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
        tr {
            border-bottom: 2px solid $color-dark-gray;
        }
        td {
            padding: 15px 20px;
            text-align: center;
            &:first-child {
                width: 350px;
                padding: 15px 20px 15px 5px;
                text-align: left;
            }
        }
        svg {
            vertical-align: middle;
        }
    }

    @media (max-width: $mobile-large) {
        .table {
            td {
                padding: 5px;
                &:first-child {
                    width: auto;
                    padding: 5px;
                    text-align: left;
                }
            }
        }
    }
</style>
