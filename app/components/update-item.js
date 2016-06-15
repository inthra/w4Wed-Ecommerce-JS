import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        updateTitle: this.get('title'),
        updateDescription: this.get('description'),
        updatePrice: this.get('price'),
        updateImage: this.get('image'),
        updateDetail: this.get('detail'),
        updateQuantity: this.get('quantity')
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    },
    cancel() {
      this.set('updateItemForm', false);
    }
  }
});
