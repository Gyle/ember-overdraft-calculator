import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCity(param) {
          if (param !== '') {
            return this.store.query('statement', { account: param });
          } else {
            return this.store.findAll('statement');
          }
        }
      }
});
