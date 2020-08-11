/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-alerts.js';

describe('auro-alerts', () => {
  it('sets auro-alerts to error style', async () => {
    const el = await fixture(html`
      <auro-alerts error></auro-alerts>
    `);

    const root = el.shadowRoot;
    const svg = root.querySelector('svg');
    const title = svg.querySelector('title');

    await expect(title.innerHTML).to.equal("Error");
  });

  it('sets auro-alerts to warning style', async () => {
    const el = await fixture(html`
      <auro-alerts warning></auro-alerts>
    `);

    const root = el.shadowRoot;
    const svg = root.querySelector('svg');
    const title = svg.querySelector('title');

    await expect(title.innerHTML).to.equal("Warning");
  });


  it('sets auro-alerts to information style', async () => {
    const el = await fixture(html`
      <auro-alerts information></auro-alerts>
    `);

    const root = el.shadowRoot;
    const svg = root.querySelector('svg');
    const title = svg.querySelector('title');

    await expect(title.innerHTML).to.equal("Information");
  });

  it('auro-alerts is accessible', async () => {
    const el = await fixture(html`
      <auro-alerts information>
        <p>For your child's safety, unaccompanied minors aged 8-17 can only fly on Alaska Airlines flights departing between 5:00 AM and 9:00 PM. <a href="#">Rules for children traveling alone.</a></p>
        <p>We searched for all Seattle Area, WA airports. Be sure to note which airport is being used.</p>
        <p>We searched for all Bay Area, CA airports. Be sure to note which airport is being used.</p>
      </auro-alerts>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-alerts custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-alerts"));

    await expect(el).to.be.true;
  });
});
