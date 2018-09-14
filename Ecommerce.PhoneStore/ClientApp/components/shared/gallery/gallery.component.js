var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
let GalleryComponent = class GalleryComponent extends Vue {
    constructor() {
        super();
        this.index = 0;
    }
    created() {
        this.index = this.idx;
    }
    close() {
        this.$emit('close');
    }
    prev() {
        this.index -= 1;
        if (this.index < 0) {
            this.index = this.items.length - 1;
        }
    }
    next() {
        this.index += 1;
        if (this.index > this.items.length - 1) {
            this.index = 0;
        }
    }
};
__decorate([
    Prop({ required: true })
], GalleryComponent.prototype, "items", void 0);
__decorate([
    Prop({ required: true })
], GalleryComponent.prototype, "idx", void 0);
GalleryComponent = __decorate([
    Component
], GalleryComponent);
export default GalleryComponent;
//# sourceMappingURL=gallery.component.js.map