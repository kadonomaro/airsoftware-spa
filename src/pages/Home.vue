<script>
    import { metaInfo } from "@/libs/MetaInfo";
    import HomeHero from "@/components/HomeHero";
    import SectionWrapper from "@/components/common/SectionWrapper";
    import HomeClients from "@/components/HomeClients";
    import HomeAbout from "@/components/HomeAbout";
    import HomeProducts from "@/components/HomeProducts";
    import BlogSubscribe from "@/components/common/BlogSubscribe";
    import HomeStages from "@/components/HomeStages";
    import OurTeam from "@/components/common/OurTeam";

    export default {
        name: "Home",
        components: {
            OurTeam,
            HomeStages,
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

        <section-wrapper title="Этапы работы" subtitle="От нуля до результата" theme="dark">
            <home-stages></home-stages>
        </section-wrapper>

        <blog-subscribe></blog-subscribe>

        <section-wrapper
            title="Наша команда"
            subtitle="Поможем воплотить ваши самые смелые желания в реальность"
            theme="dark"
        >
            <our-team :members-to-show="3"></our-team>
        </section-wrapper>
    </div>
</template>
