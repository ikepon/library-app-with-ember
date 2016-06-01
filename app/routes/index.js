import Ember from 'ember';

export default Ember.Route.extend({
  headerMessage: 'Coming Soon',
  responseMessage: '',

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {
    saveInvitation(invitation) {
      const controller = this.get('controller');

      invitation.save().then(() => {
        controller.set('responseMessage', true);
      });
    }
  }
});
