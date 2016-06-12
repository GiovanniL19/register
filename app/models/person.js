import DS from 'ember-data';

export default DS.Model.extend({
  dateCreated: DS.attr('number'),
  lastUpdated: DS.attr('number'),
  name: DS.attr('string'),
  profilePicture: DS.attr(),
  contact: DS.attr('string'),
  checkedIn: DS.attr('boolean', {defaultValue: false}),
  
  isCheckedIn: function(){
    if(this.get('checkedIn')){
      return true;
    }{
      return false;
    }
  }.property('checkedIn'),
  isCheckedOut: function(){
    if(!this.get('checkedIn')){
      return true;
    }else{
      return false;
    }
  }.property('checkedIn'),
  isSelected: function(){
    return false;
  }.property()
  
});
