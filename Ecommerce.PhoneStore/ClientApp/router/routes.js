import CatalogComponent from '../components/catalog/catalog.component.vue';
const routes = [
    { path: '/products', component: CatalogComponent },
    { path: '*', redirect: '/products' }
];
export default routes;
//# sourceMappingURL=routes.js.map