import DS from 'ember-data';

export default DS.Model.extend({
  dateCreated: DS.attr('number'),
  lastUpdated: DS.attr('number'),
  name: DS.attr('string'),
  profilePicture: DS.attr('string'),
  contact: DS.attr('string'),
  checkedIn: DS.attr('boolean', {defaultValue: false})
});
