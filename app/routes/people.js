import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {};
  },
  activate: function(){
    let controller = this.controllerFor('people');
    controller.getPeople();
  }
});
