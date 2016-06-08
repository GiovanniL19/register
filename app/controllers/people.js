import Ember from 'ember';

export default Ember.Controller.extend({
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
      if(this.get('newPerson')){
        this.set('model.dateCreated', Date.now());
      }
      
      this.set('model.lastUpdated', Date.now());
      this.get('model').save();
    }
  }
});
