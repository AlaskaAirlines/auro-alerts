// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

// Import Icons
import error from '@alaskaairux/icons/dist/icons/alert/error_es6.js';
import warning from '@alaskaairux/icons/dist/icons/alert/warning-stroke_es6.js';
import information from '@alaskaairux/icons/dist/icons/alert/information-stroke_es6.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

/**
 * @attr {Boolean} error - Turns alert into error style
 * @attr {Boolean} warning - Turns alert into warning style
 * @attr {Boolean} information - Turns alert into information style
 *
 * @slot - Provide text for the alert. If using multiple lines, separate each line with <p> tags.
 */
class AuroAlerts extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      error: {
        type: Boolean,
        reflect: true
      },
      warning: {
        type: Boolean,
        reflect: true
      },
      information: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    let output = html``;

    if (this.error) {
      const dom = new DOMParser().parseFromString(error.svg, 'text/html'),
       svg = dom.body.firstChild;

      output = html`<div class="icon">${svg}</div>`
    } else if (this.warning) {
      const dom = new DOMParser().parseFromString(warning.svg, 'text/html'),
       svg = dom.body.firstChild;

      output = html`<div class="icon">${svg}</div>`
    } else if (this.information) {
      const dom = new DOMParser().parseFromString(information.svg, 'text/html'),
       svg = dom.body.firstChild;

      output = html`<div class="icon">${svg}</div>`
    }

    return html`
      <div class="alert">
        ${output}
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-alerts")) {
  customElements.define("auro-alerts", AuroAlerts);
}
