import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

import { } from '../icon/icon.js'

export default class AppDropDown extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    position: relative;
                    margin-bottom: 2rem;
                }

                app-icon {
                    width: 1.6rem;
                    height: 1.6rem;
                }
                
                :host > [selected] {
                    background-color: #f8f8f8;
                    padding: 1.1rem;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid black;
                    border-top-right-radius: .4rem;
                    border-top-left-radius: .4rem;
                }
                :host [selected-nest] {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                [options] {
                    z-index: 1;
                    display: none;
                    position: absolute;
                    background-color: #f8f8f8;
                    padding: 1.1rem;
                    width: 100%;
                    box-shadow: 0px 5px 1.7rem -.5rem;
                    border: 1px solid black;
                }

                [active][options] {
                    display: flex;
                    flex-direction: column;
                }

                [option][selected] {

                }

                input, span {
                    pointer-events: none;
                }

                app-icon {
                    min-width: 1.6rem;
                }
            </style>
 
            <div selected on-click="selectedClick">
                
                    <dom-if if="[[!getSelectedStats(options)]]">
                        <template>
                            [[placeholder]] 
                        </template>
                    </dom-if>
                    <div selected-nest>
                <dom-repeat items="[[options]]" as="option">
                    <template>      
                        <dom-if if="[[option.selected]]">
                            <template>
                                <span>[[option.text]]</span>
                            </template>
                        </dom-if>
                    </template>
                </dom-repeat>
                </div>
                <app-icon icon="arrow-down"></app-icon>
            </div>
           
            <div options active$="[[active]]">
                <dom-repeat items="[[options]]" as="option">
                    <template>      
                        <div option selected$="[[option.selected]]" on-click="optionClick" index="[[option.index]]">
                            <input type="checkbox" checked$="[[option.selected]]">
                            <span>[[option.text]]</span>
                        </div>
                    </template>
                </dom-repeat>
            </div>
        `
    }

    ready() {
        super.ready()
    }

    selectedClick() {
        this.active = !this.active
    }

    optionClick(e) {
        this.set(`options.${e.target.index}.selected`, !this.get(`options.${e.target.index}.selected`))
        let options = this.get('options')
        this.set('options', [])
        this.set('options', options)
    }

    getSelectedStats(options) {
        let selectedStats = 0
        options.map((option) => {
            if (option.selected) {
                selectedStats++
            }
        })
        return selectedStats
    }

    static get properties() {
        return {
            options: {
                type: Array,
                value: () => { return [] }
            },
            placeholder: {
                type: String,
                value: ""
            }
        }
    }
}

window.customElements.define('app-drop-down', AppDropDown)
