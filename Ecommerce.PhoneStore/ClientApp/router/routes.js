import CatalogComponent from '../components/catalog/catalog.component.vue';
import ProductDetailComponent from '../components/product/product-detail.component.vue';
import CartComponent from '../components/cart/cart.component.vue';
import CheckoutComponent from '../components/checkout/checkout.component.vue';
import AdminComponent from '../components/admin/admin.component.vue';
import AdminOrderComponent from '../components/admin/order/admin-order.component.vue';
import AccountComponent from '../components/account/account.component.vue';
const routes = [
    { path: '/products', component: CatalogComponent },
    { path: '/products/:slug', component: ProductDetailComponent },
    { path: '/cart', component: CartComponent },
    { path: '/checkout', component: CheckoutComponent },
    { path: '/account', component: AccountComponent },
    {
        path: '/admin',
        component: AdminComponent,
        redirect: '/admin/order',
        children: [
            {
                path: 'order',
                component: AdminOrderComponent
            }
        ]
    },
    { path: '*', redirect: '/products' }
];
export default routes;
//# sourceMappingURL=routes.js.map