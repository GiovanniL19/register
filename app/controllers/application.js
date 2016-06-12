import Ember from 'ember';

export default Ember.Controller.extend({
  message: '',
  settings: null,
  messagesListen: function(){
    let controller = this;
    if(this.get('message')){
      setTimeout(function(){
        controller.set('message', '');
      }, 3000);
    }
  }.observes('message'),
  actions:{
    dismissMessage: function(){
      this.set('message', '');
    }
  }
});
