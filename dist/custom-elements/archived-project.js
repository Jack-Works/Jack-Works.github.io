var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { deprecatedStyle } from "./shared-css.js";
import { customElement, LitElement, html, property } from "https://cdn.pika.dev/lit-element@2.3.1";
let Archived = class Archived extends LitElement {
    constructor() {
        super(...arguments);
        this.working = false;
        this.to = '';
        this.from = '';
    }
    render() {
        return html `
            <div>
                ${this.working ? '👎' : '💥'} This project has stopped maintained since
                ${new Date(this.to).toLocaleDateString()}.<br />${this.working
            ? 'This project can work properly now.'
            : 'This project can not work properly now.'}
                <br />
                <slot></slot>
            </div>
        `;
    }
    static get styles() {
        return deprecatedStyle;
    }
};
__decorate([
    property({ type: Boolean })
], Archived.prototype, "working", void 0);
__decorate([
    property({ type: String })
], Archived.prototype, "to", void 0);
__decorate([
    property({ type: String })
], Archived.prototype, "from", void 0);
Archived = __decorate([
    customElement('i-arch')
], Archived);
export { Archived };
//# sourceMappingURL=archived-project.js.map