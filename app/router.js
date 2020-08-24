import EmberRouter from '@ember/routing/router';
import config from 'embernew-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('contact',{path:'reach-us'});
  this.route('people', {path:'key-people'});
  this.route('products',{path:'/product-menu'});
  this.route('hotel');
});
