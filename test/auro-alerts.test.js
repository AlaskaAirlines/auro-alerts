import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-alerts.js';

describe('auro-alerts', () => {
  it('sets the CSS class on auro-alerts > div element', async () => {
    const el = await fixture(html`
      <auro-alerts cssclass="testClass"></auro-alerts>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-alerts is accessible', async () => {
    const el = await fixture(html`
      <auro-alerts cssclass="testClass"></auro-alerts>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-alerts custom element is defined', async () => {
    const el = await !!customElements.get("auro-alerts");

    await expect(el).to.be.true;
  });
});
