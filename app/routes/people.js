import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return null;
  },
  activate: function(){
    let controller = this.controllerFor('people');
    controller.getPeople();
  },
  deactivate: function(){
    let controller = this.get('controller');
    if(controller.get('newPerson')){
      controller.get('model').deleteRecord();
    }
  }
});
