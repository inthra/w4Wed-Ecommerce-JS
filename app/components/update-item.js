import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        detail: this.get('detail'),
        quantity: this.get('quantity')
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    },
    cancel() {
      this.set('updateItemForm', false);
    },
    delete(item) {
      if(confirm('Are you sure you want to delete this item?')) {
        this.sendAction('destroyItem', item);
      }
    }
  }
});
