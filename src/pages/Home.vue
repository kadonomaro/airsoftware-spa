<script>
    import HomeHero from "@/components/HomeHero";
    import SectionWrapper from "@/components/SectionWrapper";
    import HomeClients from "@/components/HomeClients";
    import HomeAbout from "@/components/HomeAbout";
    export default {
        name: "Home",
        components: { HomeAbout, HomeClients, SectionWrapper, HomeHero },
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
    </div>
</template>
