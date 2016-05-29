import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValidEmail: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('model.message.length', 5),

  isDisabled: Ember.computed.and('isValidEmail', 'isValidMessage'),

  actions: {
    sendMessage(contact) {
      contact.save();
      this.set('responseMessage', "We got your message and we'll get in touch soon");
      this.set('model.email', '');
      this.set('model.message', '');
    }
  }
});
