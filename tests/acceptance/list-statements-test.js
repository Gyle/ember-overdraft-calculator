import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list statements', function(hooks) {
  setupApplicationTest(hooks);

  test('should show statements as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/statements', 'should redirect automatically');
  });

  test('should list available accounts.', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });


});
