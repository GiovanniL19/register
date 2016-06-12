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
      if(controller.get('model')){
        controller.get('model').deleteRecord();
      }
    }
    
    controller.get('peopleList').forEach(function(person){
      person.set('isSelected', false);
    });
  }
});
