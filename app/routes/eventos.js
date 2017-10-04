import Ember from 'ember';

export default Ember.Route.extend({
   //beforeModel(){},
    model(){
        return this.store.findAll('event');        
    },
    //afterModel(){},
    //setupController(){}
});
