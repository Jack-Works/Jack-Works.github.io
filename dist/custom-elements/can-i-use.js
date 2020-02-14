var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, html, property, css } from "https://cdn.pika.dev/lit-element@2.2.1";
let CanIUse = class CanIUse extends LitElement {
    constructor() {
        super();
        this.feature = '';
        window.addEventListener('message', e => {
            const data = e.data;
            if (typeof data === 'string' && data.indexOf('ciu_embed') > -1) {
                const height = parseInt(data.split(':')[2]) + 30;
                const iframe = this.shadowRoot.querySelector('iframe');
                iframe.height = height + 'px';
            }
        }, false);
    }
    render() {
        return html `
            <iframe
                src="https://caniuse.bitsofco.de/embed/index.html?feat=${this
            .feature}&periods=future_2,future_1,current,past_1&accessible-colours=false"
                frameborder="0"
                width="100%"
                height="400px"
            >
            </iframe>
        `;
    }
    static get styles() {
        return css `
            img {
                margin-bottom: -5px;
            }
        `;
    }
};
__decorate([
    property({ type: String })
], CanIUse.prototype, "feature", void 0);
CanIUse = __decorate([
    customElement('can-i-use')
], CanIUse);
export { CanIUse };
//# sourceMappingURL=can-i-use.js.map