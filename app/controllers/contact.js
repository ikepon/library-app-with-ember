import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),

  isDisabled: Ember.computed.and('isValidEmail', 'isValidMessage')
});
