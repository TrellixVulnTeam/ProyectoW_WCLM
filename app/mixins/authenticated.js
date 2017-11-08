import Ember from 'ember';

export default Ember.Mixin.create({
    session: Ember.inject.service(),
    beforeModel(){
        return this.get('session').fetch().catch(()=>{
            if(this.get('session.currentUser')){
                return;
            }else{
                return this.transitionTo("login");
            }
        })       
    }
});
