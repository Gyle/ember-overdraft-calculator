import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | oh-no', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:oh-no');
    assert.ok(route);
  });
});
