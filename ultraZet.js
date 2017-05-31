import Ember from 'ember';

export default Ember.Route.extend({
beforeModel() {
    this.transitionTo('org.ultra');
  }
  model(){
	  console.log('model');
  }
});
