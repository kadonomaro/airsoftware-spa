<script>
    export default {
        name: "BaseTabs",
        props: {
            initialTabIndex: Number,
            activeTabClass: String,
            inactiveTabClass: String,
        },
        data() {
            return {
                activeTabIndex: this.initialTabIndex,
            };
        },
        computed: {
            tabPanelSlotName() {
                return `tab-panel-${this.activeTabIndex}`;
            },
            tabTriggersCount() {
                return Object.keys(this.$slots).filter((slot) =>
                    slot.startsWith("tab-trigger")
                ).length;
            },
        },
        methods: {
            tabHeadSlotName(index) {
                return `tab-trigger-${index}`;
            },
            switchTab(index) {
                this.activeTabIndex = index;
            },
        },
    };
</script>

<template>
    <div class="base-tabs">
        <ul class="base-tabs__list">
            <li v-for="index in tabTriggersCount" :key="index" class="base-tabs__item">
                <button
                    class="base-tabs__trigger"
                    :class="{
                        [`${inactiveTabClass}`]: inactiveTabClass,
                        [`${activeTabClass}`]: activeTabClass && activeTabIndex === index,
                    }"
                    @click="switchTab(index)"
                >
                    <slot :name="tabHeadSlotName(index)"></slot>
                </button>
            </li>
        </ul>

        <div class="base-tabs__panel"><slot :name="tabPanelSlotName"></slot></div>
    </div>
</template>

<style lang="scss">
    .base-tabs__list {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .base-tabs__trigger {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
</style>
