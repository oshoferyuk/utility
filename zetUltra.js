//import Ember from 'ember'; and more

export default Ember.Route.extend({
beforeModel() {
    this.transitionTo('org.repos');
  }
});
