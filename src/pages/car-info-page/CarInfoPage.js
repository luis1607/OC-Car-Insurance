
import { LitElement, html } from 'lit';
// import { BbvaComponentConfigurationMixin } from '@bbva-spherica-components/bbva-component-configuration-mixin/index.js';


import styles from './car-info-page.css.js';
// import { BbvaHeaderMain } from '@bbva-spherica-components/bbva-header-main';
import "@bbva-spherica-components/bbva-header-main/bbva-header-main.js"
import "@bbva-spherica-components/bbva-type-text/bbva-type-text.js";
import "@bbva-spherica-components/bbva-list-bullet/bbva-list-bullet.js"
// import { BbvaListBullet } from "@bbva-spherica-components/bbva-list-bullet";
// import { OcCarInsuranceMixin } from '../../utils/OcCarInsuranceMixin.js';


// OcCarInsuranceMixin(
//   LitElement
// )
export class CarInfoPage extends LitElement {

  static get is() {
    return 'car-info-page';
  }

  static get properties() {
    return {
      dato: {
        type: String,
      },
    };
  }

  static get scopedElements() {
    const classes = [
      BbvaHeaderMain
    ];
    return CarInfoPage.scopedElementsFromClasses(classes);
  }

  constructor() {
    super();
    this.dato = 'Cells';
  }

  _handleNavigateToHomePage() {
  
  }

  static get styles() {
    return [
      styles,
    ];
  }

  render() {
    return html`
      <bbva-header-main
        class="primary"
        variant="modal-initial"
        text="Cotiza tu seguro"
        @header-main-close-icon-click=${this._handleNavigateToHomePage}
      ></bbva-header-main>
      <div class="content-body">
        <div class="wrapper">
        <img
          class="image-section"
          src="../../demo/images/img-logo.png"
          alt=""
        />
        </div>
        <bbva-type-text
          font-type="body"
          tag="p"
          text="Cotiza tu seguro vehicular contra robo o accidentes."
          class="description"
          alignment="center"
        ></bbva-type-text>
        <bbva-type-text
          class="text"
          size="M"
          font-type="title-default"
          text="Caracteristica"
          tag="span"
        ></bbva-type-text>
        <bbva-type-text
          font-type="body"
          tag="p"
          text="Para cotizar y contratar este seguro, tu vehiculo debe cumplir con los siguientes requisitos"
          class="description"
          alignment="left"
        ></bbva-type-text>
        <bbva-list-bullet
        text="bbva-feature-product-detail-cards-pe-modal-view-conditions-balance-favor">
      </bbva-list-bullet>
      </div>
      
    `;
  }
}


customElements.define(CarInfoPage.is, CarInfoPage);