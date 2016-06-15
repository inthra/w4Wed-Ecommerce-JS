import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveItem() {
      var formInput = {
        title: this.get('title') ? this.get('title') : "",
        description: this.get('description') ? this.get('description') : "",
        price: this.get('price') ? this.get('price') : "",
        image: this.get('image') ? this.get('image') : "",
        detail: this.get('detail') ? this.get('detail') : "",
        quantity: this.get('quantity') ? this.get('quantity') : ""
      };
      this.sendAction('saveItem', formInput);
    }
  }
});
