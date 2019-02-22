import CatalogComponent from '../components/catalog/catalog.component.vue'; 
import ProductDetailComponent from '../components/product/product-detail.component.vue';
import CartComponent from '../components/cart/cart.component.vue';
import CheckoutComponent from '../components/checkout/checkout.component.vue';
import AdminComponent from '../components/admin/admin.component.vue';
import AdminOrderComponent from '../components/admin/order/admin-order.component.vue';
import AccountComponent from '../components/account/account.component.vue';
import AdminProductComponent from '../components/admin/product/admin-product.component.vue';
import CreateProductComponent from '../components/admin/product/create-product.component.vue';

const routes = [
    { path: '/products', component: CatalogComponent },
    { path: '/products/:slug', component: ProductDetailComponent },
    { path: '/cart', component: CartComponent },
    {
        path: '/checkout',
        component: CheckoutComponent,
        meta: { requiresAuth: true }
    },
    {
        path: '/account',
        component: AccountComponent,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin',
        component: AdminComponent,
        meta: { requiresAuth: true },
        redirect: '/admin/order',
        children: [
            {
                path: 'order',
                component: AdminOrderComponent
            },
            {
                path: 'product',
                component: AdminProductComponent
            },
            {
                path: 'product/create',
                component: CreateProductComponent
            }
        ]
    },
    { path: '*', redirect: '/products'}];

export default routes;