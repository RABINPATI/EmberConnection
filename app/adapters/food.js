import RESTAdapter from '@ember-data/adapter/rest';

export default class FoodAdapter extends RESTAdapter{
    host = " http://localhost:4600"
    namespace = "api"
}