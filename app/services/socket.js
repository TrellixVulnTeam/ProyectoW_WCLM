import Ember from 'ember';
import io from 'npm:socket.io-client';

export default Ember.Service.extend({

    init(){
        let socket = io('http://localhost:3000'); //ConfFile
        this.set('socket', socket);
    }
});
