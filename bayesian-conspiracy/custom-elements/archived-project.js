/// <reference path="./global.d.ts" />
import { LitElement, html } from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module'
import { deprecatedStyle } from './shared-css.js'

class Archived extends LitElement {
    render() {
        return html`
            <div>
                ${this.working ? '👎' : '💥'} This project has stopped maintained since
                ${new Date(this.to).toLocaleDateString()}.<br />${this.working
                    ? 'This project can work properly now.'
                    : 'This project can not work properly now.'}
                <br />
                <slot></slot>
            </div>
        `
    }
    constructor() {
        super()
        this.working = false
        this.from = ''
        this.to = ''
    }
    static get styles() {
        return deprecatedStyle
    }
    static get properties() {
        return {
            from: { type: String },
            to: { type: String },
            working: { type: Boolean },
        }
    }
}

customElements.define('i-arch', Archived, {})
