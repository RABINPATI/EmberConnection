import Route from '@ember/routing/route';

export default class HotelRoute extends Route {

    async model() {
        return this.store.findAll('hotel');
}
}
