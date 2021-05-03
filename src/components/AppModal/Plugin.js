import Vue from "vue";

Vue.use({
    install(Vue) {
        Vue.prototype.$popup = {
            show(nameOrComponent, props, options) {
                Vue.prototype.$eventBus.$emit("popup-show", {
                    nameOrComponent,
                    props,
                    options,
                });
            },
            close() {
                Vue.prototype.$eventBus.$emit("popup-close");
            },
        };
    },
});
