var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { recommendStyle } from './shared-css.js';
import { customElement, LitElement, html, property } from "https://cdn.pika.dev/lit-element@2.3.1";
const status = {
    active: '👀 This experiment is active.',
    success: '✔️ The experiment has ended successfully.',
    fail: '❌ This experiment has failed.',
};
let Experimental = class Experimental extends LitElement {
    constructor() {
        super(...arguments);
        this.status = 'active';
    }
    render() {
        return html `
            <div>
                🔬 This is an experiment. It may not ready for the production environment, and just created for PoC.
                <br />
                ${status[this.status]}
                <br />
                <slot></slot>
            </div>
        `;
    }
    static get styles() {
        return recommendStyle;
    }
};
__decorate([
    property({ type: String })
], Experimental.prototype, "status", void 0);
Experimental = __decorate([
    customElement('i-exp')
], Experimental);
export { Experimental };
//# sourceMappingURL=experimental.js.map