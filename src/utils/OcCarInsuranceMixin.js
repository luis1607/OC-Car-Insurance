import { dedupingMixin } from '@bbva-web-components/bbva-core-lit-helpers/utils/mixin.js';

import { BbvaComponentConfigurationMixin } from '@bbva-spherica-components/bbva-component-configuration-mixin/index.js';

export const OcCarInsuranceMixin = dedupingMixin(
  Base =>
    class BbvaComponentConfiguration extends BbvaComponentConfigurationMixin(Base) {
      /**
       * Custom event dispatcher.
       * Dispatches a custom event with the given name, detail, and options.
       * @param {String} componentName - The class of the element that fires the event
       * @param {String} eventName - The name of the event to dispatch.
       * @param {*} detail - The detail to include in the event.
       * @private
       */
      _fireEvent(componentName, eventName, detail) {
        const composedEventName = `${componentName}-${eventName}`;
        this.dispatchEvent(
          new CustomEvent(composedEventName, {
            bubbles: true,
            composed: true,
            detail,
          }),
        );
      }
    },
);
