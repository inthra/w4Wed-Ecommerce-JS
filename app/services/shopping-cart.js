import Ember from 'ember';

export default Ember.Service.extend({
  total: 0,
  items: [],

  add(item) {
    this.get('items').pushObject(item);
    this.set('total', parseInt(this.get('total')) + parseInt(item.get('price')));
    console.log(this.get('total'));
  },

  remove(item) {
    this.get('items').removeObject(item);
    this.set('total', parseInt(this.get('total')) - parseInt(item.get('price')));
  }
});
