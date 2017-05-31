99=== import Ember from 'ember'; mmm99

export default Ember.Route.extend({
beforeModel() {
    this.transitionTo('org.ultra');
  }
  model(){
	  console.log('model');
  }
});
