import Ember from 'ember';

export default Ember.Controller.extend({

  pessoa: {
    nome: '',
    idade: ''
  },

  items: [{
    id: 1,
    name: 'Daniel'
  }, {
    id: 2,
    name: 'Douglas'
  }, {
    id: 3,
    name: 'Rafael'
  }],

  actions: {
    chamarNome() {
      console.log('seleção', this.get('item'))
    }
  }

});
