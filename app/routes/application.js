import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller){
    if(this.get('router.url') == '/'){
      controller.transitionToRoute('list');
    }
  }
});
