import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js';

export default class AppSearch extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: search;
                    position: relative;
                    margin-top: 4rem;
                    margin-bottom: 4rem;
                }

                input {
                    font-size: 2.4rem;
                    padding: 2rem 6rem 2rem 2rem;
                    width: 100%;
                    border: 1px solid;
                    border-radius: .4rem;
                    font-size: inherit;
                    outline: none;
                }

                [search-icon], [cross-icon] {
                    position: absolute;
                    right: 1.2em;
                    top: 0.9em;
                    width: 3rem;
                    height: 3rem;
                }

                [search-icon]:not([active]) {
                    display: none;
                }

                [cross-icon]:not([active]) {
                    display: none;
                }

                [suggestions] {
                    border: 1px solid black;
                    border-top: none;
                    border-radius: .4rem;
                    overflow: hidden;
                }

                [suggestion] {
                    background: #f8f8f8;
                    padding: 2rem;
                    cursor: pointer;
                }
                
                [suggestion]:nth-last-of-type(2n) {
                    background: white;
                }

                [suggestions]:not([active]) {
                    display: none;
                }

            </style>
            
            <input type="text" placeholder="Sök på område" on-input="input" value="[[value]]">
            <div suggestions active$="[[autocompleteSuggestions.0]]">
                <dom-repeat items="[[autocompleteSuggestions]]">
                    <template>
                        <div on-click="click" key="[[item.key]]" value="[[item.value]]" suggestion>[[item.value]]</div>
                    </template>
                </dom-repeat>
            </div>
                        
            <svg viewBox="0 0 23 23" search-icon active$="[[!type]]">
                <path fill="#333" fill-rule="nonzero" d="M22.65 20.95l-5.67-5.694a9.067 9.067 0 0 0 2.257-5.97C19.237 4.166 14.922 0 9.618 0 4.315 0 0 4.166 0 9.286c0 5.12 4.315 9.286 9.618 9.286 1.992 0 3.889-.58 5.511-1.68l5.713 5.737c.239.239.56.371.904.371.326 0 .635-.12.87-.338a1.183 1.183 0 0 0 .034-1.713zM9.618 2.421c3.92 0 7.11 3.08 7.11 6.864 0 3.785-3.19 6.864-7.11 6.864-3.92 0-7.109-3.079-7.109-6.864 0-3.785 3.19-6.864 7.11-6.864z"/>
            </svg>

           
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" active$="[[type]]" cross-icon on-click="clickCrossIcon">
                <g fill="none" fill-rule="evenodd" stroke="#333" stroke-linecap="round" stroke-width="3">
                    <path d="M2.137 2.242l20.66 20.552M22.678 2.053L2.885 23.017"/>
                </g>
            </svg>


            
                
            <slot></slot>
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {
            autocompleteSuggestions: {
                type: Array,
                value: []
            },
            type: {
                type: Boolean,
                value: false
            }
        }
    }

    click(event) {
        this.set('value', event.target.value)
        this.dispatchEvent(new CustomEvent('app-search', { bubbles: true, composed: true, detail: { key: event.target.key, value: event.target.value } }))
        this.dispatchEvent(new CustomEvent('app-search-autocomplete', { bubbles: true, composed: true, detail: { value: [] } }))
        this.set('autocompleteSuggestions', [])
    }

    input(event) {
        if(event.target.value) {
            this.set('type', true)
        } else {
            this.set('type', false)
        }
        if (event.target.value.charAt(0).match(/[0-9]/)) {
            this.dispatchEvent(new CustomEvent('app-search-autocomplete', { bubbles: true, composed: true, detail: { value: event.target.value } }))
        } else if (event.target.value.match(/[a-z]/i) && event.target.value.length >= 3) {
            this.dispatchEvent(new CustomEvent('app-search-autocomplete', { bubbles: true, composed: true, detail: { value: event.target.value } }))
        }
    }

    clickCrossIcon() {
        this.input({target: { value: ""}})
        this.set('type', false)
        this.set('value', null)
    }
}

window.customElements.define('app-search', AppSearch)
