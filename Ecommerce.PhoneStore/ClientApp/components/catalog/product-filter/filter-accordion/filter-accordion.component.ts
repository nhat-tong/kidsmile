import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as Velocity from "velocity-animate";

@Component
export default class FilterAccordionComponent extends Vue {
    open: boolean = true;

    constructor() {
        super();
    }

    onEnter(el, done) {
        Velocity(el, "slideDown", {
            duration: 200,
            easing: "ease-in-out",
            complete: done
        });
    }

    onLeave(el, done) {
        Velocity(el, "slideUp", {
            duration: 250,
            easing: "ease-in-out",
            complete: done
        });
    }
}