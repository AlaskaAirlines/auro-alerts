// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import AuroElement from './auroElement';
import auroElementCss from "./auroElement-css.js";

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
 * @attr {String} role - The role will be set based on type
 *
 * @slot - Provide text for the alert. If using multiple lines, separate each line with <p> tags.
 */
class AuroAlerts extends AuroElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      error:          { type: Boolean },
      warning:        { type: Boolean },
      information:    { type: Boolean },
      role:           { type: String,
                        reflect: true }
    };
  }

  static get styles() {
    return css`
      ${auroElementCss}
      ${styleCss}
    `;
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
    const alertType = this.error || this.warning || this.information;

    switch (alertType) {
      case undefined:
        break;
      case this.error:
        output = this.generateIconHtml(error.svg);
        this.role = "alert";
        this.type = "Error.";
        break;
      case this.warning:
        output = this.generateIconHtml(warning.svg);
        this.role = "alert";
        this.type = "Warning."
        break;
      case this.information:
        output = this.generateIconHtml(information.svg);
        this.type = "Informational notice."
        break;
      default:
        break;
    }

    return html`
      <div class="alert"
        aria-hidden="${this.hideAudible(this.hiddenAudible)}">
        ${output}
        <div class="content">
          <span class="util_displayHiddenVisually">${this.type}</span>
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
