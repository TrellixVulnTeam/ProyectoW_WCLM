import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    inicio: DS.attr('string'),
    fin: DS.attr('string'),

    evento: DS.belongsTo('event'),
    tickets: DS.hasMany('ticket')
});
