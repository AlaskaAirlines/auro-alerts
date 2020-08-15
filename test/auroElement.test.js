/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-alerts.js';

describe('auro-alerts', () => {
  it('sets element to hidden', async () => {
    const el = await fixture(html`
      <auro-alerts hidden></auro-alerts>
    `);

    const root = el.shadowRoot;
    const content = root.querySelector('.alert');

    await expect(content.getAttribute('aria-hidden')).to.equal('false');
    await expect(el.hidden).to.be.true;
  });

  it('sets element to hidden visually', async () => {
    const el = await fixture(html`
      <auro-alerts hiddenVisually></auro-alerts>
    `);

    const root = el.shadowRoot;
    const content = root.querySelector('.alert');

    await expect(content.getAttribute('aria-hidden')).to.equal('false');
  });

  it('sets element to hidden from screen readers', async () => {
    const el = await fixture(html`
      <auro-alerts hiddenAudible></auro-alerts>
    `);

    const root = el.shadowRoot;
    const content = root.querySelector('.alert');

    await expect(content.getAttribute('aria-hidden')).to.equal('true');
  });
});
