<script>
    import AppHeader from "./components/AppHeader";
    import AppModal from "@/components/AppModal";
    export default {
        components: { AppModal, AppHeader },
    };
</script>

<template>
    <div id="app">
        <app-header></app-header>
        <router-view />
        <app-modal></app-modal>
    </div>
</template>
