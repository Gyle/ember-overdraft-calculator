import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return this.store.findAll('statement');
        return [{
            id: 0,
            account: '01-000-00000000-50',
            accountHolder: 'MISS L (IU) Ji-eun',
            accountType: 'Jumpstart Account',
            balance: 0.00,
            available: 0.00,
        }, {
            id: 1,
            account: '01-000-00000000-51',
            accountHolder: 'MISS L (IU) Ji-eun',
            accountType: 'Online Account',
            balance: 1200.00,
            available: 1200.00,
        }, {
            id: 2,
            account: '01-000-00000000-52',
            accountHolder: 'MISS L (IU) Ji-eun',
            accountType: 'Serious Saver Account',
            balance: 11000.00,
            available: 11000.00,
        }];
      }
});
