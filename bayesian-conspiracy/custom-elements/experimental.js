/// <reference path="./global.d.ts" />
import { LitElement, html } from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module'
import { recommendStyle } from './shared-css.js'
const status = {
    active: '👀 This experiment is active.',
    success: '✔️ The experiment has ended successfully.',
    fail: '❌ This experiment has failed.',
}
class Experimental extends LitElement {
    render() {
        return html`
            <div>
                🔬 This is an experiment. It may not ready for the production environment, and just created for PoC.
                <br />
                ${status[this.status]}
                <br />
                <slot></slot>
            </div>
        `
    }
    constructor() {
        super()
        /** @type {'active' | 'success' | 'fail'} */
        this.status = 'active'
    }
    static get styles() {
        return recommendStyle
    }
    static get properties() {
        return {
            status: { type: String },
        }
    }
}

customElements.define('i-exp', Experimental, {})
