import Vue from "vue";

const EventBus = new Vue();

Vue.$eventBus = EventBus;

if (!Vue.prototype.$eventBus) {
    Object.defineProperties(Vue.prototype, {
        $eventBus: {
            get() {
                return EventBus;
            },
        },
    });
}
