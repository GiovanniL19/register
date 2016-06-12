import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  newPerson: false,
  peopleList: [],
  noModel: function(){
    this.set('newPerson', false);
  }.observes('model'),
  getPeople: function(){
    let controller = this;
    this.store.findAll('person').then(function(data){
      controller.set('peopleList', data);
    });
  },
  actions: {
    fileLoaded: function(file) {
      let controller = this;
      if(file.type.indexOf('image') === -1 && file.size > 2000){
        controller.set('application.message', 'You can only upload an image no more than 2mb');
      }else{
        this.set('model.profilePicture', Ember.Object.create(file));
      }
    },
    addNewPerson: function(){
      if(!this.get('newPerson')){
        this.set('newPerson', true);
        this.set('model', this.store.createRecord('person'));
      }
    },
    setPerson: function(person){
      if(this.get('newPerson')){
        this.get('model').deleteRecord();
      }
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
          controller.set('application.message', 'Person saved');
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
