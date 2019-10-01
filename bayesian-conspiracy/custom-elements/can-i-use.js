/// <reference path="./global.d.ts" />
import { LitElement, html, css } from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module'

class CanIUse extends LitElement {
    render() {
        return html`
            <iframe
                src="https://caniuse.bitsofco.de/embed/index.html?feat=${this
                    .feature}&periods=future_2,future_1,current,past_1&accessible-colours=false"
                frameborder="0"
                width="100%"
                height="400px"
            >
            </iframe>
        `
    }
    constructor() {
        super()
        this.feature = ''
        window.addEventListener(
            'message',
            e => {
                const data = e.data
                if (typeof data === 'string' && data.indexOf('ciu_embed') > -1) {
                    const height = parseInt(data.split(':')[2]) + 30
                    const iframe = this.shadowRoot.querySelector('iframe')
                    iframe.height = height + 'px'
                }
            },
            false,
        )
    }
    static get properties() {
        return {
            feature: { type: String },
        }
    }
    static get styles() {
        return css`
            img {
                margin-bottom: -5px;
            }
        `
    }
}

customElements.define('can-i-use', CanIUse, {})
