import { customElement, LitElement, html, property, css } from 'lit-element'
@customElement('can-i-use')
export class CanIUse extends LitElement {
    @property({ type: String }) feature = ''
    render() {
        return html`
            <iframe
                src="https://caniuse.bitsofco.de/embed/index.html?feat=${this
                    .feature}&periods=future_2,future_1,current,past_1&accessible-colours=false"
                frameborder="0"
                width="100%"
                height="400px"
            ></iframe>
        `
    }
    constructor() {
        super()
        window.addEventListener(
            'message',
            (e) => {
                const data = e.data
                if (typeof data === 'string' && data.indexOf('ciu_embed') > -1) {
                    const height = parseInt(data.split(':')[2]) + 30
                    const iframe = this.shadowRoot!.querySelector('iframe')!
                    iframe.height = height + 'px'
                }
            },
            false,
        )
    }
    static get styles() {
        return css`
            img {
                margin-bottom: -5px;
            }
        `
    }
}
