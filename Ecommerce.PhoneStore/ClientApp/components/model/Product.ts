export class Product {
    name: string;
    shortDescription: string;
    description: string;
    talkTime: string;
    standbyTime: string;
    screenSize: string;
    brand: string;
    os: string;
    features: Array<string>;
    variants: Array<string>;

    constructor() {
        this.name = '';
        this.shortDescription = '';
        this.description = '';
        this.talkTime = '';
        this.standbyTime = '';
        this.screenSize = '';
        this.brand = '';
        this.os = '';
        this.features = [];
        this.variants = [];
    }
}