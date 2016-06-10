import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  newPerson: false,
  peopleList: [],
  getPeople: function(){
    let controller = this;
    this.store.findAll('person').then(function(data){
      controller.set('peopleList', data);
    });
  },
  actions: {
    addNewPerson: function(){
      if(!this.get('newPerson')){
        this.set('newPerson', true);
        this.set('model', this.store.createRecord('person'));
      }
    },
    setPerson: function(person){
      this.set('model', person);
      this.set('newPerson', false);
    },
    removePerson: function(person){
      let controller = this;
      if(confirm('Are you sure you want to delete this '+ person.get('name') +'?')){
        person.destroyRecord().then(function(){
          controller.set('model', null);
          controller.set('application.message', 'Person has been deleted');
        });
      }
    },
    savePerson: function(){
      let controller = this;
      
      if(this.get('model.name') && this.get('model.contact')){
        if(this.get('newPerson')){
          this.set('model.dateCreated', Date.now());
        }
      
        this.set('model.lastUpdated', Date.now());
        this.get('model').save().then(function(){
          controller.set('newPerson', false);
        });
      }else{
        this.set('application.message', 'Please fill in all the required fields');
      }
    },
    checkInStatus: function(option){
      let controller = this;
      
      var person = this.get('model');
      
      person.set('checkedIn', option);
      if(!this.get('newPerson')){
        person.save().then(function(){
          controller.set('application.message', 'Check in status changed');
        });
      }
    }
  }
});
