<script>
    export default {
        name: "BaseTabs",
        props: {
            initialTabIndex: Number,
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
            tabHeadCount() {
                return Object.keys(this.$slots).filter((slot) =>
                    slot.startsWith("tab-trigger")
                );
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
        mounted() {
            console.log(this.$slots);
        },
    };
</script>

<template>
    <div class="base-tabs">
        <ul class="base-tabs__triggers">
            <li
                v-for="(trigger, index) in tabHeadCount"
                :key="trigger"
                class="base-tabs__trigger"
                :class="{ active: activeTabIndex === index }"
                @click="switchTab(index)"
            >
                <slot :name="tabHeadSlotName(index)"></slot>
            </li>
        </ul>

        <div class="base-tabs__panel"><slot :name="tabPanelSlotName"></slot></div>
    </div>
</template>

<style lang="scss">
    .base-tabs__triggers {
        display: flex;
        margin: 0;
        padding: 0;
        margin-left: 6px;
        margin-top: -4px;
        list-style: none;
    }

    .base-tabs__trigger {
        padding: 5px 18px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        cursor: pointer;
        &.active {
            background-color: #fff;
            color: #333;
            transition: 0.4s;
        }
    }
</style>
