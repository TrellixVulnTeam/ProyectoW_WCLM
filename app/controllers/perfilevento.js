import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        borrar(){
            //this.get('model').deleteRecord();
            this.get('model').destroyRecord();
            swal(
                'Eliminado',
                'Se eliminó exitosamente',
                'success'
                ).then(()=>{
                    swal.close();
                    this.sendAction('didSave');
                })
        },

        irLista(){
            return this.transitionToRoute('eventos');
        }
    }
});
