import DS from 'ember-data';

const { Model, attr } = DS;

export default DS.Model.extend({
  description: attr(),
  isPreferential: attr(),
  links: attr(),
  location: attr(),
  name: attr(),
  priority: attr(),
  rooms: attr()
});
