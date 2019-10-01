/// <reference path="./global.d.ts" />
import { LitElement, html } from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module'
import { warningStyle } from './shared-css.js'
class Outdated extends LitElement {
    render() {
        return html`
            <div>
                👎 The content of this article has deprecated at ${new Date(this.to).toLocaleDateString()}. Information
                here may no longer correct or has no reference value.
                <br />
                <slot></slot>
            </div>
        `
    }
    constructor() {
        super()
        this.from = ''
        this.to = ''
    }
    static get styles() {
        return warningStyle
    }
    static get properties() {
        return { from: { type: String }, to: { type: String } }
    }
}

customElements.define('i-dep', Outdated, {})
