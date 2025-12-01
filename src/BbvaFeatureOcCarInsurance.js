import { LitElement, html } from 'lit';
// import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';


// import { BbvaWidgetConfigurationMixin } from '@bbva-spherica-components/bbva-widget-configuration-mixin/index.js';
// import { BbvaWidgetDefaultsMixin } from '@bbva-spherica-components/bbva-widget-defaults-mixin/index.js';
import { CarInfoPage } from './pages/car-info-page/CarInfoPage.js';


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
 * 
 * @customElement bbva-feature-product-detail-accounts-pe
 * @appliesMixin {BbvaWidgetConfigurationMixin, BbvaWidgetDefaultsMixin}
 * Event Example
 * @fires {} "bbva-feature-product-detail-accounts-pe-navigation-product-to-transfer"
 *  *
 */

// BbvaWidgetConfigurationMixin(
//   BbvaWidgetDefaultsMixin(LitElement)
// )
export class BbvaFeatureOcCarInsurance extends LitElement {

  static get is() {
    return "bbva-feature-oc-car-insurance";
  }

   static get scopedElements() {
    const classes = [
      CarInfoPage,
      ...BbvaFeatureOcCarInsurance.configurationScopedElements(),
    ];

    return BbvaFeatureOcCarInsurance.scopedElementsFromClasses(classes);
  }

  static get properties() {
    return {
      name: {
        type: String,
        attribute: 'name-api-version'
      },
    };
  }

  constructor() {
    super();
    this.name = 'Nuevo';
  }

 

  static get styles() {
    return [
      styles,
    ];
  }


  render() {
    return html`
      ${super.render()}
      <car-info-page .dato=${this.name}></car-info-page>
    `;
  }
}
