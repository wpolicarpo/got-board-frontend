import DS from 'ember-data';

let attr = DS.attr;

let Territory = DS.Model.extend({
  map: DS.belongsTo("map"),
  slug: attr(),
  path: attr(),
  units: DS.hasMany({ async: true }),
});

export default Territory;
