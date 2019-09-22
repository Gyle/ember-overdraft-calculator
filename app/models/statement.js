import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    account: DS.attr(),
    accountType: DS.attr(),
    balance: DS.attr(),
    available: DS.attr(),
    creditLimit: DS.attr(),
    interestRate: DS.attr(),
});
