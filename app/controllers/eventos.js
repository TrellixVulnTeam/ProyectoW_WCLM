import Ember from 'ember';

export default Ember.Controller.extend({
    contadorEventos: Ember.computed('model.evento.length', function(){
        return this.get('model.evento.length');
    })
});
