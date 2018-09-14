import CatalogComponent from '../components/catalog/catalog.component.vue'; 
import ProductDetailComponent from '../components/product/product-detail.component.vue';
import CartComponent from '../components/cart/cart.component.vue';
import CheckoutComponent from '../components/checkout/checkout.component.vue';

const routes = [
    { path: '/products', component: CatalogComponent },
    { path: '/products/:slug', component: ProductDetailComponent },
    { path: '/cart', component: CartComponent },
    { path: '/checkout', component: CheckoutComponent },
    { path: '*', redirect: '/products'}];

export default routes;