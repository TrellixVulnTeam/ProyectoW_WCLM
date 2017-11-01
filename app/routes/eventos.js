import Ember from 'ember';

export default Ember.Route.extend({
   //beforeModel(){},
    model(){
        return {
            evento: this.store.findAll('event'),
            
        }
    },
    //afterModel(){},
    //setupController(){}
});
