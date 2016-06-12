import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  defaultOptions: [
    '#354288',
    '#bf3c3c',
    '#358841',
    '#ad3c9c',
    '#2b2b2b'
  ],
  settingsUpdate: function(){
    let controller = this;
    this.get('application.settings').save().then(function(){
      controller.set('application.message', 'Settings updated')
    });
  }.observes('application.settings.theme')
});
