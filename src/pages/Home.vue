<script>
    import HomeHero from "@/components/HomeHero";
    import SectionWrapper from "@/components/SectionWrapper";
    import HomeClients from "@/components/HomeClients";
    export default {
        name: "Home",
        components: { HomeClients, SectionWrapper, HomeHero },
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
    </div>
</template>
