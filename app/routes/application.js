import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller){
    if(this.get('router.url') === '/'){
      controller.transitionToRoute('list');
    }
    
    this.store.findAll('settings').then(function(setting){
      if(setting.get('length') !== 1){
        var settings = controller.store.createRecord('settings', {
          theme: '#354288'
        });
        settings.save().then(function(){
          controller.set('settings', settings);
        });
      }else{
        controller.set('settings', setting.get('firstObject'));
      }
    })
  }
});
