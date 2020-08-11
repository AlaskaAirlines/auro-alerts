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

// build the component class
class AuroAlerts extends LitElement {
  constructor() {
    super();
    this.errorDOM = new DOMParser().parseFromString(error.svg, 'text/html');
    this.errorSVG = this.errorDOM.body.firstChild;
    this.warningDOM = new DOMParser().parseFromString(warning.svg, 'text/html');
    this.warningSVG = this.warningDOM.body.firstChild;
    this.informationDOM = new DOMParser().parseFromString(information.svg, 'text/html');
    this.informationSVG = this.informationDOM.body.firstChild;
  }

  // function to define props used within the scope of thie component
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
    return html`
      <div class="alert">
        ${this.error ? html`<div class="icon">${this.errorSVG}</div>` : html``}
        ${this.warning ? html`<div class="icon">${this.warningSVG}</div>` : html``}
        ${this.information ? html`<div class="icon">${this.informationSVG}</div>` : html``}
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
