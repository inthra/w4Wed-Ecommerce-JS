import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(params) {
      var item = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        detail: this.get('detail'),
        quantity: this.get('quantity')
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    }
  }
});
