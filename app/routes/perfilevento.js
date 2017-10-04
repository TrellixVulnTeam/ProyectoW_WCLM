import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        let id = params.idEvento;
        return this.store.find('event',id);  
    }
});
