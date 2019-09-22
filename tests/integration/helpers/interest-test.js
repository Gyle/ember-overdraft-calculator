import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | interest', function(hooks) {
  setupRenderingTest(hooks);

  test('it returns an interest charge', async function(assert) {

    await render(hbs`{{interest 0.1 345 1200 100}}`);

    assert.equal(this.element.textContent.trim(), 85.5);
  });

  test('it returns no interest charge', async function(assert) {

    await render(hbs`{{interest 0.1 1220 1200 100}}`);

    assert.equal(this.element.textContent.trim(), 0);
  });

  test('it returns no interest charge', async function(assert) {

    await render(hbs`{{interest 0.1 1220 1300 100}}`);

    assert.equal(this.element.textContent.trim(), 0);
  });

});
