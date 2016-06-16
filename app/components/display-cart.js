import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),

  actions: {
    remove(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
