import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    saveItemToDB(itemParams) {
      var newItem = this.store.createRecord('item', itemParams);
      newItem.save();
      this.transitionTo('index');
    },
    update(item, params) {
      console.log("admin stuff: " + params);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          item.set(key,params[key]);
        }
      });
      item.save();
    }
  }
});
