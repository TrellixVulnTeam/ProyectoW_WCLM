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
                case 'email':
                    this.get('session').open('firebase',{provider:'password', email: this.get('email'), password: this.get('password')}).then(()=>{
                        return this.transitionToRoute('eventos');
                    });
                    break;
            }
        }
    }
});
