import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  actions: {
    checkIn: function(option, person){
      let controller = this;
      person.set('checkedIn', option);
      person.save().then(function(){
        controller.set('application.message', person.get('name') + '\'s in status updated');
      });
    }
  }
});
