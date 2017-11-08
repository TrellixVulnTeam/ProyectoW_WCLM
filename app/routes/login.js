import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    beforeModel(){
        return this.get('session').fetch().then(()=>{
            if(this.get('session.currentUser')){
                return this.transitionTo("eventos");
            }
        }).catch(()=>{
            if(this.get('session.currentUser')){
                return this.transitionTo("eventos");
            }
        })       
    }
});
