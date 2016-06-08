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
    }
  }
});
