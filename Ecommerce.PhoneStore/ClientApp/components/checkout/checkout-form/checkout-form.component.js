var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
let CheckoutFormComponent = class CheckoutFormComponent extends Vue {
    constructor() {
        super();
        this.loading = false;
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.address2 = '';
        this.townCity = '';
        this.country = '';
        this.postCode = '';
        this.nameOnCard = '';
        //@ts-ignore
        this.stripe = Stripe(window.stripeOptions.publishableKey);
        this.stripeCard = null;
        this.paymentError = null;
    }
    mounted() {
        this.stripeCard = this.stripe.elements().create('card', { style: { base: { lineHeight: "24px" } } });
        this.stripeCard.mount(this.$refs.card);
    }
    beforeDestroy() {
        this.stripeCard.destroy();
    }
    state(field) {
        if (this.errors.has(field)) {
            return false;
        }
        else {
            return this.fields[field] && this.fields[field].dirty ? true : null;
        }
    }
    submit() {
        this.$validator.validateAll().then(result => {
            if (!result) {
                this.loading = false;
                return;
            }
            this.loading = true;
            this.stripe.createToken(this.stripeCard, { name: this.nameOnCard }).then(result => {
                if (result.error) {
                    this.loading = false;
                    return;
                }
                const order = {
                    stripeToken: result.token.id,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    address1: this.address,
                    address2: this.address2,
                    townCity: this.townCity,
                    county: this.country,
                    postCode: this.postCode,
                    items: this.$store.state.cartModule.cart.map(item => {
                        return {
                            productId: item.productId,
                            colourId: item.colourId,
                            storageId: item.storageId,
                            quantity: item.quantity
                        };
                    })
                };
                axios.post('/order', order)
                    .then(response => {
                    this.$store.commit('cartModule/clearCart');
                    this.$emit('success', response.data);
                    this.loading = false;
                })
                    .catch(error => {
                    this.loading = false;
                    this.paymentError = error.response;
                });
            });
        });
    }
};
CheckoutFormComponent = __decorate([
    Component
], CheckoutFormComponent);
export default CheckoutFormComponent;
//# sourceMappingURL=checkout-form.component.js.map