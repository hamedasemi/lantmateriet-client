import { html, PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppDetails extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: details;
                }

            </style>
            <slot></slot>
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-details', AppDetails)
