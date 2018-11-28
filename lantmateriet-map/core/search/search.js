import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppSearch extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: search;
                    position: relative;
                    padding: 22px;
                }

                input {
                    width: 100%;
                    height: 44px;
                    border: 1px solid;
                    border-radius: 4px;
                }

                svg {
                    position: absolute;
                    right: 33px;
                    top: 33px;
                    
                }

            </style>
            
            <input type="text" placeholder="Sök på område">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                <path fill="#000" fill-rule="nonzero" d="M22.65 20.95l-5.67-5.694a9.067 9.067 0 0 0 2.257-5.97C19.237 4.166 14.922 0 9.618 0 4.315 0 0 4.166 0 9.286c0 5.12 4.315 9.286 9.618 9.286 1.992 0 3.889-.58 5.511-1.68l5.713 5.737c.239.239.56.371.904.371.326 0 .635-.12.87-.338a1.183 1.183 0 0 0 .034-1.713zM9.618 2.421c3.92 0 7.11 3.08 7.11 6.864 0 3.785-3.19 6.864-7.11 6.864-3.92 0-7.109-3.079-7.109-6.864 0-3.785 3.19-6.864 7.11-6.864z"/>
            </svg>
                
            <slot></slot>
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

window.customElements.define('app-search', AppSearch)
