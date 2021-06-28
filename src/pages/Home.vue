<script>
    import { metaInfo } from "@/libs/MetaInfo";
    import HomeHero from "@/components/HomeHero";
    import SectionWrapper from "@/components/SectionWrapper";
    import HomeClients from "@/components/HomeClients";
    import HomeAbout from "@/components/HomeAbout";
    import HomeProducts from "@/components/HomeProducts";
    import BlogSubscribe from "@/components/BlogSubscribe";

    export default {
        name: "Home",
        components: {
            BlogSubscribe,
            HomeProducts,
            HomeAbout,
            HomeClients,
            SectionWrapper,
            HomeHero,
        },
        metaInfo() {
            return metaInfo.get("home");
        },
    };
</script>

<template>
    <div class="home">
        <home-hero></home-hero>
        <section-wrapper
            title="Уже воспользовались нашими продуктами"
            subtitle="Десятки довольных клиентов по всему миру"
            theme="dark"
        >
            <home-clients></home-clients>
        </section-wrapper>

        <section-wrapper
            title="История успеха"
            subtitle="Мы проделали путь длиною в жизнь"
            theme="dark"
        >
            <home-about></home-about>
        </section-wrapper>

        <section-wrapper
            title="Основные продукты"
            subtitle="Прежде чем выбрать, нужно сравнить"
            theme="light"
        >
            <home-products></home-products>
        </section-wrapper>

        <blog-subscribe></blog-subscribe>
    </div>
</template>
