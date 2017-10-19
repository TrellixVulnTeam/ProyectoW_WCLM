import Ember from 'ember';

export default Ember.Component.extend({
    //Override ember lifecycle  
    didInsertElement(...params){
        this._super(...params);
        //Iniciar plugins
        this.$('.collapse').collapse({
            parent: '#lista-actividades',
            toggle: false
        });

    },
    actions:{
        registrarActividad(actividad, checked){
            this.sendAction('registrarActividad', actividad, checked)
        }
    }
});
