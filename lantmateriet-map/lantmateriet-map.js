// ------------------------------------------------------------------------------------------------------------------------------------------
// Configurations
// ------------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------------------------------
// Imports
// ------------------------------------------------------------------------------------------------------------------------------------------
import { PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js'
import { } from './shared/style.js'

import { } from './core/user-agent/user-agent.js'

import { } from './core/aside/aside.js'
import { } from './core/details/details.js'
import { } from './core/filter/filter.js'
import { } from './core/footer/footer.js'
import { } from './core/header/header.js'
import { } from './core/logo/logo.js'
import { } from './core/map/map.js'
import { } from './core/menu/menu.js'
import { } from './core/search/search.js'
import { } from './core/tags/tags.js'
import { } from './core/title/title.js'

import { } from './shared/text/text.js'
import { } from './shared/line/line.js'
import { } from './shared/drop-down/drop-down.js'
import { } from './shared/input-range/input-range.js'


// ------------------------------------------------------------------------------------------------------------------------------------------
// Initialize state
// ------------------------------------------------------------------------------------------------------------------------------------------
export default class LantmaterietMap extends PolymerElement {

    constructor() {
        super()


        // ------------------------------------------------------------------------------------------------------------------------------------------
        // Event listeners
        // ------------------------------------------------------------------------------------------------------------------------------------------
        this.addEventListener('app-menu-toggle', this.appMenuToggleHandler)


        // ------------------------------------------------------------------------------------------------------------------------------------------
        // Initialize events
        // ------------------------------------------------------------------------------------------------------------------------------------------
    }

    ready() {
        super.ready()
        this.style.height = this.height
        this.style.width = this.width
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    // App template
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    --baseline: 24px;
                    --font-size: 16px;
                    --line-height: calc(var(--baseline) / var(--font-size));
                    
                    font-size: var(--font-size);
                    line-height: 1;
                    background: white;
                    display: grid;
                    grid-template-areas: "menu map" "menu map";
                    grid-template-columns: 30rem auto;
                    grid-template-rows: auto;
                }

                :host([app-menu-toggle]) {
                    grid-template-columns: 0rem auto;
                }
            </style>

            <app-menu>
                <app-logo></app-logo>
                <app-line horizontal margin-top></app-line>
                <app-title>
                    <p>Filtrera sökning</p>
                    <p>Vad vill du se?</p>
                </app-title>
                <app-line horizontal margin-bottom></app-line>
                <app-search></app-search>
                <app-line horizontal margin-bottom margin-top></app-line>
                <app-filter>
                    <app-drop-down options="[[state.filter]]" placeholder="Välj typ av marker"></app-drop-down>
                    <app-drop-down options="[[state.filter2]]" placeholder="Välj anslutningar"></app-drop-down>
                    <app-drop-down options="[[state.filter3]]" placeholder="Välj närliggande"></app-drop-down>
                    <app-line horizontal margin-bottom></app-line>
                    <app-text margin-bottom>Tillåten byggnadshöjd</app-text>
                    <app-text margin-bottom center>0 m - 100 m </app-text>
                    <app-input-range min="0" max="100"></app-input-range>
                    <app-line horizontal margin-bottom margin-top></app-line>
                    <app-text margin-bottom>Tillåten nockhöjd</app-text>
                    <app-text margin-bottom center>0 m - 100 m </app-text>
                    <app-input-range min="0" max="100"></app-input-range>
                    <app-line horizontal margin-bottom margin-top></app-line>
                    <app-text margin-bottom>Tillåten byggnadsarea</app-text>
                    <app-text margin-bottom center>0 kvm - 500+ kvm </app-text>
                    <app-input-range min="0" max="500"></app-input-range>
                    <app-line horizontal margin-bottom margin-top></app-line>
                    <app-text margin-bottom>Tillåten tomtarea</app-text>
                    <app-text margin-bottom center>0 kvm - 10000+ kvm </app-text>
                    <app-input-range min="0" max="10000"></app-input-range>
                    <app-line horizontal margin-bottom margin-top></app-line>
                </app-filter>
                <app-aside></app-aside>
                <app-footer></app-footer>
            </app-menu>
            <app-map></app-map>
            

            <noscript>Your browser does not support JavaScript!</noscript>
        `
    }

    static get observers() {
        return [
            'stateUpdate(state.*)'
        ]
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // App properties
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get properties() {
        return {
            width: {
                value: "0px",
                type: String,
                reflectToAttribute: true
            },
            height: {
                value: "0px",
                type: String,
                reflectToAttribute: true
            },
            appMenuToggle: {
                value: false,
                type: Boolean,
                reflectToAttribute: true
            },
            state: {
                type: Object,
                value: {
                    filter: [{
                        index: 0,
                        text: "Lorem ipsum",
                        selected: false
                    }, {
                        index: 1,
                        text: "Aspernatur iste",
                        selected: false
                    }, {
                        index: 2,
                        text: "Deleniti impedit",
                        selected: false
                    }, {
                        index: 3,
                        text: "Expedita perspiciatis",
                        selected: false
                    }, {
                        index: 4,
                        text: "Molestiae exercitationem",
                        selected: false
                    }],
                    filter2: [{
                        index: 0,
                        text: "Lorem ipsum",
                        selected: false
                    }, {
                        index: 1,
                        text: "Aspernatur iste",
                        selected: false
                    }, {
                        index: 2,
                        text: "Deleniti impedit",
                        selected: false
                    }, {
                        index: 3,
                        text: "Expedita perspiciatis",
                        selected: false
                    }, {
                        index: 4,
                        text: "Molestiae exercitationem",
                        selected: false
                    }],
                    filter3: [{
                        index: 0,
                        text: "Lorem ipsum",
                        selected: false
                    }, {
                        index: 1,
                        text: "Aspernatur iste",
                        selected: false
                    }, {
                        index: 2,
                        text: "Deleniti impedit",
                        selected: false
                    }, {
                        index: 3,
                        text: "Expedita perspiciatis",
                        selected: false
                    }, {
                        index: 4,
                        text: "Molestiae exercitationem",
                        selected: false
                    }]
                }
            }
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Methods and functions
    // ------------------------------------------------------------------------------------------------------------------------------------------
    stateUpdate(update) {
        console.group("%c[STATE]", 'color: #16a085', new Date().toLocaleTimeString())
        console.log("%c[STATE Current]", 'color: #16a085', this.state)
        console.log("%c[STATE Update]", 'color: #16a085', update)
        console.groupEnd()
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Handlers
    // ------------------------------------------------------------------------------------------------------------------------------------------
    appMenuToggleHandler() {
        this.appMenuToggle = !this.appMenuToggle
        window.dispatchEvent(new Event('resize'))
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------
// App define
// ------------------------------------------------------------------------------------------------------------------------------------------
window.customElements.define('lantmateriet-map', LantmaterietMap)
