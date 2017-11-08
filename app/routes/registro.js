import Ember from 'ember';
import AuthRoute from "../mixins/authenticated";

export default Ember.Route.extend(AuthRoute,{
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
