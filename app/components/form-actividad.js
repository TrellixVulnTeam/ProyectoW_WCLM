import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        borrarActividad(){
            this.get('activi').destroyRecord();
        }
    }
});
