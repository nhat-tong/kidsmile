var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as Velocity from "velocity-animate";
let FilterAccordionComponent = class FilterAccordionComponent extends Vue {
    constructor() {
        super();
        this.open = true;
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
};
FilterAccordionComponent = __decorate([
    Component
], FilterAccordionComponent);
export default FilterAccordionComponent;
//# sourceMappingURL=filter-accordion.component.js.map