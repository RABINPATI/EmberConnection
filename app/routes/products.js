import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
    async model() {
        return this.store.findAll('product');
}
}
