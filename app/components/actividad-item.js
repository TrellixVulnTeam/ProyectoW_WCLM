import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        registrarActividad(actividad, jqueryEvent){
            //Mandar actividad y estado del checkbox
            let checked = jqueryEvent.target.checked;
            this.sendAction('registrarActividad', actividad, checked)
        }
    }
});
