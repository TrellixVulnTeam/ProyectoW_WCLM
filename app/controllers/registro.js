import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        setGender(x){
            switch(x){
                case 1:
                    this.set('model.persona.isMasculino', true);
                    this.set('model.persona.isFemenino',false);
                    break;
                case 2:
                    this.set('model.persona.isMasculino', false);
                    this.set('model.persona.isFemenino', true);
                    break;                    
            }
        },
        registrarActividad(actividad, checked){
            let ticketEvento;
            if(Ember.isBlank(this.get('model.persona.tickets'))){
                ticketEvento = this.get('model.persona.tickets').createRecord({});
            }else{
                ticketEvento = this.get('model.persona.tickets.lastObject');
            }
            if(checked){
                ticketEvento.get('actividades').pushObject(actividad);
                swal(
                    'Guardado',
                    'Se registró en la actividad ' + actividad.get('nombre'),
                    'success'
                )
            }else{
                ticketEvento.get('actividades').removeObject(actividad);
            }
        },
        save(){ 
            let modelPersona = this.get('model').persona;
            //VALIDAR CAMPOS
            if(Ember.isBlank(modelPersona.get('nombre'))){
                return alert('El campo de nombre no puede estar vacio');
            }
            if(Ember.isBlank(modelPersona.get('email'))){
                return alert('El campo de email no puede estar vacio');
            }
            // if(this.get('actividadesArray')){
            //     this.get('actividadesArray').forEach((a)=>{
            //         a.set('evento', evento);
            //     });
            // }

            // //GUARDAR
            // evento.save().then(()=>{
            //         Ember.RSVP.all(evento.get('actividades').invoke('save')).then(()=>{
            //             swal(
            //                 'Guardado',
            //                 evento.get('nombre')+' Se guardo exitosamente',
            //                 'success'
            //             ).then(()=>{
            //                 swal.close();
            //                 this.sendAction('didSave');
            //             })
            //         })
            // }); //ASINCRONO
            // //ES POSIBLE QUE AUN NO SE HAYA GUARDADO
        },
    }
});
