import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  username: DS.attr('string'),
  adress: DS.attr(),

  post: DS.hasMany('post')
});