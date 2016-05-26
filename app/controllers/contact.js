import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),

  isDisabled: Ember.computed.and('isValidEmail', 'isValidMessage'),

  actions: {
    sendMessage() {
      alert(`Send message, email address is in progress: ${this.get('emailAddress')}, message is: ${this.get('message')}`);
      this.set('responseMessage', "We got your message and we'll get in touch soon");
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
