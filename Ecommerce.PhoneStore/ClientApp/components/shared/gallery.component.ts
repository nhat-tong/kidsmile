import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class GalleryComponent extends Vue {
    @Prop({ required: true })
    items: any;
    @Prop({ required: true })
    idx: number;
    index: number = 0;

    constructor() {
        super();
    }

    created() {
        this.index = this.idx;
    }

    close() {
        this.$emit('close');
    }

    prev() {
        this.index -= 1;
        if(this.index < 0) {
            this.index = this.items.length - 1;
        }
    }

    next() {
        this.index += 1;
        if (this.index > this.items.length - 1) {
            this.index = 0;
        }
    }
}