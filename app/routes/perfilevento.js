import Ember from 'ember';
import AuthRoute from "../mixins/authenticated";

export default Ember.Route.extend(AuthRoute,{
    model(params){
        let id = params.idEvento;
        return this.store.find('event',id);  
    }
});
