<script>
    import { metaInfo } from "@/libs/MetaInfo";
    import AppHeader from "./components/AppHeader";
    import AppModal from "@/components/AppModal";
    import AppFooter from "@/components/AppFooter";

    export default {
        components: { AppFooter, AppModal, AppHeader },
        metaInfo() {
            return metaInfo.get("home");
        },
    };
</script>

<template>
    <div id="app">
        <app-header></app-header>
        <router-view />
        <app-modal></app-modal>
        <app-footer></app-footer>
    </div>
</template>
