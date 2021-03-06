import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('name');
  this.route('hotels');
  this.route('detail', {path: '/detail/:hotel_id/rooms/:room_id'});
});

export default Router;
