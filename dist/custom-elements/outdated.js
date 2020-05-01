var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { warningStyle } from "./shared-css.js";
import { customElement, LitElement, html, property } from "https://cdn.pika.dev/lit-element@2.3.1";
let Outdated = class Outdated extends LitElement {
    constructor() {
        super(...arguments);
        this.from = '';
        this.to = '';
    }
    render() {
        return html `
            <div>
                👎 The content of this article has deprecated at ${new Date(this.to).toLocaleDateString()}. Information
                here may no longer correct or has no reference value.
                <br />
                <slot></slot>
            </div>
        `;
    }
    static get styles() {
        return warningStyle;
    }
};
__decorate([
    property({ type: String })
], Outdated.prototype, "from", void 0);
__decorate([
    property({ type: String })
], Outdated.prototype, "to", void 0);
Outdated = __decorate([
    customElement('i-dep')
], Outdated);
export { Outdated };
//# sourceMappingURL=outdated.js.map