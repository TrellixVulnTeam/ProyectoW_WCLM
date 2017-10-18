import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),

    personas: DS.belongsTo('persona'),
    actividades: DS.hasMany('actividad')
    

});
