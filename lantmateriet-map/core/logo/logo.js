import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppLogo extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: logo;
                    padding: 22px;
                    /* box-shadow: 0 0 10px gray; */
                }
                
                svg {
                    height: 100%;
                }

            </style>
                <svg id="Lager_1" data-name="Lager 1" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="5 0 276 57.2">
                    <defs>
                        <style>.cls-1{fill:#fffffd;}.cls-1,.cls-2,.cls-3,.cls-4{stroke:#1d1d1b;stroke-miterlimit:2.61;}.cls-1,.cls-3,.cls-4{stroke-width:1.22px;}.cls-1,.cls-3{fill-rule:evenodd;}.cls-2,.cls-4{fill:none;}.cls-2{stroke-width:0.76px;}.cls-3{fill:#e40428;}.cls-5{fill:#1d1d1b;}</style>
                    </defs>
                    <title>Rityta 1</title>
                    <polygon class="cls-1" points="7.04 44.09 75.08 44.09 75.08 50.2 7.04 50.2 7.04 44.09 7.04 44.09"/>
                    <path class="cls-2" d="M13.76,44.09V40.3m6.84,3.79V40.3m6.84,3.79V40.3m6.72,3.79V40.3"/>
                    <polygon class="cls-3" points="75.08 44.09 142.88 44.09 142.88 50.2 75.08 50.2 75.08 44.09 75.08 44.09"/>
                    <polygon class="cls-1" points="142.88 44.09 210.92 44.09 210.92 50.2 142.88 50.2 142.88 44.09 142.88 44.09"/>
                    <polygon class="cls-3" points="210.92 44.09 278.96 44.09 278.96 50.2 210.92 50.2 210.92 44.09 210.92 44.09"/>
                    <path class="cls-4" d="M279,50.2V44.09M7,44.09V37.61m34,6.47V39m34.08,5.13V37.61m67.8,6.47V37.61m68,6.47V37.61m68,6.47V37.61"/>
                    <polygon class="cls-5" points="35.65 13.37 33.25 13.37 33.25 28.4 40.02 28.4 40.02 26.14 35.65 26.14 35.65 13.37"/>
                    <path class="cls-5" d="M47.22,28.4h2.61l1.64-3.62h6.21l1.64,3.62h2.6L54.57,12.33Zm7.35-10.63,2.09,4.76H52.49Z"/>
                    <polygon class="cls-5" points="80.4 23.56 69.58 12.22 69.58 28.4 71.99 28.4 71.99 18.12 82.81 29.46 82.81 13.37 80.4 13.37 80.4 23.56"/>
                    <polygon class="cls-5" points="92.68 15.63 96.1 15.63 96.1 28.4 98.52 28.4 98.52 15.63 101.94 15.63 101.94 13.37 92.68 13.37 92.68 15.63"/>
                    <polygon class="cls-5" points="118.08 23.65 113.02 12.04 109.81 28.4 112.3 28.4 113.86 19.55 118.08 29.16 122.3 19.57 123.86 28.4 126.35 28.4 123.14 12.04 118.08 23.65"/>
                    <path class="cls-5" d="M141.73,12a1.46,1.46,0,1,0-1.47-1.47A1.47,1.47,0,0,0,141.73,12Z"/>
                    <path class="cls-5" d="M137.69,12a1.46,1.46,0,1,0-1.47-1.47A1.47,1.47,0,0,0,137.69,12Z"/>
                    <path class="cls-5" d="M132.34,28.4h2.61l1.65-3.62h6.22l1.65,3.62h2.61L139.7,12.33Zm7.36-10.63,2.09,4.76h-4.18Z"/>
                    <polygon class="cls-5" points="153.14 15.63 156.56 15.63 156.56 28.4 158.97 28.4 158.97 15.63 162.4 15.63 162.4 13.37 153.14 13.37 153.14 15.63"/>
                    <polygon class="cls-5" points="173.19 28.4 181.55 28.4 181.55 26.14 175.6 26.14 175.6 21.31 181.38 21.31 181.38 19.05 175.6 19.05 175.6 15.63 181.55 15.63 181.55 13.37 173.19 13.37 173.19 28.4"/>
                    <path class="cls-5" d="M201.72,17.78a4.27,4.27,0,0,0-2.05-3.71,7.92,7.92,0,0,0-4-.71h-2.49v15h2.42V22.3h.28l4.16,6,.09.13h2.94L198.49,22A4.22,4.22,0,0,0,201.72,17.78Zm-2.3.08c0,1.63-1,2.33-3.51,2.33h-.26v-4.6h.17C198.31,15.59,199.42,16.29,199.42,17.86Z"/>
                    <rect class="cls-5" x="212.57" y="13.37" width="2.42" height="15.03"/>
                    <polygon class="cls-5" points="226.52 28.4 234.89 28.4 234.89 26.14 228.94 26.14 228.94 21.31 234.72 21.31 234.72 19.05 228.94 19.05 228.94 15.63 234.89 15.63 234.89 13.37 226.52 13.37 226.52 28.4"/>
                    <polygon class="cls-5" points="245.23 13.37 245.23 15.63 248.65 15.63 248.65 28.4 251.06 28.4 251.06 15.63 254.49 15.63 254.49 13.37 245.23 13.37"/>
                </svg>
                <hr>
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-logo', AppLogo)
