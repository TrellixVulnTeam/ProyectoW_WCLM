import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    actions:{
        signIn(provider){

            switch(provider){
                case 'facebook':
                    this.get('session').open('firebase',{provider:'facebook'}).then(()=>{
                        if(this.get('session.currentUser')){
                            return this.transitionToRoute("eventos");
                        }else{
                            return this.transitionToRoute("login");
                        }
                    }).catch(()=>{
                        if(this.get('session.currentUser')){
                            return this.transitionToRoute("eventos");
                        }else{
                            return this.transitionToRoute("login");
                        }
                    });
                    break;
            }
        }
    }
});
