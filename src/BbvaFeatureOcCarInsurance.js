import { LitElement, html } from 'lit';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './bbva-feature-oc-car-insurance.css.js';

/**
 * ![Lit component](https://img.shields.io/badge/Lit-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <bbva-feature-oc-car-insurance></bbva-feature-oc-car-insurance>
 * ```
 */
export class BbvaFeatureOcCarInsurance extends LitElement {
  static get properties() {
    return {
      /**
       * Description for property
       */
      name: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-feature-oc-car-insurance-shared-styles'),
    ];
  }

  render() {
    return html`
      <p>Welcome to ${this.name}</p>
      <slot></slot>
    `;
  }
}
