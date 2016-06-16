import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(item, params) {
      this.sendAction('update', item, params);
    },
    destroyItem(item) {
      this.sendAction('destroyItem', item);
    }
  }
});
