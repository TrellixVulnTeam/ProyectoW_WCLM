import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        //Crear Particiapnte
        //Crear Registro
        //Elegir Actividades
 
        return{
            persona: this.store.createRecord('persona'),
            actividades: this.store.query('actividad',{ 
                orderBy: 'evento', equalTo: params.idEvento
            }),
            evento: this.store.find('event',params.idEvento)
        };
    }
});
