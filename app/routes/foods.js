import Route from '@ember/routing/route';

export default class FoodsRoute extends Route {
    async model() {
        return this.store.findAll('food');
}
}
