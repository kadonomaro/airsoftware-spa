<script>
    import AppNav from "@/components/AppNav";
    export default {
        name: "AppHeader",
        components: { AppNav },
        computed: {
            isHomePage() {
                return this.$route.name === "Home";
            },
        },
    };
</script>

<template>
    <header class="page-header">
        <div class="page-header__logo">
            <div class="logo">
                <div class="logo__image">
                    <img
                        v-if="isHomePage"
                        :src="require('@/assets/images/logo.svg')"
                        alt="Airsoftware"
                    />
                    <router-link v-else class="logo__link" :to="{ name: 'Home' }">
                        <img :src="require('@/assets/images/logo.svg')" alt="Airsoftware" />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="page-header__nav">
            <app-nav></app-nav>
        </div>
        <div class="page-header__order">
            <button class="button" data-target-modal="order-modal">Присоединиться</button>
        </div>
    </header>
</template>

<style lang="scss">
    .page-header {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        color: #ffffff;
        background-color: rgba(#000000, 0.7);
        &__logo {
            flex-basis: 300px;
        }
        &__nav {
            margin: 0 10px;
        }
        &__order {
            flex-basis: 300px;
            align-self: center;
            text-align: right;
        }
    }

    @media (max-width: $tablet-small) {
        .page-header {
            padding: 10px;
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            right: 0;
            &__nav {
                margin: 0;
            }
            &__logo {
                max-width: 60px;
            }
            &__order {
                display: none;
            }
        }
    }
</style>
