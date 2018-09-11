export class AuthState {
    auth: any;
    showAuthModal: boolean;
    loading: boolean;

    constructor() {
        this.auth = null;
        this.showAuthModal = false;
        this.loading = false;
    }
}

export class CartState {
    cart: any;

    constructor() {
        this.cart = [];
    }
}
