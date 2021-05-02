<script>
    import AppHeader from "./components/AppHeader";
    export default {
        components: { AppHeader },
    };
</script>

<template>
    <div id="app">
        <app-header></app-header>
        <router-view />
    </div>
</template>
