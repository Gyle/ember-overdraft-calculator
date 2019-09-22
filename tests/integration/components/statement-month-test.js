import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | statement-month', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StatementMonth />`);

    assert.equal(this.element.textContent.trim(), '$\n$\n$');

    // Template block usage:
    await render(hbs`
      <StatementMonth>
        template block text
      </StatementMonth>
    `);

    assert.equal(this.element.textContent.trim(), '$\n$\n$');
  });
});
