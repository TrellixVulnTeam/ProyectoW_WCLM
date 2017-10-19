import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    email: DS.attr('string'),

    tickets: DS.hasMany('ticket'),

    isMasculino: false,
    isFemenino: false
});
