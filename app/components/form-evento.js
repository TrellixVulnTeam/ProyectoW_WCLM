import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions:{
        save(){
            let evento = this.get('evento');
            //VALIDAR CAMPOS
            if(Ember.isBlank(evento.get('nombre'))){
                return alert('El campo de nombre no puede estar vacio');
            }
            if(this.get('actividadesArray')){
                this.get('actividadesArray').forEach((a)=>{
                    a.set('evento', evento);
                });
            }

            //GUARDAR
            evento.save().then(()=>{
                    Ember.RSVP.all(evento.get('actividades').invoke('save')).then(()=>{
                        swal(
                            'Guardado',
                            evento.get('nombre')+' Se guardo exitosamente',
                            'success'
                        ).then(()=>{
                            swal.close();
                            this.sendAction('didSave');
                        })
                    })
            }); //ASINCRONO
            //ES POSIBLE QUE AUN NO SE HAYA GUARDADO
        },
        saveActividad(){
            //INICIA UNA NUEVA ACTIVIDAD
            let actividad = this.get('store').createRecord('actividad',{
                evento: this.get('evento')
            });
            
        }
    }
});
