import DS from 'ember-data';

export default DS.Model.extend({
    personas: DS.belongsTo('persona'),
    actividades: DS.hasMany('actividad')    

});
