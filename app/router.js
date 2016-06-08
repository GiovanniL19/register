import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('side-nav');
  this.route('list');
  this.route('people');
});

export default Router;
