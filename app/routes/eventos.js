import Ember from 'ember';
import AuthRoute from "../mixins/authenticated";

export default Ember.Route.extend(AuthRoute,{
   //beforeModel(){},
    model(){
        return {
            evento: this.store.findAll('event'),
            
        }
    },
    //afterModel(){},
    //setupController(){}
});
