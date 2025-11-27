import '@bbva-web-components/bbva-core-scoped-custom-element-registry';
import {
  html,
  fixture,
  assert,
  fixtureCleanup
} from '@open-wc/testing';
import '../bbva-feature-oc-car-insurance.js';

suite('BbvaFeatureOcCarInsurance', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <bbva-feature-oc-car-insurance></bbva-feature-oc-car-insurance>
      `);
      await el.updateComplete;
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });
  });
});
