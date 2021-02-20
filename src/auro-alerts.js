// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import Icons
import error from '@alaskaairux/icons/dist/icons/alert/error_es6.js';
import warning from '@alaskaairux/icons/dist/icons/alert/warning-stroke_es6.js';
import information from '@alaskaairux/icons/dist/icons/alert/information-stroke_es6.js';
import success from '@alaskaairux/icons/dist/icons/interface/check-stroke_es6.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

/**
 * @attr {Boolean} error - Turns alert into error style
 * @attr {Boolean} fixed - uses px values instead of rem
 * @attr {Boolean} warning - Turns alert into warning style
 * @attr {Boolean} success - Turns alert into success style
 * @attr {Boolean} information - Turns alert into information style
 * @attr {Boolean} noIcon - Removes icon from alert UI
 * @attr {String} role - The role will be set based on type
 *
 * @slot - Provide text for the alert. If using multiple lines, separate each line with <p> tags.
 */
class AuroAlerts extends AuroElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      noIcon:         { type: Boolean },
      error:          { type: Boolean },
      success:        { type: Boolean },
      warning:        { type: Boolean },
      information:    { type: Boolean },
      role:           { type: String,
                        reflect: true }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ]
  }

  /**
   * @private Internal function to generate the HTML for the icon to use
   * @param {string} svgContent - The imported svg icon
   * @returns {TemplateResult} - The html template for the icon
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
    svg = dom.body.firstChild;

  return this.noIcon
    ? html``
    : html`<div class="icon">${svg}</div>`
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    let output = html``;
    const alertType = this.error || this.warning || this.information || this.success;

    switch (alertType) {
      case undefined:
        break;
      case this.error:
        output = this.generateIconHtml(error.svg);
        this.role = "alert";
        this.type = "Error.";
        break;
      case this.success:
        output = this.generateIconHtml(success.svg);
        this.role = "alert";
        this.type = "Success.";
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
