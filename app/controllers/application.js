import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    socket: Ember.inject.service(),

    notifications: [],

    init(){
        this._super.apply(...arguments);
        this.get('socket.socket').on('message',(msg)=>{
            this.get('notifications').pushObject(msg);
        })
    },
    actions:{
        salir(){
            return this.get('session').close().then(()=>{
                return this.transitionToRoute("login");
            })
        },

        eraseNotification(msg){
            this.get('notifications').removeObject(msg);
        }
    }
});
