import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr('string'),
  message: attr('string'),

  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),

  isDisabled: Ember.computed.and('isValidEmail', 'isValidMessage')
});
