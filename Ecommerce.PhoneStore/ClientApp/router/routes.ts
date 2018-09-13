import CatalogComponent from '../components/catalog/catalog.component.vue'; 
import ProductDetailComponent from '../components/product/product-detail.component.vue';

const routes = [
    { path: '/products', component: CatalogComponent },
    { path: '/products/:slug', component: ProductDetailComponent },
    { path: '*', redirect: '/products'}];

export default routes;