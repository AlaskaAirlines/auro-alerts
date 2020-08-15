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
 * @attr {Boolean} hidden - If present, the component will be hidden both visually and from screen readers
 * @attr {Boolean} hiddenVisually - If present, the component will be hidden visually, but still read by screen readers
 * @attr {Boolean} hiddenAudible - If present, the component will be hidden from screen readers, but seen visually
 * @attr {String} role - The role will be set based on type
 *
 * @slot - Provide text for the alert. If using multiple lines, separate each line with <p> tags.
 */
class AuroAlerts extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      error:          { type: Boolean },
      warning:        { type: Boolean },
      information:    { type: Boolean },
      hidden:         { type: Boolean,
                        reflect: true },
      hiddenVisually: { type: Boolean,
                        reflect: true },
      hiddenAudible:  { type: Boolean,
                        reflect: true },
      role:           { type: String,
                        reflect: true }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  hideAudible(value) {
    if (value) {
      return 'true'
    }

    return 'false'
  }

  /**
   * Internal function to generate the HTML for the icon to use
   * @param {string} svgContent - The imported svg icon
   * @returns {TemplateResult} - The html template for the icon
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
    svg = dom.body.firstChild;

   return html`<div class="icon">${svg}</div>`;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    let output = html``;

    if (this.error) {
      output = this.generateIconHtml(error.svg);
      this.role = "alert";
    } else if (this.warning) {
      output = this.generateIconHtml(warning.svg);
      this.role = "alert";
    } else if (this.information) {
      output = this.generateIconHtml(information.svg);
    }

    return html`
      <div class="alert"
        aria-hidden="${this.hideAudible(this.hiddenAudible)}">
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
