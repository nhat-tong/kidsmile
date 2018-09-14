import CatalogComponent from '../components/catalog/catalog.component.vue'; 
import ProductDetailComponent from '../components/product/product-detail.component.vue';
import CartComponent from '../components/cart/cart.component.vue';

const routes = [
    { path: '/products', component: CatalogComponent },
    { path: '/products/:slug', component: ProductDetailComponent },
    { path: '/cart', component: CartComponent },
    { path: '*', redirect: '/products'}];

export default routes;