import Ember from 'ember';

export default Ember.Route.extend({
  model({user_id}) {
    return $.get(`https://jsonplaceholder.typicode.com/users/${user_id}`)
  }
});
