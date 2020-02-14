var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, html, property } from "https://cdn.pika.dev/lit-element@2.2.1";
let Badge = class Badge extends LitElement {
    constructor() {
        super(...arguments);
        this.type = '';
    }
    archived() {
        return html `
            <span title="This project is archived and no longer maintained.">【🗃 Archived】</span>
        `;
    }
    render() {
        if (this.type === 'arch')
            return this.archived();
        return html ``;
    }
};
__decorate([
    property({ type: String })
], Badge.prototype, "type", void 0);
Badge = __decorate([
    customElement('i-badge')
], Badge);
export { Badge };
//# sourceMappingURL=inline-badges.js.map