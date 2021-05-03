<script>
    export default {
        name: "AppLogo",
        computed: {
            isHomePage() {
                return this.$route.name === "Home";
            },
        },
    };
</script>

<template>
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
</template>

<style lang="scss">
    .logo {
        display: flex;
        &__link {
            display: block;
            transition: filter 0.2s ease-in;
            &:hover {
                filter: drop-shadow(0 0 1px $color-accent);
            }
        }
        &__image {
            width: 100px;
            img {
                max-width: 100%;
            }
        }
    }
</style>
