import { isMobile } from "@/utils/index";

class ScrollState {
    constructor() {
        this.numberOpen = 0;
        this.timeout = 200;
    }

    disable() {
        if (typeof window !== "undefined") {
            if (isMobile()) {
                this.mobileDisable();
            } else {
                this.desktopDisable();
            }
        }
    }

    enable() {
        if (typeof window !== "undefined") {
            if (isMobile()) {
                this.mobileEnable();
            } else {
                this.desktopEnable();
            }
        }
    }

    desktopDisable() {
        const offsetY = window.pageYOffset || document.documentElement.scrollTop;
        window.onscroll = function () {
            window.scrollTo(0, offsetY);
        };
        this.addStyle();
    }

    desktopEnable() {
        window.onscroll = null;
        this.removeStyle();
    }

    increaseNumberOpen() {
        this.numberOpen++;
    }

    decreaseNumberOpen() {
        this.numberOpen--;
    }

    resetNumberOpen() {
        this.numberOpen = 0;
    }

    mobileDisable() {
        const offsetY = window.pageYOffset || document.documentElement.scrollTop;
        document.body.dataset.topPosition = offsetY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${offsetY}px`;
        document.body.style.overflow = "hidden";
        document.body.style.width = "100%";
        this.increaseNumberOpen();
    }

    mobileEnable() {
        if (this.numberOpen > 1) {
            this.decreaseNumberOpen();
            return false;
        }
        this.resetNumberOpen();
        document.body.style.position = null;
        document.body.style.top = null;
        document.body.style.overflow = null;
        document.body.style.width = null;
        window.scrollTo(0, document.body.dataset.topPosition);
        setTimeout(() => {
            document.body.removeAttribute("data-top-position");
        }, 100);
    }

    addStyle() {
        const elements = document.querySelectorAll("[data-fix-on-scroll]");
        elements.forEach((elem) => {
            if (elem.classList.contains("fix-scroll-block")) {
                elem.style.width = `calc(100% - ${this.getScrollbarWidth()}px)`;
            }
        });
        // elements.forEach((element) => (element.style.right = this.getScrollbarWidth() + "px"));
        document.body.style.paddingRight = this.getScrollbarWidth() + "px";
        document.body.classList.add("modal-is-open");
    }

    removeStyle() {
        setTimeout(() => {
            const elements = document.querySelectorAll("[data-fix-on-scroll]");
            // elements.forEach((element) => (element.style.right = null));
            elements.forEach((elem) => (elem.style.width = "100%"));
            document.body.style.paddingRight = null;
            document.body.classList.remove("modal-is-open");
        }, this.timeout / 2);
    }

    getScrollbarWidth() {
        // Creating invisible container
        const outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.overflow = "scroll"; // forcing scrollbar to appear
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
        document.body.appendChild(outer);

        // Creating inner element and placing it in the container
        const inner = document.createElement("div");
        outer.appendChild(inner);

        // Calculating difference between container's full width and the child width
        const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
    }
}

export const scrollState = new ScrollState();
