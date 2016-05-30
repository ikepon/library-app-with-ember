import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),

  isValid: Ember.computed.notEmpty('name')
});
