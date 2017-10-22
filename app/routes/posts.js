import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.get(`https://jsonplaceholder.typicode.com/posts`)
  }
});
