import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    sendMessage(contact) {
      const controller = this.get('controller');

      contact.save().then(() => {
        controller.set('responseMessage', true);
      });
    }
  }
});
